import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCustosComponent } from './cad-custos.component';

describe('CadCustosComponent', () => {
  let component: CadCustosComponent;
  let fixture: ComponentFixture<CadCustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadCustosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
