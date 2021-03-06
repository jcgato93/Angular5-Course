import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { AppRoutingModule } from './/app-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

//firebase
import { AngularFireModule } from'angularfire2';
import { AngularFireDatabaseModule} from'angularfire2/database';
import { environment} from'../environments/environment';
import { CrearComponent } from './crear/crear.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkifystrngPipe } from './pipes/linkifystrng.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthorizationService } from './services/authorization.service';
import { AuthorizationGuardService } from './guards/authorization-guard.service';

@NgModule({
  declarations: [
    AppComponent,    
    ResaltarDirective, 
    ContarClicksDirective, 
    DetalleComponent, 
    LugaresComponent, 
    ContactoComponent, 
    CrearComponent, 
    LinkifystrngPipe, LoginComponent, RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'My key'
    }),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [
    LugaresService,
    AuthorizationService,
    AuthorizationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
