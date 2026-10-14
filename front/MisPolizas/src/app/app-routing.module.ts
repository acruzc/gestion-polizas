import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './components/listado/listado.component';
import { PolizaComponent } from './components/poliza/poliza.component';

const routes: Routes = [
  { path: '', redirectTo: '/policies', pathMatch: 'full' },
  {path: 'policies', component: ListadoComponent},
  { path: 'policies/:id', component: PolizaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
