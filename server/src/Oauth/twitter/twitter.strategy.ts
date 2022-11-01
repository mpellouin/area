import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, verifyCallback } from 'passport-twitter'

import { env } from "process";

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
    constructor() {
        super({
            consumerKey: env.TWITTER_CONSUMER_KEY,
            consumerSecret: env.TWITTER_CONSUMER_SECRET,
            callbackURL: env.BASE_URL + "/auth/twitter/redirect",
        });
    }
    authorizationParams(): { [key: string]: string; } {
      return ({
        access_type: 'offline',
        prompt: 'consent'
      });
    };
    async validate(
        accessToken: string, refreshToken: string, profile: any, done: verifyCallback): Promise<any> {
        const { name, emails, id } = profile;
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          id,
          accessToken,
          refreshToken
        };
        done(null, user);
      }
}