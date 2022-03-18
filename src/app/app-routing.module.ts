import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/spazio-clienti/clienti/clienti.page';
import { FatturePage } from './pages/spazio-fatture/fatture/fatture.page';
import { FattureClientePage } from './pages/spazio-clienti/fatture-cliente/fatture-cliente.page';
import { AuthGuard } from './auth/auth.guard';
import { NuovoClientePage } from './pages/spazio-clienti/nuovo-cliente/nuovo-cliente.page';
import { DettagliClientePage } from './pages/spazio-clienti/dettagli-cliente/dettagli-cliente.page';
import { NuovaFatturaPage } from './pages/spazio-fatture/nuova-fattura/nuova-fattura.page';
import { EditFatturaPage } from './pages/spazio-fatture/edit-fattura/edit-fattura.page';
import { EditClientePage } from './pages/spazio-clienti/edit-cliente/edit-cliente.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'home',
    component: HomePage,
  },
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
