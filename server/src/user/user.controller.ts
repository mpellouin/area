import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel} from '@prisma/client';

@Controller("User")
export class userController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users({})
    }

    @Post()
    async createUser(@Body() userData: {email: string; customToken: string, password: string}): Promise<UserModel> {
        console.log("body = ", userData)
        return this.userService.createUser(userData)
    }
}