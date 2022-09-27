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

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, userController, AuthController],
  providers: [AppService, UserService, PrismaService, GoogleStrategy, AuthService],
})
export class AppModule {}
