import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/spazio-clienti/clienti/clienti.page';
import { FatturePage } from './pages/spazio-fatture/fatture/fatture.page';
import { DettagliFatturaPage } from './pages/spazio-fatture/dettagli-fattura/dettagli-fattura.page';
import { FattureClientePage } from './pages/spazio-clienti/fatture-cliente/fatture-cliente.page';
import { AuthGuard } from './auth/auth.guard';
import { NuovoClientePage } from './pages/spazio-clienti/nuovo-cliente/nuovo-cliente.page';
import { DettagliClientePage } from './pages/spazio-clienti/dettagli-cliente/dettagli-cliente.page';
import { NuovaFatturaPage } from './pages/spazio-fatture/nuova-fattura/nuova-fattura.page';
import { EditFatturaPage } from './pages/spazio-fatture/edit-fattura/edit-fattura.page';
import { EditClientePage } from './pages/spazio-clienti/edit-cliente/edit-cliente.page';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'utenti',
    component: UtentiPage,
  },
  {
    canActivate: [AuthGuard],
    path: 'clienti',
    component: ClientiPage,
  },
  {
    canActivate: [AuthGuard],
    path: 'fatture',
    component: FatturePage,
  },
  {
    canActivate: [AuthGuard],
    path: 'dettagli-fattura/:id',
    component: DettagliFatturaPage,
  },
  {
    canActivate: [AuthGuard],
    path: 'edit-fattura/:id',
    component: EditFatturaPage,
  },
  {
    canActivate: [AuthGuard],
    path: 'nuovo-cliente',
    component: NuovoClientePage,
  },
  {
    canActivate: [AuthGuard],
    path: 'fatture-cliente/:id',
    component: FattureClientePage,
  },
  {
    canActivate: [AuthGuard],
    path: 'dettagli-cliente/:id',
    component: DettagliClientePage,
  },
  {
    canActivate: [AuthGuard],
    path: 'edit-cliente/:id',
    component: EditClientePage,
  },
  {
    canActivate: [AuthGuard],
    path: 'nuova-fattura',
    component: NuovaFatturaPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
