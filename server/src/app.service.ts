import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaAuthType, AreaStatusType } from './types/status';
import { genSaltSync, hashSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService,
              private readonly actionsService: ActionsService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAboutJson(ip: any): AboutType {
    return {
      client: {
        host: ip,
      },
      server: {
        current_time: Date.now(),
        services: [
          {
            name: "service example",
            actions: [
              {
                name: "action1",
                description: "action1 description",
              },
            ],
            reactions: [
              {
                name: "reaction1",
                description: "reaction1 description",
              },
            ],
          },
          {
            name: "service2",
            actions: [
              {
                name: "action1",
                description: "action1 description",
              },
            ],
            reactions: [
              {
                name: "reaction1",
                description: "reaction1 description",
              },
            ],
          },
        ],
      },
    };
  }

  userLogin(body): AreaAuthType {
    if (!body?.email || !body?.password) {
      return {
        error: true,
        code: 400,
        message: "Missing email or password",
        token: "null",
      };
    }
    // check if email exists in db
    // if not return an error
    // else retrieve user
    const salt = genSaltSync(10);
    const hash = hashSync(body.password, salt);

    // check if password is correct else return an error

    return {
      error: false,
      code: 200,
      message: "User logged in",
      token: sign({ email: body.email }, process.env.SECRET),
    };
  }

  userRegister(body): AreaAuthType {
    if (!body?.email || !body?.password) {
      return {
        error: true,
        code: 400,
        message: "Missing email or password",
        token: "null",
      };
    }
    // Check db if email already registered if it is return an error
    const salt = genSaltSync(10);
    const hash = hashSync(body.password, salt);
    // Save user in db with email and hash as password

    return {
      error: false,
      code: 200,
      message: "User registered",
      token: sign({ email: body.email }, process.env.SECRET),
    };
  }

  subscribeToService(serviceId: number): AreaStatusType {
    return {
      error: false,
      code: 200,
      message: "Subscribed to service " + serviceId,
    };
  }

  async poc(body, actionId: number): Promise<AreaStatusType> {
    const twitterAccount = body?.twitterAccount;
    try {
      const observable = await this.actionsService.factory(actionId, body);
      observable.subscribe((data: any) => {
        this.httpService
          .post(process.env.DISCORD_WEBHOOK, {
            "content": `${twitterAccount} just tweeted!`,
            "embeds": [
              {
                "title": data.data[0].text,
                "url": `https://twitter.com/${twitterAccount}/status/${data.data[0].id}`,
                "author": {
                  "name": twitterAccount,
                  "url": `https://twitter.com/${twitterAccount}`,
                },
              },
            ],
          }, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${body.token}`,
            },
          })
          .subscribe((response) => {
            console.log(response.data);
          });
      });
    } catch (e) {
      console.log(e);
    }

    return {
      error: false,
      code: 200,
      message: "Twitter account: " + twitterAccount,
    };
  }

}
