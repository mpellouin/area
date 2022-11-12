import {Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request} from '@nestjs/common';
import {ProviderService} from './provider.service';
import {Provider as ProviderModel} from '@prisma/client';
import {JwtAuthGuard} from 'src/auth/jwt-auth.guard';
import {AreaStatusType} from 'src/types/status';

@Controller('Provider')
export class ProviderController {
    constructor(private providerService: ProviderService) {}

    @Get()
    async getProviders(@Request() req): Promise<ProviderModel[]> {
        return this.providerService.getUserProviders({where: {userID: parseInt(req.user.ID)}});
    }

    @UseGuards(JwtAuthGuard)
    @Post('/update')
    async updateProvider(@Request() req): Promise<AreaStatusType> {
        await this.providerService.updateUserToken(req.user.ID, req.body.providerName, req.body.accessToken, req.body.refreshToken);
        return {
            error: false,
            message: 'Provider updated',
            status: 200,
        };
    }
}
