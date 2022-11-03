import {Controller, Get, Param, Post, Body, Put, Delete, Request, UseGuards} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserModel} from '@prisma/client';
import {JwtAuthGuard} from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('User routes')
@Controller('User')
export class userController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUsers(@Request() req): Promise<UserModel[]> {
        return this.userService.users({where: {ID: req.user.ID}});
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createUser(@Body() userData: {email: string; customToken: string; password: string}): Promise<UserModel> {
        console.log('body = ', userData);
        return this.userService.createUser(userData);
    }
}
