import { Injectable, UseGuards } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaAuthType, AreaStatusType } from './types/status';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  constructor(private readonly actionsService: ActionsService,
              private readonly reactionsService: ReactionService,
              private readonly localStrategy: LocalStrategy,
              private readonly userService: UserService) {}

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

  userLogin(req): any {
    return req.user;
  }

  async userRegister(body): Promise<any> {
    if (!body?.email || !body?.password) {
      return {
        error: true,
        code: 400,
        message: "Missing email or password",
        token: "null",
      };
    }
    const userSearch = await this.userService.users({where: {email: body.email}});
    if (userSearch.length > 0) {
      throw new Error("User already exists");
    }
    const user = await this.localStrategy.register(body.email, body.password);
    console.log(user);
    return this.localStrategy.validate(user.email, user.password);
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
