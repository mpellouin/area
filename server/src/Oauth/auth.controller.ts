import { Body, Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor (private authService: AuthService) {}

    @UseGuards(AuthGuard("google"))
    @Get("google")
    async loginWithGoogle() {
        console.log("someone is trying to login with google")
    }

    @UseGuards(AuthGuard("google"))
    @Get("google/redirect")
    async loginWithGoogleRedirect(@Req() req, @Body() body?: {email: string}) {
        return this.authService.loggingWithGoogle(req, body)
    }
}