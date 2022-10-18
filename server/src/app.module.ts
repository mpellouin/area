import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { userController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { GoogleStrategy } from './Oauth/google.strategy';
import { OAuthService } from './Oauth/auth.service';
import { AuthController } from './Oauth/auth.controller';
import { HttpModule } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { ProviderService } from './providers/provider.service';
import { TwitterActionsService } from "./actions/twitter/twitter.actions.service";
import { GoogleReactionsService } from "./reactions/google/google.reactions.service";
import { DiscordReactionsService } from './reactions/discord/discord.reactions.service';
import { FlightService } from './actions/flight/flight.service';
import { GoogleActionsService } from './actions/google/google.actions.service';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AreaService } from './area/area.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, PassportModule, JwtModule.register({
    secret: process.env.SECRET,
  })],
  controllers: [AppController, userController, AuthController],
  providers: [AppService, UserService, PrismaService,
              GoogleStrategy, LocalStrategy, OAuthService, ReactionService,
              ActionsService, ProviderService, TwitterActionsService,
              GoogleReactionsService, GoogleActionsService, DiscordReactionsService,
              FlightService, AuthService, JwtService, JwtStrategy, AreaService],
})
export class AppModule {}
