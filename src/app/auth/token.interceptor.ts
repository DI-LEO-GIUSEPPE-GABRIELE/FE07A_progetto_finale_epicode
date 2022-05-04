import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authSrv.user$.pipe(
      take(1),
      switchMap((user) => {
        const newReq: HttpRequest<any> = request.clone({
          headers: request.headers
            .set(
              'Authorization',
              'Bearer ' +
                'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTUwNTc2NCwiZXhwIjoxNjUxNTkyMTY0fQ.iwr2mHRAxA0aNbyHI7dkbfnb_7epg6vA3otLvxq8O4y0hfxGeDo9a-RMdpJ_jZBfcMC24WrUlYE78WX4WShEcA'
            )
            .set('X-TENANT-ID', 'fe_0721a'),
        });
        return next.handle(newReq);
      })
    );
  }
}
