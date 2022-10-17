import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { genSalt, hash } from 'bcryptjs';
import { hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async validateUser(username: string, password: string): Promise<any> {
        console.log("yo");
        const users = await this.userService.users({where: {email: username}});
        const user = users[0];
        
        console.log(password, user.password, hashSync(password, user?.password));
        if (user && hashSync(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async registerUser(username: string, password: string): Promise<any> {
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        const user = await this.userService.createUser({email: username, customToken: "", password: hashedPassword})

        if (user) {
            return user;
        }
        return null
    }
}