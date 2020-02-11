import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceContractorsComponent } from './invoice-contractors.component';

describe('InvoiceContractorsComponent', () => {
  let component: InvoiceContractorsComponent;
  let fixture: ComponentFixture<InvoiceContractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceContractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
