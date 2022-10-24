import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';
import { ActionsService } from './actions/actions.service';
import { ReactionService } from './reactions/reaction.strategy';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AreaService } from './area/area.service';
import { Actions, Area, Reactions, Service } from '@prisma/client';
import { ServicesService } from './services/services.service';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly actionsService: ActionsService,
              private readonly reactionsService: ReactionService,
              private readonly userService: UserService,
              private readonly authService: AuthService,
              private readonly areaService: AreaService,
              private readonly servicesService: ServicesService,
              private readonly prismaService: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAboutJson(ip: any): Promise<AboutType> {
    const dbServices = await this.servicesService.findMany({});
    const services = Promise.all(dbServices.map(async (service) => {
      const actions = await this.prismaService.actions.findMany({where: {serviceID: service.ID}}) as Actions[];
      const reactions = await this.prismaService.reactions.findMany({where: {serviceID: service.ID}}) as Reactions[];
      console.log(dbServices)
      return {
        name: service.name,
        actions: actions.map((action) => {
          return {
            name: action.name,
            description: action.description,
          };
        }),
        reactions: reactions.map((reaction) => {
          return {
            name: reaction.name,
            description: reaction.description,
          };
        }),
      }
    }));

    return {
      client: {
        host: ip,
      },
      server: {
        current_time: Date.now(),
        services: await services,
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
