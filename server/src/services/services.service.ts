import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Service, Prisma } from '@prisma/client';

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

  async subscribe(serviceId: number, req: any): Promise<Service> {
    const service = await this.prisma.service.findUnique({
      where: { ID: serviceId },
    });
    if (!service) {
      throw new Error('Service not found');
    }
    const user = await this.prisma.user.findUnique({
      where: { ID: req.user.ID },
    });
    if (!user) {
      throw new Error('User not found');
    }
    if (await this.prisma.service.findMany({where: {ID: serviceId}})) {
      throw new Error('Service not found');
    }
    return 
  }
}