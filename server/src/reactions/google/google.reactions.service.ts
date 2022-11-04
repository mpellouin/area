import {HttpService} from '@nestjs/axios';
import {HttpException, Injectable} from '@nestjs/common';
import {catchError, Observable} from 'rxjs';

@Injectable()
export class GoogleReactionsService {
    constructor(private readonly http: HttpService) {}

    async buildSendMailObservable(body: {accessToken: string; apiKey: string; to: string; subject: string; message: string}) {
        const encoded64Message = Buffer.from(
            'From: <me>\nTo: <' + body.to + '>\nSubject: ' + body.subject + '\n\n' + body.message + '\n' + Date.now().toLocaleString(),
        ).toString('base64');
        const res = await this.http
            .post(
                'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
                {raw: encoded64Message, key: body.apiKey},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + body.accessToken,
                    },
                },
            )
            .pipe(
                catchError((error) => {
                    throw new HttpException(error.response.data, error.response.status);
                }),
            );
        res.subscribe((data) => {});
        return res;
    }

    async buildNewEventObservable(body: {
        startTime: string;
        endTime: string;
        accessToken: string;
        reaCalendarId: string;
        summary: string;
        description: string;
    }) {
        const res = await this.http.post(
            `https://www.googleapis.com/calendar/v3/calendars/${body.reaCalendarId}/events`,
            {
                key: process.env.GOOGLE_API_KEY,
                start: {
                    dateTime: body.startTime,
                    timeZone: 'America/Los_Angeles',
                },
                end: {
                    dateTime: body.endTime,
                    timeZone: 'America/Los_Angeles',
                },
                summary: body.summary,
                description: body.description,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + body.accessToken,
                },
            },
        );
        res.subscribe((data) => {});
        return res;
    }
}
