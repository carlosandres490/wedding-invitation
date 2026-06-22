// app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { InvitacionComponent } from './pages/invitacion/invitacion.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { EntradaGuard } from './guards/entrada.guard';

const routes: Routes = [
  { path: '', component: EntradaComponent },
  { path: 'invitacion', component: InvitacionComponent, canActivate: [EntradaGuard] },
  { path: 'detalles', component: DetallesComponent, canActivate: [EntradaGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
