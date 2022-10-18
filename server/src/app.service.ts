import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {
  constructor(private readonly actionsService: ActionsService,
              private readonly reactionsService: ReactionService,
              private readonly userService: UserService,
              private readonly authService: AuthService) {}

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

  userLogin(user): any {
    return this.authService.loginUser(user);
  }

  async userRegister(req): Promise<any> {
    if (!req.body?.email || !req.body?.password) {
      throw new Error("Missing email or password");
    }
    const userSearch = await this.userService.users({where: {email: req.body.email}});
    if (userSearch.length > 0) {
      throw new Error("User already exists");
    }
    const user = await this.authService.registerUser(req.body.email, req.body.password);
    return this.authService.loginUser(user);
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
