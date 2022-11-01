import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {PrismaService} from '../prisma.service';
import {Service, Prisma, User} from '@prisma/client';

@Injectable()
export class ServicesService {
    constructor(private prisma: PrismaService) {}

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ServiceWhereUniqueInput;
        where?: Prisma.ServiceWhereInput;
        orderBy?: Prisma.ServiceOrderByWithRelationInput;
    }): Promise<Service[]> {
        const {skip, take, cursor, where, orderBy} = params;
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

    async updateService(params: {where: Prisma.ServiceWhereUniqueInput; data: Prisma.ServiceUpdateInput}): Promise<Service> {
        const {where, data} = params;
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

    async subscribe(serviceId: number, req: any): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {ID: req.user.ID},
        });
        if (user.services.includes(serviceId.toString())) {
            return;
        } else {
            return this.prisma.user.update({
                where: {ID: req.user.ID},
                data: {
                    services: user.services + serviceId.toString(),
                },
            });
        }
    }

    async unsubscribe(serviceId: number, req: any): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {ID: req.user.ID},
        });
        if (!user.services.includes(serviceId.toString())) {
            return;
        } else {
            return this.prisma.user.update({
                where: {ID: req.user.ID},
                data: {
                    services: user.services.split(serviceId.toString()[0]).join(''),
                },
            });
        }
    }

    async verifySubscription(serviceId: number, req: any): Promise<boolean> {
        const user = await this.prisma.user.findUnique({
            where: {ID: req.user.ID},
        });
        return user.services.includes(serviceId.toString());
    }
}
