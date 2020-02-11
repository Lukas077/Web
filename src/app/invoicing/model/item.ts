export interface InvoiceSummary {
    netto: number;
    brutto: number;
    tax: number;
    contractor?: Contractor;
}

export interface Contractor {
    id: string;
    name: string;
    taxNumber: string;
}

export interface Invoice {
    client?: Contractor;
    saleDate: Date;
    items: InvoiceItem[];
}

export interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}

export enum Unit {
    service = 'service',
    good = 'good',
    hour = 'hour'
}

export enum Tax {
    t23 = 0.23,
    t8 = 0.08,
    t5 = 0.05
}

export class InvoiceItemFactory {
    newInvoiceItem(): InvoiceItem {
        return {
            id: uuid(),
            name: '',
            quantity: 1,
            unit: null,
            netto: null,
            tax: null,
            brutto: null,
        };
    }
}

export class ContractorItemFactory {
    newContractorItem(): Contractor {
        return {
            id: uuid(),
            name: undefined,
            taxNumber: undefined
        }
    }
}


function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8 );
        return v.toString(16);
    });
}
