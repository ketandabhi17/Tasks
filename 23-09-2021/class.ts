class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(c:string,d:string,a:number)
    {
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    formate()
    {
        return `${this.client} owes rupees${this.amount} for ${this.details}`;
    }
}

const k = new Invoice('ketan','works in stocks market',10000);
const b = new Invoice('Brij','works in stocks market',300000);


let invoices: Invoice[]=[];
invoices.push(k);
k.client = ('raju');

console.log(k,b);