import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { ExemploNgClassComponent } from './exemplo-ng-class/exemplo-ng-class.component';
import { ExemploNgStyleComponent } from './exemplo-ng-style/exemplo-ng-style.component';
import { ExemploNgModelComponent } from './exemplo-ng-model/exemplo-ng-model.component';
import { ExemploNgIfComponent } from './exemplo-ng-if/exemplo-ng-if.component';
import { ExemploNgForComponent } from './exemplo-ng-for/exemplo-ng-for.component';
import { ExemploNgSwitchComponent } from './exemplo-ng-switch/exemplo-ng-switch.component';
import { ExemploNgPipesComponent } from './exemplo-ng-pipes/exemplo-ng-pipes.component';

const routes: Routes = [
  { path: "bindings", component: ExemploBindingComponent},
  { path: "imc", component: ImcComponent},
  { path: "ngclass", component: ExemploNgClassComponent},
  { path: "ngstyle", component: ExemploNgStyleComponent},
  { path: "ngmodel", component: ExemploNgModelComponent},
  { path: "ngif", component: ExemploNgIfComponent},
  { path: "ngfor", component: ExemploNgForComponent},
  { path: "ngswitch", component: ExemploNgSwitchComponent},
  { path: "ngfor", component: ExemploNgForComponent},
  { path: "pipes", component: ExemploNgPipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
