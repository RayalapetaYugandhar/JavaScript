- OOP Part-1
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=BW0EFOsQPmw)
    
    ### Object-Oriented Programming (OOP):
    
    Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects. It provides a way to structure and design software by modeling real-world entities and their interactions. OOP is widely used in software development and is based on several fundamental concepts:
    
    **1. Objects:** Objects are the basic building blocks of OOP. They represent real-world entities, combining data (attributes) and behavior (methods or functions) into a single unit. Objects are instances of classes.
    
    **2. Classes:** A class is a blueprint or template for creating objects. It defines the structure and behavior of objects of that type. In other words, a class specifies what attributes an object will have and what methods it can execute.
    
    **3. Encapsulation:** Encapsulation is the concept of bundling data (attributes) and methods that operate on that data into a single unit, a class. Encapsulation restricts access to some of an object's components, preventing the accidental modification of data and ensuring data integrity.
    
    **4. Inheritance:** Inheritance is a mechanism that allows you to create a new class based on an existing class, inheriting its attributes and methods. This promotes code reusability and the creation of more specialized classes. The existing class is known as the base or parent class, and the new class is the derived or child class.
    
    **5. Polymorphism:** Polymorphism means that different objects can respond to the same method or function call in a way that is appropriate for their specific class. This allows you to write code that can work with objects of different classes through a common interface. Polymorphism is often achieved through method overriding or interface implementations.
    
    Sure, let's illustrate some of the basic Object-Oriented Programming (OOP) concepts with a simple example in JavaScript:
    
    ``jsx
    // Define a class called "Person"
    class Person {
      // Constructor method to initialize object properties
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      // Method to greet
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    
    // Create objects (instances) of the "Person" class
    const person1 = new Person("Nihar", 20);
    const person2 = new Person("Akshay", 23);
    
    // Access object properties and call methods
    console.log(person1.name);  // Output: "Nihar"
    console.log(person2.age);   // Output: 23
    
    person1.greet(); // Output: "Hello, my name is Nihar and I am 20 years old."
    person2.greet(); // Output: "Hello, my name is Akshay and I am 23 years old."
    


    -------------practice----------
    class Person {
      // Constructor method to initialize object properties
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      // Method to greet
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    
    // Create objects (instances) of the "Person" class
    const person1 = new Person("Yugandhar", 23);
    const person2 = new Person("Vinay", 24);
    
    // Access object properties and call methods
    console.log(person1.name);  // Output: "Nihar"
    console.log(person2.age);   // Output: 23
    
    person1.greet(); // Output: "Hello, my name is Yugandhar and I am 23 years old."
    person2.greet(); // Output: "Hello, my name is Vinay and I am 24 years old."



    -------------------------practice--------------
    class bike {
      constructor(name, age){
          this.name=name;
          this.age=age;
      }
      greet(){
          console.log(`Hello ${this.name}, How are you..Your age is ${this.age} Years. Welcome to our garage`);
      }
    }
    
    const bike1 = new bike("Apache", 13);
    const bike2 = new bike("FZ", 1);
    
    console.log(bike1.name);
    console.log(bike2.age);
    
    bike1.greet();
    bike2.greet();
      
    ------------------------practice--------------------
        class Person{
          constructor(name, age) {
          this.name = name;
          this.age = age;
          }
      
          greet(){
              console.log(`Hello Babe My name is ${this.name}`);
          }
      }
      
      const person1 = new Person("Yugandhar", 23);
      const person2 = new Person("King", 23);
      
      console.log(person1.name);
      console.log(person2.age);
      
      person1.greet();
      person2.greet();
      
--------------------------------------------------
    ```
    
    In this example:
    
    1. We define a class called `Person` with a constructor that initializes `name` and `age` properties.
    2. The `greet` method is a function associated with the `Person` class.
    3. We create two objects, `person1` and `person2`, each with their own set of properties.
    4. We access object properties and call the `greet` method to display a message specific to each object.
    
    This example demonstrates key OOP concepts, such as classes, objects, properties, and methods. The `Person` class acts as a blueprint for creating objects, and objects have their own data (properties) and behavior (methods). It's a simple illustration of how OOP promotes code organization and the modeling of real-world entities in your code.
    
    “this” operator:
    
    In JavaScript, the `this` operator is typically used in the constructor of a class to refer to the current instance of the object being created. It's used to initialize and assign values to the object's properties. While it's common and standard practice to use `this` in constructors, it is not strictly necessary to do so, especially if you are not using object-oriented programming principles.
    
    However, when you are using the class syntax in JavaScript to define constructors and methods, it is recommended and standard to use `this` to reference the instance's properties. This ensures clarity and consistency in your code, making it easier to understand and maintain.
    
    If you decide not to use `this` in the constructor, you would have to come up with an alternative approach to initialize and assign values to the object's properties, which can make your code less conventional and less readable.
    
    Here's an example of a constructor without using `this`, though it's not a common practice:
    
    ```jsx
    class Person {
      constructor(name, age) {
        const person = {};
    
        person.name = name;
        person.age = age;
    
        return person;
      }
    
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    
    const person1 = new Person("Nihar", 20);
    console.log(person1.name); // Output: "Nihar"
    
    ```
    
    In this example, the constructor creates a new object (`person`) and returns it, which is a less common and less conventional approach. It's typically recommended to use `this` in the constructor for better code organization and maintainability.
    
    OOP promotes modularity, reusability, and the organization of code. It helps developers manage complex systems by breaking them down into smaller, more manageable components. OOP is widely used in programming languages such as Java, C++, Python, and C#, and it plays a crucial role in modern software development.
    
    ### Attempt Quiz → [Click Here](https://forms.gle/4E9zY71BcQSMujjN8)
    
    ### Assignment Question:
    
    Create a class called 'BankAccount' with attributes accountNumber, name, balance. Write a constructor, deposit() and withdraw() methods to add/subtract money from balance. Create 2 accounts, make some deposits and withdrawals, and print updated balances.

    -------------Answer----------
`
    class BankAccount {
      constructor(accountNumber, name, balance) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
        console.log(`A/c No.: ${accountNumber}`);
        console.log(`Account Holder name: ${this.name}`)
        console.log(`Opening Balance: $${balance}`); 
      }
      // name() {
      //     this.name = name;
      //   //   console.log(`Account Holder name: ${this.name}`);
      // }
      deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
      }
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawn: $${amount}`);
        } 
        else 
        {
          console.log(`Want to withdrawn: $${amount}`);
          console.log('Insufficient balance');
        }
      }
      displayBalance() {
        console.log(`Account Balance: $${this.balance}`);
      }
    }
    
    // Create an instance of the BankAccount class
    const account = new BankAccount('SB-123','Yugandhar', 1500);
    
    // account.name();
    // Deposit money into the account
    account.deposit(500);
    // Withdraw money from the account
    account.withdraw(400);
    // Display the account balance
    account.displayBalance();
    // Withdraw money from the account
    account.withdraw(1800);
    // Display the account balance
    account.displayBalance();
    

    --------------------------------

class BankAccount {
  constructor (accountNumber, name, balance) {
      this.accountNumber = accountNumber;
      this.name = name;
      this.balance = balance;
      
      console.log(`A/C No is : ${this.accountNumber}`);
      console.log(`Account Holder Name ${this.name}`);
      console.log(`Opening balance ${this.balance}`);
  }

  deposit(amount) {
          this.balance += amount;
          console.log(`Deposited: $${amount}`);
        }
  withdraw(amount) {
      if(amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdraw $${amount}`);
      }else{
          console.log(`want to withdraw amount ${amount}`);
          console.log(`Insufficient balance`);
      }
  }
  displayBalance() {
      console.log(`Account Balance $${this.balance}`);
  }
  
}

const account = new BankAccount ('HDFC000', 'Yugandar' , 1500);

account.deposit(600);
account.withdraw(300);
account.displayBalance();
account.withdraw(2000);
account.displayBalance();



--------------------------------