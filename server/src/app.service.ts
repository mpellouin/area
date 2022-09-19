import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAboutJson(): AboutType {
    return {
      client: {
        host: "localhost",
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
}
