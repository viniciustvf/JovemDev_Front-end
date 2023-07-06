import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgIfComponent } from './exemplo-ng-if.component';

describe('ExemploNgIfComponent', () => {
  let component: ExemploNgIfComponent;
  let fixture: ComponentFixture<ExemploNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNgIfComponent]
    });
    fixture = TestBed.createComponent(ExemploNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
