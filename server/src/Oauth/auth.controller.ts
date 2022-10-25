import { Body, Controller, Get, Redirect, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { response } from "express";
import { OAuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor (private authService: OAuthService) {}

    @UseGuards(AuthGuard("google"))
    @Get("google")
    async loginWithGoogle() {
        console.log("someone is trying to login with google")
    }

    @UseGuards(AuthGuard("google"))
    @Get("google/redirect")
    async loginWithGoogleRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        const user = await this.authService.loggingWithGoogle(req, body)
        if (user) {
            res.redirect("http://lisolescargot.netlify.app/Areas?token=" + user.accessToken )
        }
    }
}
