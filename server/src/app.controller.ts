import { Body, Controller, Get, Ip, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("about.json")
  getAboutJson(@Ip() ip): AboutType {
    return this.appService.getAboutJson(ip);
  }

  @Post("login")
  userLogin(@Body() body): AreaStatusType {
    return this.appService.userLogin(body);
  }

  @Post("register")
  userRegister(@Body() body): AreaStatusType {
    return this.appService.userRegister(body);
  }

  @Post("subscribe/:serviceId")
  subscribeToService(@Param('serviceId') serviceId): AreaStatusType {
    return this.appService.subscribeToService(serviceId);
  }

  @Post("createArea/:actionId/:reactionId")
  async poc(@Body() body, @Param('actionId') actionId : number,
                          @Param('reactionId') reactionID: number): Promise<AreaStatusType> {
    return this.appService.createArea(body, actionId, reactionID);
  }
}
