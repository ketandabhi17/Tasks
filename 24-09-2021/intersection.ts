interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
let e: Employee = {
    id: 100,
    name: 'ketan dabhi',
    email: 'ketan@example.com',
    phone: '5648651265'
};

type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'kd',
    credit: 1000000,
    email: 'kd@abcinc.com',
    phone: '986532146'
};

console.log("employee name is:"+e.name);
console.log("customer name is:"+c.name);
