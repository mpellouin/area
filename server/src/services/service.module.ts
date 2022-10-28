import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ServicesService } from "./services.service";

@Module({
    imports: [],
    controllers: [],
    providers: [ServicesService, PrismaService],
    exports: [ServicesService]
})
export class ServiceModule {}
