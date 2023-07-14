import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CpTableComponent } from './components/cp-table/cp-table.component';
import { CpFormComponent } from './components/cp-form/cp-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpTableComponent,
    CpFormComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
