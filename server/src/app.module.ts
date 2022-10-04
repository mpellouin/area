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
import { ReactionController } from './reactions/reaction.controller';
import { ReactionService } from './reactions/reaction.strategy';
import { ActionsService } from './actions/actions.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, userController, AuthController, ReactionController],
  providers: [AppService, UserService, PrismaService, GoogleStrategy, AuthService, ReactionService, ActionsService],
})
export class AppModule {}
