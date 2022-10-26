import { Module } from "@nestjs/common";
import { ProviderModule } from "src/providers/provider.module";
import { UserModule } from "src/user/user.module";
import { OAuthController } from "./oauth.controller";
import { OAuthService } from "./oauth.service";

@Module({
    imports: [ProviderModule, UserModule],
    controllers: [OAuthController],
    providers: [OAuthService],
    exports: []
})
export class OauthModule {}
