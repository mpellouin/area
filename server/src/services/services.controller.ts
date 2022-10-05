import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { Service as ServiceModel} from '@prisma/client';
import { servicesService } from './services.service';

@Controller("Services")
export class servicesController {
    constructor(
        private servicesService: servicesService
    ) {}

    @Get("")
    async getServices(): Promise<ServiceModel[]> {
        return this.servicesService.getServices();
    }

    @Get(":id")
    async getService(@Param("id") id: number): Promise<ServiceModel> {
        return this.servicesService.getService(id);
    }
}