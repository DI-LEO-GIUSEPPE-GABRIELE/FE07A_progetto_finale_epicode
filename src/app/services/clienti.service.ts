import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Cliente } from 'src/app/models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  URL = environment.pathApi;
  urlClienti2 = environment.pathApi + '/api/clienti/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private authSrv: AuthService
  ) {}

  getClienti(pagina: number) {
    return this.http.get<any>(`${this.URL}/api/clienti?page=${pagina}`);
  }

  removeCliente(clienteId: number) {
    this.http.delete(`${this.URL}/api/clienti/${clienteId}`).subscribe();
  }

  nuovoCliente(data: Cliente) {
    console.log(data);
    return this.http
      .post<Cliente>(`${this.URL}/api/clienti`, data)
      .subscribe((res) => {});
  }

  editCliente(data: Partial<Cliente>, id: number) {
    return this.http
      .put<Cliente>(`${this.URL}/api/clienti/${id}`, data)
      .subscribe((res) => {});
  }

  getClientiFiltrati(filtro: string, valoreFiltro: string, pagina: number) {
    if (filtro == 'id') {
      return this.http.get<any>(`${this.URL}/api/clienti/${valoreFiltro}`);
    } else {
      return this.http.get<any>(
        `${this.URL}/api/clienti/${filtro}?nome=${valoreFiltro}`
      );
    }
  }

  getClientiFiltratiFatturato(
    filtro: string,
    valoreFiltro1: string,
    valoreFiltro2: string
  ) {
    return this.http.get<any>(
      `${this.URL}/api/clienti/${filtro}?from=${valoreFiltro1}&to=${valoreFiltro2}`
    );
  }

  getComuni() {
    return this.http.get<any>(
      `${this.URL}/api/comuni?page=0&size=20&sort=id,ASC`
    );
  }

  getProvince() {
    return this.http.get<any>(
      `${this.URL}/api/province?page=0&size=20&sort=id,ASC`
    );
  }
}
