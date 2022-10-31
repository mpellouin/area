import { Injectable } from "@nestjs/common";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { Observable } from "rxjs";
import { DiscordReactionsService } from "./discord/discord.reactions.service";
import { GoogleReactionsService } from "./google/google.reactions.service";

@Injectable()
export class ReactionService {
    constructor(
                private readonly googleService: GoogleReactionsService,
                private readonly discordService: DiscordReactionsService
            ) {}

    async factory(id: number, body: any): Promise<Observable<any>> {
        let observable: Observable<any> | undefined = undefined;
        observable = await this.factoryHelper(id, body)
        if (observable === undefined)
            throw new Error("Unknown action");
        return observable;
    }

    async factoryHelper(id: number, body: any): Promise<Observable<any> | undefined> {
        let response : any

        switch(id) {
            case 1:
                body.apiKey = process.env.GOOGLE_CLIENT_ID;
                response = await this.googleService.buildSendMailObservable(body);
            case 2:
                response = await this.discordService.buildSendMessageObservable(body);
            case 3:
                response = await this.googleService.buildNewEventObservable(body);
            default:
                response = undefined
        }
        return response;
    }
}