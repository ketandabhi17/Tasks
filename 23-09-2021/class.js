var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.formate = function () {
        return this.client + " owes rupees" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var k = new Invoice('ketan', 'works in stocks market', 10000);
var b = new Invoice('Brij', 'works in stocks market', 300000);
var invoices = [];
invoices.push(k);
k.client = ('raju');
console.log(k, b);
