import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { TwitterActionsService } from "./actions/twitter/twitter.actions.service";
import { FlightService } from './actions/flight/flight.service';
import { GoogleActionsService } from './actions/google/google.actions.service';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AreaService } from './area/area.service';
import { ProviderModule } from './providers/provider.module';
import { UserModule } from './user/user.module';
import { OauthModule } from './Oauth/oauth.module';
import { ReactionModule } from './reactions/reaction.module';
import { ServiceModule } from './services/service.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PassportModule,
    JwtModule.register({secret: process.env.SECRET}),
    ProviderModule,
    UserModule,
    OauthModule,
    ReactionModule,
    ServiceModule
],
  controllers: [AppController],
  providers: [AppService,
              LocalStrategy, ReactionService,
              ActionsService, TwitterActionsService,
              GoogleActionsService, PrismaService,
              FlightService, AuthService, JwtService, JwtStrategy, AreaService
              ],
})
export class AppModule {}
