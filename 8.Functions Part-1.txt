- Functions Part-1
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=MwtLPwSJUyg)
    
    ### Functions **Part 1: Function Basics and Declaration**
    
    1. **Function Declaration:**
        
        In JavaScript, you can declare a function using the `function` keyword. A function is a block of reusable code that performs a specific task.
        
        ```jsx
        function greet(name) {
          console.log(`Hello, ${name}!`);
        }
        
        greet('John'); // Output: Hello, John!
        
        -----------Practice----------
        function greet(name) {
            console.log(`Hello ${name}!`);
        }
        greet('Yugandhar');
        ---------------------------------
        function greetUser(name,age) {
            console.log(`Hello ${name}! Your age is ${age}`);
        }
        greetUser('Yugandhar', 23);
        ---------------------------------------
        
    2. **Function Parameters:**
        
        Functions can take parameters (inputs) and use them within the function's body.
        
        ```jsx
        function add(a, b) {
          return a + b;
        }
        
        let result = add(3, 5);
        console.log(result); // Output: 8
        
        ----------Practice---------

        function add(a,b) {   //Here we created add function
            return a+b;       //Here we return the condition
        }
        function sub(a,b) {  //Here we created sub function
            return a-b;      //Here we return the condition
        }
        let results = add(3,5);   //here we assign(3, 5) values to add function 
        console.log(results);
        
        let results1 = sub(9,5);
        console.log(results1);

        ---------------------           
        
    3. **Function Expression:**
        
        Functions can also be defined as expressions and assigned to variables. This is useful for creating anonymous functions or passing functions as arguments.
        
        ```jsx
        const multiply = function(a, b) {    
          return a * b;
        };
        
        let product = multiply(4, 6);
        console.log(product); // Output: 24
        
        ```
        --------------Practice----------
        const mul = function(a, b) {        //In place of const we can use 'var' or 'let'
            return a * b;
          };
          
          let product = mul(5, 6);
          console.log(product); 
         ----------------------------
        
    4. **Arrow Functions:**
        
        Arrow functions provide a concise syntax for defining functions, especially for one-liners.
        
        ``jsx
        const square = (x) => x * x;
        
        let squaredValue = square(7);
        console.log(squaredValue); // Output: 49
        
        
        ------------Practice-------------
        const value = (x) => x*x;   //Here we have to use const keyword 

        let xyz = value(5);
        console.log(xyz);

        -------------------------------------
        ```
        
    5. **Return Statement:**
        
        Functions can return values using the `return` statement. If a function doesn't explicitly return a value, it returns `undefined`.
        
        ```jsx
        function sayHello() {
          return 'Hello!';
        }
        
        let greeting = sayHello();
        console.log(greeting); // Output: Hello!
        

        ------------Practice------------

        function Hello(){
            return "Hey Hi Babe..!"
        }
        
        let results = Hello();
        console.log(results);
        -----------------------------------

        const randomNumber = function(){
            return ;    //Here we didn't return any statement, That's why it will give 'undefined'  
         };
         let results = randomNumber();
         console.log(results);
         ------------------------------------------
        ```
        
    
    ### Attempt Quiz → [Click Here](https://forms.gle/dbaHXL8xSZAYpxTe8)
    
    ### Assignment Questions:
    
    1. Write a function `addNumbers` that takes two numbers as arguments and returns their sum. Call the function to find sum of any two numbers and display the result.
    2. Write an arrow function `square` that takes a number and returns its square. Call this function to find square of any number and display the result.
    3. Write a function expression called `randomNumber` that returns a random whole number between 1 and 10. Assign this function to a variable and display output of that variable to see random numbers.
    4. Write a function `stringConcat` that takes two string arguments and returns concatenated string. Call this function to concatenate your first and last name into a full name. Display the returned full name.
    5. Write a function `greetUser` that takes username as input parameter and returns a greeting text for that user. Call the function for at least 3 different users and display their customized greetings.

`
    //-----------------Answers-----------------

    1.
        function addNumbers(a, b){
            return (a+b);
        }
        let sum = addNumbers(6,8);
        console.log(sum);


    2. 
        const square = (x) => x*x;   //I have to check square function in Google

        let results = square(4);
        console.log(results);        

    3. 
        const randomNumber = function(){
            return Math.floor(Math.random() * 10);  //Math.random function will return random values
        };
        let results = randomNumber();
        console.log(results);

                      'or'

        function randomNumber(){
        return Math.floor(Math.random() * 10);  //Math.random function will return random values
        };
        let results = randomNumber();
        console.log(results);                      

    4. 
        let firstName = "Yugandhar";
        console.log(firstName);
        let lastName = "Babu";
        console.log(lastName);
        
        let fullName = firstName.concat(lastName);
        console.log(fullName);

    5. 
        function greetUser(name) {
            console.log(`Hello ${name}!`);
        }
        greetUser('Yugandhar');
        greetUser('Yugandhar Babu');
        greetUser('Vinay');