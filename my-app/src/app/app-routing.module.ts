import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

const routes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'lugares', component: LugaresComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {


}
