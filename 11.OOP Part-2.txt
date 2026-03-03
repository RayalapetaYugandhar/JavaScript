- OOP Part-2
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=OLvfrbvBcYE)
    
    **1. Objects:**
    
    In JavaScript, objects are collections of key-value pairs. They are used to represent and organize data. Objects can contain various data types, including other objects, functions, and primitive values. Here's how you can create an object:
    
    ``
    let person = {
      firstName: "Nihar",
      lastName: "Dodagatta",
      age: 20
    };
    
    ```
    
    **2. Properties:**
    
    Properties are the key-value pairs within an object. They define the characteristics or attributes of the object. You can access object properties using dot notation or bracket notation:
    
    ```jsx
    console.log(person.firstName); // Using dot notation
    console.log(person["lastName"]);  // Using bracket notation
    
    ```
    
    You can also add, modify, or delete properties of an object:
    
    ```jsx
    person.gender = "Male";     // Adding a property
    person.age = 31;           // Modifying a property
    delete person.age;         // Deleting a property

    `
    `
--------------Practice-------------

        let bike = {            //Here we created one object
          name: "Apache",     
          owner: "Yugandhar",
          model: 2013,
        };

        console.log(bike.name);   //Here we are accessing the properties of the object
        console.log(bike.owner);
        console.log(bike.model);

        bike.name = "FZ";             //Here we are changing the properties of object
        bike.model = "2024";

        console.log(bike.name);
        console.log(bike.model);
        console.log(bike.owner);

        delete bike.model;           //Here we are deleting the properties of object

        console.log(bike.model); 
--------------------------------------
let person = {
  firstName: "Yugandhar",
  lastName: "Babu",
  age: 24
};

console.log(`Hello Mister ${person.firstName} ${person.lastName}, You age is ${person.age}`);

------------------------------------
`
    
    **3. Methods:**
    
    Methods are functions defined as properties of an object. They allow you to perform actions or operations on the object's data. Here's how you can define and use a method within an object:
    
    ```jsx
    let calculator = {
      add(a, b) {
        return a + b;
      },
      subtract(a, b) {
        return a - b;
      }
    };
    
    console.log(calculator.add(5, 3));      // Calling the add method
    console.log(calculator.subtract(10, 2)); // Calling the subtract method

    -------Practice--------

    let calculator = {
      add(a,b){
          return a+b;
      },
      sub(a,b){
          return a-b;
      },
      mul(a,b){
          return a*b;
      },
      div(a, b) {
          return a/b;
      },
      moduls(a,b) {
          return a%b;
      }
  };
  console.log(calculator.add(4,8));
  console.log(calculator.sub(4,8));
  console.log(calculator.mul(4,8));
  console.log(calculator.div(4,8));
  console.log(calculator.moduls(2,4));


    ```
    
    **4. Object Properties and Methods:**
    
    In addition to user-defined objects, JavaScript has several built-in objects and methods that are part of the core language or provided by the JavaScript runtime environment. For example, the `Math` object contains various mathematical methods, and the `Date` object allows working with date and time values.
    
    ```jsx
    let circle = {
      radius: 5,
      area() {
        return Math.PI * this.radius * this.radius;
      }
    };
    
    console.log(circle.area()); // Output: 78.53981633974483
    ```
    
    **5. Object Constructors:**
    
    You can create multiple objects with the same structure and methods by using constructor functions or classes. Constructor functions are functions that are used to create objects with similar properties and methods. Here's an example of an object created using a constructor function:
    
    ```jsx
    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    
      getFullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
    
    const nihar = new Person("Nihar", "Dodagatta");
    console.log(nihar.getFullName()); // Output: "Nihar Dodagatta"


    -------------Practice---------

    class myData {
      constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      getFullName() {
        return `Your full name is ${this.firstName} ${this.lastName} and your age is ${this.age}`; 
      }
    }

    const name = new myData('Rayalapeta Yugandhar', 'Babu', 23);

    console.log(name.getFullName());

    ----------------------------------------
    ```
    
    ### Attempt Quiz → [Click Here](https://forms.gle/cGSt4jnAjZGPyn339)
    
    ### Assignment Question:
    
    Create a JavaScript object called Rectangle with the following properties:
    
    - length
    - width
    
    And the following methods:
    
    - area() - Calculates and returns the area of the rectangle
    - perimeter() - Calculates and returns the perimeter of the rectangle
    
    Then create a Rectangle object to represent a rectangle with length = 5 and width = 3.
    
    Call the area() and perimeter() methods on the rectangle object and log the results to display the area and perimeter of the rectangle.
    
    The key things to demonstrate:
    
    - Creating an object
    - Using properties
    - Defining and calling methods
    - Using this keyword
    
    ### Congrats Mowa Successful ga complete chesnav! Next session lo kaluddam :)

    ```
  --------Answer-----------
    let Rectangle = {
      lenght: 5,
      width: 3,
  
      area() {
          return this.width * this.lenght;
      },
      perimeter(){
          return this.lenght + this.width * 2;
      }
    };
    
    console.log(Rectangle.area());
    console.log(Rectangle.perimeter());

  ---------------------------------