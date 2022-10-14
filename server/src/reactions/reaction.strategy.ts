import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError, Observable } from "rxjs";
import { DiscordReactionsService } from "./discord/discord.reactions.service";
import { GoogleReactionsService } from "./google/google.reactions.service";

@Injectable()
export class ReactionService {
    constructor(private readonly http: HttpService,
                private readonly googleService: GoogleReactionsService,
                private readonly discordService: DiscordReactionsService) {}

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
            return await this.googleService.buildSendMailObservable(body);
        }
        if (id == 2) {
            return await this.discordService.buildSendMessageObservable(body);
        }
        if (id < 1 && id > 2)
            return undefined;
    }
}