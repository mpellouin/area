import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleActionsService {
  constructor(private readonly httpService: HttpService) {}

  async buildNewEventObservable(body: any): Promise<Observable<any> | undefined> {
    if (!body?.calendarId || !body?.accessToken)
      return undefined;
    const observable = new Observable((observer) => {
      let newestEvent = 0;
      setInterval(() => {
        console.log("Fetching GCalendar events");
        this.httpService
        .get(`https://www.googleapis.com/calendar/v3/calendars/${body.calendarId}/events?timeMin=${new Date().toISOString()}&timeMax=${new Date(Date.now() + (60000 * 60))}&key=${process.env.GOOGLE_CLIENT_ID}`, {
          headers: {
            Authorization: `Bearer ${body.accessToken}`,
          },
        })
        .subscribe((response) => {
            console.log(response.data);
          if (response.data.items.length > 0 && response.data.items[0].id > newestEvent) {
            observer.next(response.data);
            newestEvent = response.data.items[0].id;
          }
        });
        }, 20000);
    });
    return observable;
  }

}