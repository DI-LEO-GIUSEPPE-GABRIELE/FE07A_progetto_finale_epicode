import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UtentiPage } from './pages/utenti/utenti.page';
import { ClientiPage } from './pages/spazio-clienti/clienti/clienti.page';
import { FatturePage } from './pages/spazio-fatture/fatture/fatture.page';
import { NuovoClientePage } from './pages/spazio-clienti/nuovo-cliente/nuovo-cliente.page';
import { FattureClientePage } from './pages/spazio-clienti/fatture-cliente/fatture-cliente.page';
import { DettagliClientePage } from './pages/spazio-clienti/dettagli-cliente/dettagli-cliente.page';
import { NuovaFatturaPage } from './pages/spazio-fatture/nuova-fattura/nuova-fattura.page';
import { EditFatturaPage } from './pages/spazio-fatture/edit-fattura/edit-fattura.page';
import { EditClientePage } from './pages/spazio-clienti/edit-cliente/edit-cliente.page';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UtentiPage,
    ClientiPage,
    FatturePage,
    NuovoClientePage,
    FattureClientePage,
    DettagliClientePage,
    NuovaFatturaPage,
    EditFatturaPage,
    EditClientePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
