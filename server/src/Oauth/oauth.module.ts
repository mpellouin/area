import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ProviderModule } from "src/providers/provider.module";
import { UserModule } from "src/user/user.module";
import { GoogleStrategy } from "./google.strategy";
import { OAuthController } from "./oauth.controller";
import { OAuthService } from "./oauth.service";

@Module({
    imports: [ProviderModule, UserModule, HttpModule],
    controllers: [OAuthController],
    providers: [OAuthService, GoogleStrategy],
    exports: []
})
export class OauthModule {}
