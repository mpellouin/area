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
      this.httpService
        .get(`https://www.googleapis.com/calendar/v3/calendars/${body.calendarId}/events?timeMin=${new Date().toISOString()}&timeMax=${(new Date(Date.now() + (60000 * 60))).toISOString()}&key=${process.env.GOOGLE_API_KEY}`, {
          headers: {
            Authorization: `Bearer ${body.accessToken}`,
          },
        }).subscribe((response) => {
          if (response.data.items.length > 0) {
            newestEvent = response.data.items[0].id;
          }
        });
      setInterval(() => {
        console.log("Fetching GCalendar events");
        this.httpService
        .get(`https://www.googleapis.com/calendar/v3/calendars/${body.calendarId}/events?timeMin=${new Date().toISOString()}&timeMax=${(new Date(Date.now() + (60000 * 60))).toISOString()}&key=${process.env.GOOGLE_API_KEY}`, {
          headers: {
            Authorization: `Bearer ${body.accessToken}`,
          },
        })
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