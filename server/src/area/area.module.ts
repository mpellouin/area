import { Module } from "@nestjs/common";
import { AreaService } from "./area.service";

@Module({
    controllers: [],
    providers: [AreaService],
    exports: [AreaService]
})
export class AreaModule {}
