import { Component, Output, EventEmitter } from '@angular/core';
import { Contractor } from '../model/item';

@Component({
  selector: 'app-invoice-contractors',
  templateUrl: './invoice-contractors.component.html',
  styleUrls: ['./invoice-contractors.component.scss']
})
export class InvoiceContractorsComponent {
  contractors: Contractor[];

  @Output()
  contractorsChanged = new EventEmitter<Contractor[]>();

  constructor() {
    this.contractors = [];
  }

  onAddContractor(contractor: Contractor): void {
    this.contractors.push(contractor);
    this.contractorsChanged.emit(this.contractors);
  }

  onDelteContractor(id: string): void {
    this.contractors = this.contractors.filter(x => x.id !== id);
    this.contractorsChanged.emit(this.contractors);
  }
}
