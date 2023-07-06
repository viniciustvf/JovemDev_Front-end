import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgClassComponent } from './exemplo-ng-class.component';

describe('ExemploNgClassComponent', () => {
  let component: ExemploNgClassComponent;
  let fixture: ComponentFixture<ExemploNgClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploNgClassComponent]
    });
    fixture = TestBed.createComponent(ExemploNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
