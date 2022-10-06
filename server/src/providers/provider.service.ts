import { Injectable } from "@nestjs/common";
import { Provider, Prisma, prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProviderService {
    constructor(private prisma: PrismaService) {}
    async createProvider(data: Prisma.ProviderCreateInput) {
        return this.prisma.provider.create({data})
    }
}