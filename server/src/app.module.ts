import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { userController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { GoogleStrategy } from './Oauth/google.strategy';
import { AuthService } from './Oauth/auth.service';
import { AuthController } from './Oauth/auth.controller';
import { HttpModule } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { ProviderService } from './providers/provider.service';
import { TwitterActionsService } from "./actions/twitter/twitter.actions.service";
import { GoogleReactionsService } from "./reactions/google/google.reactions.service";
import { DiscordReactionsService } from './reactions/discord/discord.reactions.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, userController, AuthController],
  providers: [AppService, UserService, PrismaService,
              GoogleStrategy, AuthService, ReactionService,
              ActionsService, ProviderService, TwitterActionsService,
              GoogleReactionsService, DiscordReactionsService],
})
export class AppModule {}
