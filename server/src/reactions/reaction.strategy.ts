import { HttpModule, HttpService } from "@nestjs/axios";
import { Headers, HttpException, Injectable, Param } from "@nestjs/common";
import { catchError } from "rxjs";

@Injectable()
export class ReactionService {
    constructor(private readonly http: HttpService) {}
    async sendMail(body: {accessToken: string, apiKey: string, to: string, subject: string, message: string}) {
        const encoded64Message = Buffer.from("From: <me>\nTo: " + body.to + "\nSubject: " + body.subject + "\n\n" + body.message).toString('base64')
        console.log("body = ", body)
        console.log(encoded64Message)
        return await this.http.post('https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
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
    }
}