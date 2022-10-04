import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ActionsService {
    constructor(private readonly httpService: HttpService) {}

    async factory(id: number, body: any): Promise<Observable<any>> {
        let observable: Observable<any> | undefined = undefined;
        observable = await this.factoryHelper(id, body)
        if (observable === undefined)
            throw new Error("Unknown action");
        return observable;
    }

    async factoryHelper(id: number, body: any): Promise<Observable<any> | undefined> {
        if (id == 1) {
            return await this.buildNewTweetObservable(body);
        }
        else
            return undefined;
    }

    async buildNewTweetObservable(body: any): Promise<Observable<any> | undefined> {
        if (!body?.twitterAccount)
            return undefined;
        const observable = new Observable((observer) => {
            let latestTweet = 0;
            setInterval(() => {
              console.log("Fetching tweets");
              this.httpService
                .get(`https://api.twitter.com/2/tweets/search/recent?query=from%3A${body.twitterAccount}&start_time=${(new Date(Date.now() - 30000)).toISOString()}&max_results=10`, {
                  headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
                  },
                })
                .subscribe((response) => {
                  if (response.data.meta.result_count > 0 && response.data.data[0].id > latestTweet) {
                    observer.next(response.data);
                    latestTweet = response.data.data[0].id;
                  }
                });
            }, 3000);
          });
          return observable;
        }

}