import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { FormsModule } from '@angular/forms';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { CommonModule } from '@angular/common';
import { ExemploNgClassComponent } from './exemplo-ng-class/exemplo-ng-class.component';
import { ExemploNgStyleComponent } from './exemplo-ng-style/exemplo-ng-style.component';
import { ExemploNgModelComponent } from './exemplo-ng-model/exemplo-ng-model.component';
import { ExemploNgIfComponent } from './exemplo-ng-if/exemplo-ng-if.component';
import { ExemploNgForComponent } from './exemplo-ng-for/exemplo-ng-for.component';
import { ExemploNgSwitchComponent } from './exemplo-ng-switch/exemplo-ng-switch.component';
import { ExemploNgPipesComponent } from './exemplo-ng-pipes/exemplo-ng-pipes.component';
import { MenuComponent } from './menu/menu.component';
import { InvertePipe } from './inverte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    ImcComponent,
    ExemploNgClassComponent,
    ExemploNgModelComponent,
    ExemploNgIfComponent,
    ExemploNgForComponent,
    ExemploNgSwitchComponent,
    ExemploNgPipesComponent,
    ExemploNgStyleComponent,
    MenuComponent,
    InvertePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
