import { BadRequestException, Injectable } from "@nestjs/common";


@Injectable()
export class  AuthService {

    async login(user) {
        return("login ok ! User = " + JSON.stringify(user))
    }

    async loggingWithGoogle(data) {
        if (!data.user) throw new BadRequestException();
        try {
            return this.login(data.user)
        }
        catch(error) {
            throw new Error(error)
        }
    }
}