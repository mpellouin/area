import {HttpModule} from '@nestjs/axios';
import {Module} from '@nestjs/common';
import {OAuthController} from 'src/Oauth/oauth.controller';
import {OauthModule} from 'src/Oauth/oauth.module';
import {ProviderModule} from 'src/providers/provider.module';
import {ServiceModule} from 'src/services/services.module';
import {DiscordReactionsService} from './discord/discord.reactions.service';
import {GoogleReactionsService} from './google/google.reactions.service';
import {ReactionService} from './reaction.strategy';

@Module({
    imports: [HttpModule, ServiceModule, ProviderModule, OauthModule],
    controllers: [],
    providers: [ReactionService, GoogleReactionsService, DiscordReactionsService],
    exports: [ReactionService, GoogleReactionsService, DiscordReactionsService],
})
export class ReactionModule {}
