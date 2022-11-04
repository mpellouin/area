import {Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import {ProviderService} from './provider.service';
import {Provider as ProviderModel} from '@prisma/client';

@Controller('Provider')
export class ProviderController {
    constructor(private providerService: ProviderService) {}

    @Get()
    async getProviders(): Promise<ProviderModel[]> {
        return this.providerService.getUserProviders({});
    }
}
