import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError, Observable } from "rxjs";

@Injectable()
export class ReactionService {
    constructor(private readonly http: HttpService) {}

    async factory(id: number, body: any): Promise<Observable<any>> {
        let observable: Observable<any> | undefined = undefined;
        observable = await this.factoryHelper(id, body)
        if (observable === undefined)
            throw new Error("Unknown action");
        return observable;
    }

    async factoryHelper(id: number, body: any): Promise<Observable<any> | undefined> {
        if (id == 1) {
            body.apiKey = process.env.GOOGLE_CLIENT_ID;
            return await this.sendMail(body);
        }
        else
            return undefined;
    }


    async sendMail(body: {accessToken: string, apiKey: string, to: string, subject: string, message: string}) {
        const encoded64Message = Buffer.from("From: <me>\nTo: <" + body.to + ">\nSubject: " + body.subject + "\n\n" + body.message + "\n" + Date.now().toLocaleString()).toString('base64')
        console.log("body = ", body)
        console.log(encoded64Message)
        const res =  await this.http.post('https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
                {raw: encoded64Message, key: body.apiKey},
                {
                    headers: {
                        "Content-Type" : "application/json",
                        "Accept" : "application/json",
                        "Authorization" : "Bearer " + body.accessToken
                    }
                }
        ).pipe(catchError(error => {
            throw new HttpException(error.response.data, error.response.status)
        }))
        res.subscribe(data => {});
        return res;
    }
}