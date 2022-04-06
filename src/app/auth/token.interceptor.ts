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
                'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0OTI1MjIzMSwiZXhwIjoxNjUwMTE2MjMxfQ.cvvJqf-xOZYpXstbmIzg-nwkZD_WLgfq8ahLOnL2YK6L5NC3O_iFr0ZMfZeB4LZ9WGictdRqWco9h5iPDGC-3A'
            )
            .set('X-TENANT-ID', 'fe_0721a'),
        });
        return next.handle(newReq);
      })
    );
  }
}
