import {Body, Controller, Get, Param, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from 'src/auth/auth.service';
import {UserService} from 'src/user/user.service';
import {OAuthService} from './oauth.service';
import {ApiBody, ApiOperation, ApiTags} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Oauth routes')
export class OAuthController {
    constructor(private oauthService: OAuthService, private userService: UserService, private authService: AuthService) {}

    @UseGuards(AuthGuard('google'))
    @Get('google')
    @ApiOperation({description: 'This route is used to login with google or register it as a provider', summary: 'login with google'})
    async loginWithGoogle() {
        console.log('someone is trying to login with google');
    }

    @UseGuards(AuthGuard('google'))
    @Get('google/redirect')
    @ApiOperation({description: 'This route is the callback of the auth/google route', summary: 'login with google callback'})
    async loginWithGoogleRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        const user = await this.oauthService.loggingWithGoogle(req, body);
        if (user) {
            const user = await this.userService.users({where: {email: body.email}});
            const jwt = await this.authService.loginUser(user[user.length - 1]);
            res.redirect(`${process.env.CLIENT_URL}/Areas?jwt=` + jwt.access_token);
        }
    }

    @UseGuards(AuthGuard('twitter'))
    @Get('twitter')
    @ApiOperation({description: 'This route is used to login with twitter or register it as a provider', summary: 'login with twitter'})
    async loginTwitter() {
        console.log('someone is trying to login with twitter');
    }

    @UseGuards(AuthGuard('twitter'))
    @Get('twitter/redirect')
    @ApiOperation({description: 'This route is the callback of the auth/twitter route', summary: 'login with twitter callback'})
    async loginWithTwitterRedirect(@Req() req, @Res() res, @Body() body?: {email: string}) {
        return {req, res};
    }

    @Get(':provider/refresh')
    @ApiOperation({description: 'This route is used to refresh a User Access Token', summary: 'refresh access token'})
    @ApiBody({
        schema: {
            properties: {userID: {type: 'number'}},
        },
    })
    async refreshAccessToken(@Body() body: {userID: number}, @Param('provider') provider: string) {
        return await this.oauthService.refreshUserAccessToken(body.userID, provider);
    }
}
