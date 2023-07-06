import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgModelComponent } from './exemplo-ng-model.component';

describe('ExemploNgModelComponent', () => {
  let component: ExemploNgModelComponent;
  let fixture: ComponentFixture<ExemploNgModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNgModelComponent]
    });
    fixture = TestBed.createComponent(ExemploNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
