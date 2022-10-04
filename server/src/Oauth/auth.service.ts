import { BadRequestException, Injectable } from "@nestjs/common";
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
        if (!userData.user) throw new BadRequestException();

        if (body) {
            let user = await this.userService.users({where: {email: body.email}})[0]
            if (user) return this.login(user)
        }
        try {
            return this.login(userData.user)
        }
        catch(error) {
            throw new Error(error)
        }
    }
}