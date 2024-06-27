import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario/login-usuario.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/hero/heroes.module';
import { DbzModule } from './dbz/dbz.module'
//import { LoginUsuarioComponent } from './app/login-usuario/login-usuario/login-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    FrutaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
