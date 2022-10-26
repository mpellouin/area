import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { GoogleStrategy } from './Oauth/google.strategy';
import { HttpModule } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
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
import { ServicesService } from './services/services.service';
import { ProviderModule } from './providers/provider.module';
import { UserModule } from './user/user.module';
import { OauthModule } from './Oauth/oauth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PassportModule,
    JwtModule.register({secret: process.env.SECRET}),
    ProviderModule,
    UserModule,
    OauthModule
],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService,
              GoogleStrategy, LocalStrategy, ReactionService,
              ActionsService, TwitterActionsService,
              GoogleReactionsService, GoogleActionsService, DiscordReactionsService,
              FlightService, AuthService, JwtService, JwtStrategy, AreaService,
              ServicesService],
})
export class AppModule {}
