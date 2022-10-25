import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { ProviderService } from './Provider.service';
import { Provider as ProviderModel} from '@prisma/client';

@Controller("Provider")
export class ProviderController {
    constructor(
        private providerService: ProviderService
    ) {}

    @Get()
    async getProviders(): Promise<ProviderModel[]> {
        return this.providerService.getUserProviders({})
    }

    @Post()
    async createProvider(@Body() ProviderData: {email: string; customToken: string, password: string}): Promise<ProviderModel> {
        console.log("body = ", ProviderData)
        return //this.providerService.createProvider(ProviderData)
    }
}