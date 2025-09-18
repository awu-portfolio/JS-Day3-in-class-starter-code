
/*
const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
function Employee(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  };

  Employee.prototype.editEmployee = function(updates) {
    Object.assign(this, updates);
  };

  // Usage example:
  const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  console.log(bill);

  bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  console.log(bill);
*/

//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate

class Employee {
  constructor(firstname, lastname, email, birthdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
  }

  getEmployee() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      birthdate: this.birthdate
    }
  }

  addEmployee(firstname, lastname, email, birthdate) {
    return new Employee(firstname, lastname, email, birthdate);
  }

  editEmployee(f, l, e, b) {
    this.firstname = f;
    this.lastname = l;
    this.email = e;
    this.birthdate = b;
  }
}

// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name

const athena = new Employee("Athena", "Wu", "awu@example.com", "11-06-2004");

// 3. After step 2, console log your const and then try to console.log parts of the object

console.log(`${athena.firstname} ${athena.lastname} is born on ${athena.birthdate}. Email: ${athena.email}.`);

// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it

const employee_list = [
  new Employee("John", "Smith", "jsmith@example.com", "01-01-2002"),
  new Employee("Jane", "Doe", "jdoe@example.com", "04-22-2009"),
  new Employee("Abby", "Smith", "asmith@example.com", "05-10-2003")
];

console.log(employee_list);

employee_list.map((person) => {
  console.log(`${person.firstname} ${person.lastname} is born on ${person.birthdate}. Email: ${person.email}.`)
});


// 5. Add methods to your class to "getEmployee" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS

console.log(athena.getEmployee())

const amanda = athena.addEmployee("amanda", "smith", "asmith@example.com", "22-10-2002");
console.log(amanda)

athena.editEmployee("Athena2", "Wu", "awu@example.com", "11-06-2004");
console.log(athena)

// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

const table = document.querySelector("#employeeTable tbody");

function addRow(employee) {

  const row = document.createElement("tr");
  const employee_values = Object.values(employee);

  for (let i=0; i<4; i++) {
    let cell = document.createElement("td");
    cell.textContent = employee_values[i];
    row.appendChild(cell);
  }

  table.appendChild(row);

}

//Try to output 3 instances of your class object into the table

const bob = athena.addEmployee("bob", "x", "bobx@example.com", "21-09-2004");

addRow(athena);
addRow(amanda);
addRow(bob);




// CALLBACK CHALLENGE
// Note: the other 2 challenges are commented out

function verifyPayment(orderTotal, resolveCallback, rejectCallback) {
    if (orderTotal < 5000) {
        resolveCallback(`Payment approved.`);
    } else {
        rejectCallback(`Payment requires manager approval.`);
    }
}

verifyPayment(
  3000,
  function (message) {
      console.log("Success:", message);
  },
  function (error) {
      console.log("Error:", error);
  }
)

verifyPayment(
  6000,
  function (message) {
      console.log("Success:", message);
  },
  function (error) {
      console.log("Error:", error);
  }
)


// PROMISE CHALLENGE

/*

function verifyPayment(orderTotal) {
  return new Promise((resolve, reject) => {

    if (orderTotal < 5000) {
      resolve("Payment approved."); 
    } else {
      reject("Payment requires manager approval.");
    }

  });
}

verifyPayment(3000)
  .then((value) => {
    console.log("Success:", value);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

verifyPayment(6000)
  .then((value) => {
    console.log("Success:", value);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


// ASYNC/AWAIT CHALLENGE

function verifyPayment(orderTotal) {
  return new Promise((resolve, reject) => {

    if (orderTotal < 5000) {
      resolve("Payment approved."); 
    } else {
      reject("Payment requires manager approval.");
    }

  });
}

async function test() {
  try {
    const result1 = await verifyPayment(3000);
    console.log("Success", result1);
  } catch (err) {
    console.log("Error:", err);
  }

  try {
    const result2 = await verifyPayment(6000);
    console.log("Success", result2);
  } catch (err) {
    console.log("Error:", err);
  }
}

test();

*/
