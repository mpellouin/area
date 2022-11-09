import {HttpService} from '@nestjs/axios';
import {Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {OAuthService} from 'src/Oauth/oauth.service';
import {ProviderService} from 'src/providers/provider.service';

@Injectable()
export class GoogleActionsService {
    constructor(
        private readonly httpService: HttpService,
        private readonly oauthService: OAuthService,
        private readonly providerService: ProviderService,
    ) {}

    async buildNewEventObservable(body: any, userId: number): Promise<Observable<any> | undefined> {
        if (!body?.calendarId || !body?.accessToken) return undefined;
        await this.oauthService.refreshGoogleToken(userId);
        const user = await this.providerService.getUserProviders({where: {userID: userId, Name: 'google'}});
        console.log(user);
        const observable = new Observable((observer) => {
            let newestEvent = 0;
            this.httpService
                .get(
                    `https://www.googleapis.com/calendar/v3/calendars/${
                        body.calendarId
                    }/events?timeMin=${new Date().toISOString()}&timeMax=${new Date(Date.now() + 60000 * 60).toISOString()}&key=${
                        process.env.GOOGLE_API_KEY
                    }`,
                    {
                        headers: {
                            Authorization: `Bearer ${user[0].accessToken}`,
                        },
                    },
                )
                .subscribe((response) => {
                    if (response.data.items.length > 0) {
                        newestEvent = response.data.items[0].id;
                    }
                });
            setInterval(async () => {
                console.log('Fetching GCalendar events');
                await this.oauthService.refreshGoogleToken(userId);
                const user = await this.providerService.getUserProviders({where: {userID: userId, Name: 'google'}});
                this.httpService
                    .get(
                        `https://www.googleapis.com/calendar/v3/calendars/${
                            body.calendarId
                        }/events?timeMin=${new Date().toISOString()}&timeMax=${new Date(Date.now() + 60000 * 60).toISOString()}&key=${
                            process.env.GOOGLE_API_KEY
                        }`,
                        {
                            headers: {
                                Authorization: `Bearer ${user[0].accessToken}`,
                            },
                        },
                    )
                    .subscribe((response) => {
                        console.log(response.data);
                        if (response.data.items.length > 0 && response.data.items[0].id != newestEvent) {
                            observer.next(response.data);
                            newestEvent = response.data.items[0].id;
                        }
                    });
            }, 60000);
        });
        return observable;
    }
}
