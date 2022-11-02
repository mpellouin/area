import {Body, Controller, Get, Redirect, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {response} from 'express';
import {OAuthService} from './oauth.service';

@Controller('auth')
export class OAuthController {
    constructor(private oauthService: OAuthService) {}

    @UseGuards(AuthGuard('google'))
    @Get('google')
    async loginWithGoogle() {
        console.log('someone is trying to login with google');
    }

    @UseGuards(AuthGuard('google'))
    @Get('google/redirect')
    async loginWithGoogleRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        const user = await this.oauthService.loggingWithGoogle(req, body);
        if (user) {
            res.redirect('http://lisolescargot.netlify.app/Areas?token=' + user.accessToken);
        }
    }

    @Get('google/refresh')
    async refreshGoogleAccessToken(@Body() body: {userID: number}) {
        return await this.oauthService.refreshGoogleToken(body.userID);
    }
}
