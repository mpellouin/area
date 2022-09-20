import { Injectable } from '@nestjs/common';
import { AboutType } from './types/about';
import { AreaAuthType, AreaStatusType } from './types/status';
import { genSaltSync, hashSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';

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

  userRegister(body): AreaAuthType {
    console.log(body, process.env.SECRET);
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

}
