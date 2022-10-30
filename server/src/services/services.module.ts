import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { servicesController } from "./services.controller";
import { ServicesService } from "./services.service";

@Module({
    imports: [],
    controllers: [servicesController],
    providers: [ServicesService, PrismaService],
    exports: [ServicesService]
})
export class ServiceModule {}
