import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contractor, ContractorItemFactory } from '../model/item';

@Component({
  selector: 'app-invoice-contractor-form',
  templateUrl: './invoice-contractor-form.component.html',
  styleUrls: ['./invoice-contractor-form.component.scss']
})
export class InvoiceContractorFormComponent implements OnInit {
  private readonly contractorFactory: ContractorItemFactory;
  contractor: Contractor;

  @Output()
  addContractor = new EventEmitter<Contractor>();

  constructor() {
    this.contractorFactory = new ContractorItemFactory();
  }

  ngOnInit(): void {
    this.contractor = this.contractorFactory.newContractorItem();
  }

  onSubmit(): void {
    this.addContractor.emit(this.contractor);

    this.contractor = this.contractorFactory.newContractorItem();
  }
}
