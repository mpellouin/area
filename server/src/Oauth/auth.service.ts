import { BadRequestException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserService } from "src/user/user.service";


@Injectable()
export class  AuthService {
    constructor(
        private userService: UserService
    ) {}

    async login(user) {
        return("login ok ! User = " + JSON.stringify(user))
    }

    async loggingWithGoogle(userData, body?) {
        console.log(userData.user)
        if (!userData.user) throw new BadRequestException();
        if (body) {
            let user = await this.userService.users({where: {googleID: userData.user.id}})[0]
            if (user) {
               try {
                    return this.login(userData.user)
                }
                catch(error) {
                    throw new Error(error)
                }
            }
            //if(cookie) {...}
            const newUser = userData.user
            this.userService.createUser({email: newUser.email, customToken: "", googleID: newUser.id})
        }
    }
}