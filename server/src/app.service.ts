import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaStatusType } from './types/status';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAboutJson(ip: any): AboutType {
    return {
      client: {
        host: ip,
      },
      server: {
        current_time: 0,
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

  userLogin(): AreaStatusType {
    return {
      error: false,
      code: 200,
      message: "User logged in",
    };
  }

  userRegister(): AreaStatusType {
    return {
      error: false,
      code: 200,
      message: "User registered",
    };
  }

  subscribeToService(serviceId: number): AreaStatusType {
    return {
      error: false,
      code: 200,
      message: "Subscribed to service " + serviceId,
    };
  }

}
