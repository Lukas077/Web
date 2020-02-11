import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceContractorFormComponent } from './invoice-contractor-form.component';

describe('InvoiceContractorFormComponent', () => {
  let component: InvoiceContractorFormComponent;
  let fixture: ComponentFixture<InvoiceContractorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceContractorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceContractorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
