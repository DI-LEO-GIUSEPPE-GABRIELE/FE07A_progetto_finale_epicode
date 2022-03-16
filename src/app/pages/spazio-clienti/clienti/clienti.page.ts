import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Fattura } from 'src/app/models/fattura';
import { ClientiService } from '../../../services/clienti.service';

@Component({
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss'],
})
export class ClientiPage implements OnInit {
  clienti: Cliente[] | undefined;
  pagina = 0;
  isLoading = false;
  booleanoFiltro = false;
  fatturatoValore = false;
  fattureCliente: Fattura[] | undefined;
  isLoadingModale = false;
  idDaEliminare: number | undefined;

  constructor(private clSrv: ClientiService) {}

  ngOnInit(): void {
    this.getClienti();
  }

  getClienti() {
    this.clSrv
      .getClienti(this.pagina)
      .subscribe((response) => (this.clienti = response.content));
  }

  async onRemoveCliente() {
    this.clSrv
      .eliminaFattureCLiente(this.idDaEliminare!)
      .subscribe((response) => {
        this.clSrv.removeCliente(this.idDaEliminare!);
        setTimeout(() => {
          this.getClienti();
        }, 200);
      });
  }

  cambiaPagina(param: string) {
    if (param == '+') {
      this.pagina++;
    } else if (param == '-') {
      this.pagina--;
    }
    this.getClienti();
  }

  getFiltro() {
    const filtro = (<HTMLInputElement>document.getElementById('filtro')).value;
    if (filtro == 'fatturatoannuale') {
      this.fatturatoValore = true;
    } else {
      this.fatturatoValore = false;
    }
  }

  filtraFatturato() {
    this.isLoading = true;
    const filtro = (<HTMLInputElement>document.getElementById('filtro')).value;
    const valoreFiltro1 = (<HTMLInputElement>document.getElementById('valore1'))
      .value;
    const valoreFiltro2 = (<HTMLInputElement>document.getElementById('valore2'))
      .value;
    this.clSrv
      .getClientiFiltratiFatturato(filtro, valoreFiltro1, valoreFiltro2)
      .subscribe((res) => {
        this.clienti = res.content;
        this.isLoading = false;
      });
  }

  filtra() {
    this.booleanoFiltro = true;
    this.isLoading = true;
    const filtro = (<HTMLInputElement>document.getElementById('filtro')).value;
    const valoreFiltro = (<HTMLInputElement>document.getElementById('valore'))
      .value;

    this.clSrv
      .getClientiFiltrati(filtro, valoreFiltro, this.pagina)
      .subscribe((res) => {
        if (filtro == 'id') {
          this.clienti = [];
          this.clienti.push(res);
          this.isLoading = false;
        } else {
          this.clienti = res.content;
          this.isLoading = false;
        }
      });
  }

  getFattureCliente(id: number) {
    this.isLoadingModale = true;
    this.clSrv.getAllFattureCliente(id).subscribe((res) => {
      this.fattureCliente = res.content;
      this.isLoadingModale = false;
      this.idDaEliminare = id;
      console.log(this.idDaEliminare);
    });
  }
}
