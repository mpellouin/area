import { HttpService } from "@nestjs/axios";
import { BadRequestException, Inject, Injectable, Param } from "@nestjs/common";
import { env } from "process";
import { ProviderService } from "src/providers/provider.service";
import { UserService } from "src/user/user.service";
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { from } from "rxjs";

@Injectable()
export class OAuthService {
    constructor(
        private userService: UserService,
        private providerService: ProviderService,
        private httpService: HttpService
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

    async refreshGoogleToken(userID: number) {
        const providers = await this.providerService.getUserProviders({where: {userID: userID}})
        const providerData = providers[0]

        const result = from (await this.httpService.post(
            "https://www.googleapis.com/oauth2/v4/token",
            {
                client_id: env.GOOGLE_CLIENT_ID,
                client_secret: env.GOOGLE_CLIENT_SECRET,
                refresh_token: providerData.refreshToken,
                grant_type: "refresh_token"
            }
        ))
        result.subscribe((data) => {
            this.providerService.updateUserToken(userID, "google", data.data.access_token)
        })
    }
}