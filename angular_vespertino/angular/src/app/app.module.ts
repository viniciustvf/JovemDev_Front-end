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
import { ExemploNgIfComponent } from './exemplo-ng-if/exemplo-ng-if.component';
import { ExemploNgForComponent } from './exemplo-ng-for/exemplo-ng-for.component';
import { ExemploNgSwitchComponent } from './exemplo-ng-switch/exemplo-ng-switch.component';
import { ExemploNgPipesComponent } from './exemplo-ng-pipes/exemplo-ng-pipes.component';
import { MenuComponent } from './menu/menu.component';
import { InvertePipe } from './inverte.pipe';
import { MicroondasComponent } from './microondas/microondas.component';
import { ExemploNgModelComponent } from './exemplo-ng-model/exemplo-ng-model.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { TempoPipe } from './tempo.pipe';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { MdServiceModule } from './md-service/md-service.module';
import { MdAtividadeModule } from './md-atividade/md-atividade.module';



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
    InvertePipe,
    MicroondasComponent,
    TempoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdServiceModule,
    MdAtividadeModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
