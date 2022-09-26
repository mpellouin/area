import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
    constructor (private authService: authService){}

    @UseGuards(AuthGuard('google'))
    @Get('google'
    )
}