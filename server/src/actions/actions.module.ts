import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ActionsService } from "./actions.service";
import { FlightService } from "./flight/flight.service";
import { GoogleActionsService } from "./google/google.actions.service";
import { TwitterActionsService } from "./twitter/twitter.actions.service";

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [ActionsService, GoogleActionsService, TwitterActionsService, FlightService],
    exports: [ActionsService, GoogleActionsService, TwitterActionsService, FlightService]
})
export class ReactionModule {}
