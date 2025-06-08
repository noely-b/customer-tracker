let customers = [
{
name: "X", 
email: "x@gmail.com",
purchases: ["laptop", "watch", "headphones"]
},
{
name: "Y",
email: "y@outlook.com",
purchases: ["tablet", "charger"]
},
{
name: "Z",
email: "z@gmail.com",
purchases: ["camera", "phone", "charger", "case"]
}
];

customers.push({
  name: "A", 
  email: "a@school.edu",
    purchases: ["laptop", "case", "mouse"]
    });

console.log(customers[3]);
// name: "A", email: "a@school.edu", purchases: Array(3)
customers.shift([0]);
console.log(customers[0]);
//name: 'Y', email: 'y@outlook.com', purchases: Array(2)

customers[1].email = "z@company.com";
console.log(customers[1]);
// name: 'Z', email: 'z@company.com', purchases: Array(4)

customers[0].purchases.push("watch");
console.log(customers[0]);
// name: 'Y', email: 'y@outlook.com', purchases: Array(3)]

customers.forEach(function(customer, index, customers) {
  console.log(`Customer: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`);
});
// Customer: Y, Email: y@outlook.com, Total Purchases: 3
// Customer: Z, Email: z@company.com, Total Purchases: 4
// Customer: A, Email: a@school.edu, Total Purchases: 3

//Note: comments are based on the "run and debug" outputs for the codes

