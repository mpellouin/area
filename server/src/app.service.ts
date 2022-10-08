import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaAuthType, AreaStatusType } from './types/status';
import { genSaltSync, hashSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { HttpService } from '@nestjs/axios';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';

@Injectable()
export class AppService {
  constructor(private readonly actionsService: ActionsService,
              private readonly reactionsService: ReactionService) {}

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

  async createArea(body, actionId: number, reactionId: number): Promise<AreaStatusType> {
    const twitterAccount = body?.twitterAccount;
    try {
      const observable = await this.actionsService.factory(actionId, body);
      console.log("observable created");
      observable.subscribe((data: any) => {this.reactionsService.factory(reactionId, body)});
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
