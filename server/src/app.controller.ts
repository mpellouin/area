import { Body, Controller, Get, Ip, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Area } from '@prisma/client';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("about.json")
  getAboutJson(@RealIP() ip: string): Promise<AboutType> {
    return this.appService.getAboutJson(ip);
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  userLogin(@Request() req): Promise<any> {
    return this.appService.userLogin(req.user);
  }

  @Post("register")
  userRegister(@Request() req): Promise<any> {
    return this.appService.userRegister(req);
  }

  @UseGuards(JwtAuthGuard)
  @Post("subscribe/:serviceId")
  subscribeToService(@Param('serviceId') serviceId): AreaStatusType {
    return this.appService.subscribeToService(serviceId);
  }

  @UseGuards(JwtAuthGuard)
  @Post("createArea/:actionId/:reactionId")
  async poc(@Request() req, @Param('actionId') actionId : string,
                          @Param('reactionId') reactionID: string): Promise<AreaStatusType> {
    return this.appService.createArea(req, actionId, reactionID);
  }

  @UseGuards(JwtAuthGuard)
  @Get("areas")
  async getAreas(@Request() req): Promise<Area[]> {
    return this.appService.getAreas(req);
  }
}
