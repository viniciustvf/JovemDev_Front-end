import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgStyleComponent } from './exemplo-ng-style.component';

describe('ExemploBgStyleComponent', () => {
  let component: ExemploNgStyleComponent;
  let fixture: ComponentFixture<ExemploNgStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNgStyleComponent]
    });
    fixture = TestBed.createComponent(ExemploNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
