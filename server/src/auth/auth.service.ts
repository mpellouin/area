import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { genSalt, hash } from 'bcryptjs';
import { hashSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {
        }

    async validateUser(email: string, password: string): Promise<any> {
        const users = await this.userService.users({where: {email: email}});
        const user = users[0];

        if (user && hashSync(password, user.password) === user.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async loginUser(user: any) {
        const payload = { email: user.email, sub: user.ID };
        return {
          access_token: this.jwtService.sign(payload, {
            secret: process.env.SECRET,
          }),
        };
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