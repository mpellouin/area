import {Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request} from '@nestjs/common';
import {Service as ServiceModel, User} from '@prisma/client';
import {JwtAuthGuard} from 'src/auth/jwt-auth.guard';
import {AreaStatusType} from 'src/types/status';
import {ServicesService} from './services.service';

@Controller('Services')
export class servicesController {
    constructor(private servicesService: ServicesService) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    async getServices(): Promise<ServiceModel[]> {
        return this.servicesService.findMany({});
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getService(@Param('id') id: string): Promise<ServiceModel> {
        const test = await this.servicesService.findMany({where: {ID: parseInt(id)}});
        console.log(test);
        return test[0];
    }

    @UseGuards(JwtAuthGuard)
    @Post('subscribe/:id')
    async subscribeService(@Param('id') id: string, @Request() req: any): Promise<AreaStatusType> {
        return this.servicesService.subscribe(parseInt(id), req);
    }

    @UseGuards(JwtAuthGuard)
    @Post('unsubscribe/:id')
    async unsubscribeService(@Param('id') id: string, @Request() req: any): Promise<User> {
        return this.servicesService.unsubscribe(parseInt(id), req);
    }
}
