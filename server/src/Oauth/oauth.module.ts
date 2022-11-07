import {HttpModule} from '@nestjs/axios';
import {Module} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {AuthService} from 'src/auth/auth.service';
import {ProviderModule} from 'src/providers/provider.module';
import {UserModule} from 'src/user/user.module';
import {GoogleStrategy} from './google/google.strategy';
import {ProviderStrategy} from './google/provider.startegy';
import {OAuthController} from './oauth.controller';
import {OAuthService} from './oauth.service';
import {TwitterStrategy} from './twitter/twitter.strategy';

@Module({
    imports: [ProviderModule, UserModule, HttpModule],
    controllers: [OAuthController],
    providers: [OAuthService, GoogleStrategy, ProviderStrategy, AuthService, JwtService, TwitterStrategy],
    exports: [OAuthService],
})
export class OauthModule {}
