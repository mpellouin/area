import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError } from "rxjs";

@Injectable()
export class DiscordReactionsService {
  constructor(private readonly http: HttpService) {}

  async buildSendMessageObservable(body: {webhook: string, content: string, username: string, avatar_url: string}) {
    const res = this.http.post(body.webhook, {
      content: body.content,
      username: body.username,
      avatar_url: body.avatar_url
    }).pipe(catchError(error => {
      throw new HttpException(error.response.data, error.response.status)
    }))
    res.subscribe(data => {});
    return res;
  }
}