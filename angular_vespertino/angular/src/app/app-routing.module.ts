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
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2} from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atividade/cp-tela/cp-tela.component';
import { TreinoComponent } from './treino/treino.component';

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
  { path: "pipes", component: ExemploNgPipesComponent},
  { path: "microondas", component: MicroondasComponent},
  { path: "pai_filho", component: CpPaiComponent},
  { path: "filho_pai", component: CpPaiComponent2},
  { path: "service", component: CpAgrupadorComponent},
  { path: "atividade", component: CpTelaComponent},
  { path: "treino", component: TreinoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
