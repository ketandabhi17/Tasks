export class Invoice
{
    constructor( 
        readonly client:string,
        private details:string,
        public amount:number,
    ){}

    formate()
    {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}