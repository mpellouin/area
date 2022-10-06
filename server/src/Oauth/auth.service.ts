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
            let users = await this.userService.users({where: {googleID: userData.user.id}})
            let user = users[0]
            console.log(userData.user.id)
            if (user) {
                try {
                    return this.login(userData.user)
                }
                catch(error) {
                    throw new Error(error)
                }
            } else {
            //if(cookie) {...}
                const userAccount = userData.user
                const newUser = this.userService.createUser({email: userAccount.email, customToken: "", googleID: userAccount.id, password: userAccount.id})
                if (newUser) {
                    try {
                        return this.login(userData.user)
                    }
                    catch(error) {
                        throw new Error(error)
                    }
                }
            }
        }
    }
}