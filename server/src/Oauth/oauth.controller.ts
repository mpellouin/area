import { Body, Controller, Get, Redirect, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger";
import { response } from "express";
import { OAuthService } from "./oauth.service";

@Controller("auth")
@ApiTags("Oauth routes")
export class OAuthController {
    constructor (private oauthService: OAuthService) {}

    @UseGuards(AuthGuard("google"))
    @Get("google")
    @ApiOperation({description: "This route is used to login with google or register it as a provider", summary: "login with google"})
    async loginWithGoogle() {
        console.log("someone is trying to login with google")
    }

    @UseGuards(AuthGuard("google"))
    @Get()
    @ApiOperation({description: "This route is the callback of the auth/google route", summary: "login with google callback"})
    async loginWithGoogleRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        const user = await this.oauthService.loggingWithGoogle(req, body)
        if (user) {
            res.redirect("http://lisolescargot.netlify.app/Areas?token=" + user.accessToken )
        }
    }

    @UseGuards(AuthGuard("twitter"))
    @Get("twitter")
    @ApiOperation({description: "This route is used to login with google or register it as a provider", summary: "login with google"})
    async loginTwitter() {
        console.log("someone is trying to login with google")
    }

    @UseGuards(AuthGuard("twitter"))
    @Get()
    @ApiOperation({description: "This route is the callback of the auth/google route", summary: "login with google callback"})
    async loginWithTwitterRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        const user = await this.oauthService.loggingWithGoogle(req, body)
        if (user) {
            console.log(user)
        }
    }

    @Get("google/refresh")
    @ApiOperation({description: "This route is used to refresh a User Access Token", summary: "refresh access token"})
    @ApiBody({
        schema: {
            properties: {"userID": {type: "number"}}
        }
    })
    async refreshGoogleAccessToken(@Body() body: {userID: number}) {
        return await this.oauthService.refreshGoogleToken(body.userID)
    }
}
