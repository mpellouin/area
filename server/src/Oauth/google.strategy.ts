import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, verifyCallback } from 'passport-google-oauth20'
import { env } from "process";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL: env.BASE_URL + "/auth/google/redirect",
            response_type: 'token',
            scope: ['profile', 'email']
        });
    }

    async validate(
        accessToken: string, refreshToken: string, profile: any, done: verifyCallback): Promise<any> {
        const { name, emails } = profile;
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          accessToken,
        };
        done(null, user);
      }
}