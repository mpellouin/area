import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ProviderService } from "src/providers/provider.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class  AuthService {
    constructor(
        private userService: UserService,
        private providerService: ProviderService,
        private prismaService: PrismaService
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
                    this.providerService.updateUserToken(user.ID, "google", userData.user.accessToken, userData.user.refreshToken)
                    return userData.user
                }
                catch(error) {
                    throw new Error(error)
                }
            } else {
            //if(cookie) {...}
                const userAccount = userData.user
                const newUser = await this.userService.createUser({email: userAccount.email, customToken: "", googleID: userAccount.id, password: userAccount.id})
                if (newUser) {
                    try {
                        this.providerService.updateUserToken(newUser.ID, "google", userData.user.accessToken, userData.user.refreshToken)
                        return userData.user
                    }
                    catch(error) {
                        throw new Error(error)
                    }
                }
            }
        }
    }
}