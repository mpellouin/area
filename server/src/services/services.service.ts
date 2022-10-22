import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Service, Prisma } from '@prisma/client';

@Injectable()
export class ServicesService implements OnModuleInit{
  constructor(private prisma: PrismaService) {}

    async onModuleInit() {
        await this.prisma.$connect();
        const services = await this.prisma.service.findMany();
        if (services.length !== 0) return;
        this.createService({
            name: 'GMAIL',
            actions: {},
            reactions: {
                create: [
                    {
                        name: 'Send mail to X',
                        description: 'Send an email using your GMAIL address to X',
                    }
                ]
            },
        });
        this.createService({
            name: 'DISCORD',
            actions: {},
            reactions: {
                create: [
                    {
                        name: 'Send message to discord webhook',
                        description: 'Send amessage to your discord webhook',
                    }
                ]
            },
        });
        this.createService({
            name: 'TWITTER',
            actions: {
                create: [
                    {
                        name: 'New tweet from X',
                        description: 'Trigger an action when a new tweet is posted by X',
                    }
                ]
            },
            reactions: {
                create: [
                    {
                        name: 'Like tweet id X',
                        description: 'Like the tweet with the id X',
                    },
                    {
                        name: 'Tweet message X',
                        description: 'Tweet the message X',
                    }
                ]
            },
        });
        // TODO: Complete the services
    }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ServiceWhereUniqueInput;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput;
  }): Promise<Service[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.service.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createService(data: Prisma.ServiceCreateInput): Promise<Service> {
    return this.prisma.service.create({
      data,
    });
  }

  async updateService(params: {
    where: Prisma.ServiceWhereUniqueInput;
    data: Prisma.ServiceUpdateInput;
  }): Promise<Service> {
    const { where, data } = params;
    return this.prisma.service.update({
      data,
      where,
    });
  }

  async deleteService(where: Prisma.ServiceWhereUniqueInput): Promise<Service> {
    return this.prisma.service.delete({
      where,
    });
  }
}