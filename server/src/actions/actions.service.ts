import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FlightService } from './flight/flight.service';
import { GoogleActionsService } from './google/google.actions.service';
import { TwitterActionsService } from "./twitter/twitter.actions.service";

@Injectable()
export class ActionsService {
    constructor(private readonly httpService: HttpService,
                private readonly twitterService: TwitterActionsService,
                private readonly flightService: FlightService,
                private readonly googleService: GoogleActionsService) {}

    async factory(id: number, body: any): Promise<Observable<any>> {
        let observable: Observable<any> | undefined = undefined;
        observable = await this.factoryHelper(id, body)
        if (observable === undefined)
            throw new Error("Unknown action");
        return observable;
    }

    async factoryHelper(id: number, body: any): Promise<Observable<any> | undefined> {
        if (id == 1) {
          return await this.twitterService.buildNewTweetObservable(body);
        }
        if (id == 2) {
          return await this.twitterService.buildNewFollowerObservable(body);
        }
        if (id == 3) {
          return await this.flightService.buildNearbyFlightObservable(body);
        }
        if (id == 4) {
          return await this.googleService.buildNewEventObservable(body);
        }
      return undefined;
    }
}