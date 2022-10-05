import { Controller, Post } from "@nestjs/common";
import { ReactionService } from "./reaction.strategy";
import { Body } from "@nestjs/common";

@Controller("reaction")
export class ReactionController {
    constructor(private reactionService: ReactionService) {}
    @Post("sendMail")
    async sendMail(@Body() body: {accessToken: string, apiKey: string, to: string, subject: string, message: string}) {
        await this.reactionService.sendMail(body) //need to add error gesture
    }
}