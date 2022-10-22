import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AreaService } from './area/area.service';
import { Area } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly actionsService: ActionsService,
              private readonly reactionsService: ReactionService,
              private readonly userService: UserService,
              private readonly authService: AuthService,
              private readonly areaService: AreaService) {}

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

  async createArea(req, actionId: string, reactionId: string): Promise<AreaStatusType> {
    try {
      const observable = await this.actionsService.factory(parseInt(actionId), req.body);
      console.log("observable created");
      observable.subscribe((data: any) => {this.reactionsService.factory(parseInt(reactionId), req.body)});
    } catch (e) {
      console.log(e);
      throw new Error("Error while creating area");
    }

    await this.areaService.createArea({
      actionID: parseInt(actionId),
      reactionID: parseInt(reactionId),
      name: req.body.name,
      user: {connect: {ID: req.user.ID}},
      parameters: JSON.stringify(req.body),
    });

    return {
      error: false,
      code: 200,
      message: "Observable created",
    };
  }

  async getAreas(req): Promise<Area[]> {
    return this.areaService.findMany({where: {user: {ID: req.user.id}}});
  }

}
