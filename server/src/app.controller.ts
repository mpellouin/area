import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AboutType } from './types/about';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("about.json")
  getAboutJson(): AboutType {
    return this.appService.getAboutJson();
  }
}
