- Functions Part-2
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=1RrLRvLf3dk)
    
    ### Functions **Part 2: Function Scope, Closures, and Callbacks**
    
    1. **Function Scope:**
        
        Variables declared inside a function are scoped to that function and not accessible from outside.
        
        ```jsx
        function outerFunction() {    //Here we just created the function
          let message = 'I am inside the function';
          console.log(message);
        }
        
        outerFunction();           //Here we are calling the function
        console.log(message); // Error: message is not defined
        
      
        -----------Practice-----------
        function checking(){    //Here we just created the function
          let results = 'Hi babe...';
          console.log(results);
        }
        checking();   //Here we are calling the function
        ------------------------------
        function checking(){    //Here we just created the function
          let results = 'Hi babe...';
          console.log(results);
        }
        checking();   //Here we are calling the function
        console.log(results); //It will give error..Outside we dont have any Variable called 'results'
                              //We can't declare 'results' outside of the loop
        -----------------------
        ```
    2. **Closures:**
        
        A closure is a function that "remembers" its lexical scope, even when called outside that scope.
        
        ```jsx
        function outer() {
          let message = 'Hello';
        
          function inner() {
            console.log(message);
          }
        
          return inner;
        }
        
        let closure = outer();
        closure(); // Output: Hello
        
        ------------Practice------------
        function firstCheck(){
          let message = "Hi Babe...How are you?";
          
          function secondCheck(){
              console.log(message);   //We can fetch 'message' inside the loop or function
          }
          return secondCheck;
        }
        let results = firstCheck();
        results();
      -----------------------------------
        ```
        
    3. **Callbacks:**
        
        Functions can be passed as arguments to other functions, commonly used in asynchronous operations.
        
        ```jsx
        function fetchData(callback) {
          // Simulate an asynchronous operation
          setTimeout(function() {
            let data = 'This is the data';
            callback(data);
          }, 2000);
        }
        
        function displayData(data) {
          console.log(data);
        }
        
        fetchData(displayData); // Output: This is the data (after a 2-second delay)

        ---------------Practice-----------
        function firstChek(checking) {
          // Simulate an asynchronous operation
          setTimeout(function() {
            let data = 'Hi Babe...';
            checking(data);
          }, 
          1000);
        }
        
        function secondCheck(data) {
          console.log(data);
        }
        
        firstChek(secondCheck);

        -----------------------------------
        function firstChek(checking) {
          let data = 'Hi Babe...';
          checking(data);
        }
        
        function secondCheck(data) {
          console.log(data);
        }
        
        firstChek(secondCheck);
        -------------------------------------
          
        ```
        
    4. **Named and Anonymous Functions:**
        
        Functions can be named or anonymous. Named functions have a name, and anonymous functions do not.
        
        ```jsx
        // Named function 
        function namedFunction() {           //Here we just created the function
          console.log('I am named');
        }
        
        // Anonymous function assigned to a variable
        const anonymousFunction = function() {
          console.log('I am anonymous');
        };
        
        namedFunction(); // Output: I am named         //Here we are calling the function
        anonymousFunction(); // Output: I am anonymous



        ----------Practice--------------
        // Named function 
        function namedFun() {           //Here we just created the function
          console.log('I am named...Miss You');
        }
        
        // Anonymous function assigned to a variable
        let anonymous = function() {
          console.log('I am anonymous....Love you');
        };
        
        namedFun();        //Here we are calling the function
        anonymous();
        ---------------------------------
        
        ```
        
    5. **Function Hoisting:**
        
        In JavaScript, function declarations are hoisted to the top of their containing scope, which means you can use a function before it's declared.
        
    
    ```jsx
    hoistedFunction(); // Output: I am hoisted
    
    function hoistedFunction() {
      console.log('I am hoisted');
    }
    -------Practice--------

    checking();  //Here we are using the function before declaring

    function checking(){   //We can call checking function where ever we want inSide the file itself
      console.log('I Love You');
    }
    --------------------------
    function checking(){   //We can call checking function where ever we want inSide the file itself
      console.log('I Love You');
    }
    
    checking();   //Here we are using the function after declaring
    ----------------------------

    ```
    
    Functions are a fundamental concept in JavaScript and play a crucial role in structuring and organizing code. They can be used for a wide range of tasks, from simple calculations to complex program logic and asynchronous operations. Understanding how to create, use, and pass functions is essential for JavaScript development.
    
    ### Attempt Quiz → [Click Here](https://forms.gle/g85xLegzNz1VKZzV9)
    
    ### Assignment Questions:
    
    1. Write a function that uses a closure to create a counter. The function should return a new function that when invoked increments and returns a counter variable.
    2. Write a function `outer` which returns an anonymous inner function that changes a variable `message` when called. Call the inner function and display the changed message outside `outer`.
    3. Write an asynchronous function `fakeFetch` that accepts a callback. Use `setTimeout` inside `fakeFetch` to simulate a 2 second asynchronous operation before calling the callback function.
    4. Write both a named and an anonymous function to print your name. Store them in variables and call both functions.
    5. Write a program with a function called `hoisted` and call that function before declaring it to see hoisting in action.


    ------Answers------

    1.
        function counter(){                     //Checked in google
          var currentValue = 0;
        
          return function(val){
            currentValue += val;
            return currentValue;
          }  
        }
        
        // create a counter and increment by one
        let c = counter()
        console.log(c(1))
        console.log(c(1))
        console.log(c(1))
        
        // create a new counter and increment it by 2
        let e = counter()
        console.log(e(2))
        console.log(e(2))
        console.log(e(2))


    2.         
        function outer() {
          let message = 'Hey Babe, How are you ?';

          function inner() {
            console.log(message);
          }

          return inner;
        }

        let closure = outer();
        closure(); 

        
    3. 
        function fakeFetch(callback){
          setTimeout(function(){
              let data = 'Yugandhar';
              callback(data);
          }, 2000);
        }
        function check(data){
          console.log(data);
        }
        fakeFetch(check);


    4.                
        function named(){
          console.log('Yugandhar');
        }
        let anonymous = function(){
          console.log('Vinay');
        }
        named();
        anonymous();


    5. 
        hoisted();
        function hoisted(){
            console.log('Yugandhar');
        }