import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgPipesComponent } from './exemplo-ng-pipes.component';

describe('ExemploNgPipesComponent', () => {
  let component: ExemploNgPipesComponent;
  let fixture: ComponentFixture<ExemploNgPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNgPipesComponent]
    });
    fixture = TestBed.createComponent(ExemploNgPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
