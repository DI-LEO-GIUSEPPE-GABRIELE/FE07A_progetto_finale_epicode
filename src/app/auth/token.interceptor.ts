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
                'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MDUyODI1NSwiZXhwIjoxNjUwNjE0NjU1fQ.JV8UEMjs4X7i1cPBVBm8c0xfAPxGPVg7QLahdQ0L-rpeZCp2QIN8H2g31wJIrbRha6C0xJMnBJ8gZ2YrRKaQFA'
            )
            .set('X-TENANT-ID', 'fe_0721a'),
        });
        return next.handle(newReq);
      })
    );
  }
}
