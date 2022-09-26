import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { userController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { GoogleStrategy } from './Oauth/google.strategy';
import { OAuthGoogle } from './Oauth/google.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, userController, OAuthGoogle],
  providers: [AppService, UserService, PrismaService, GoogleStrategy],
})
export class AppModule {}
