- Loops in JavaScript
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=c8ag6F3c0X0)
    
    ### Loops
    
    In JavaScript, loops are used to execute a block of code repeatedly. There are several types of loops in JavaScript, but the most common ones are `for` loops, `while` loops, and `do...while` loops. Let's explore these loops with examples:
    
    **1. `for` Loop:**
    
    The `for` loop is used when you know how many times you want to repeat a block of code. It consists of three parts: initialization, condition, and increment/decrement.
    
    ```jsx
    for (let i = 0; i < 5; i++) {
      console.log("Iteration number: " + i);
    }
    
    ```
    
    This loop will execute the code block five times, starting from `i = 0`, incrementing `i` by 1 with each iteration until the condition (`i < 5`) is no longer true.
    
    **2. `while` Loop:**
    
    The `while` loop is used when you don't know in advance how many times you want to repeat a block of code. It continues as long as a specified condition is `true`.
    
    ```jsx
    let count = 0;
    
    while (count < 5) {
      console.log("Count is: " + count);
      count++;
    }
    
    ```
    
    This loop will execute the code block as long as the condition `count < 5` remains `true`.
    
    **3. `do...while` Loop:**
    
    The `do...while` loop is similar to the `while` loop, but it always executes the code block at least once before checking the condition.
    
    ```jsx
    let x = 0;
    
    do {
      console.log("x is: " + x);
      x++;
    } while (x < 5);
    
    ```
    
    This loop first executes the code block and then checks the condition `x < 5`. If it's `true`, the loop continues; otherwise, it stops.
    
    **Loop Control Statements:**
    
    JavaScript provides loop control statements that allow you to control the flow of loops:
    
    - `break`: Terminates the loop.
    - `continue`: Skips the current iteration and continues to the next one.
    
    **Example with `break`:**
    
    ```jsx
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break; // Stop the loop when i is 5
      }
      console.log("i is: " + i);
    }
    
    ```
    
    **Example with `continue`:**
    
    ```jsx
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue; // Skip the iteration when i is 5
      }
      console.log("i is: " + i);
    }
    
    ```
    
    Loops are essential for iterating over arrays, processing data, and performing repetitive tasks in your JavaScript programs. Understanding how to use loops effectively is a fundamental skill for any JavaScript developer.
    
    ### Attempt Quiz → [Click Here](https://forms.gle/oTJPA8J9Vx2AYEeN6)
    
    ### Assignment Questions:
    
    1. Write a for loop that prints all even numbers from 0 to 10.
    2. Initialize an array of 5 fruits. Use a for loop to print all the elements.
    3. Take an array of numbers as input. Use a do-while loop to compute their sum by iterating over the array (hint: arrayname.length).
    4. Write a loop that iterates from 7 to 77 and prints only those numbers which are multiples of 7. (use the modulus operator `%`)
    5. Use nested for loops to print the following pattern:
    
    ```
    *
    * *
    * * *
    * * * *
    * * * * *
    
    ```
    /////////////////////////////////////////////////////////////////////////
Answers:-

1.  
    var num = 0;
    while(num <= 10){
        if(num%2 === 0){
            console.log(num);
        };
        num ++;
    };


2.  
    for(i=0; i<5; i++){
        console.log("fruit count " + i);
    }

4. 
    // var num = 7;
    // while(num <= 77){
    //     if(num*7 == ){
    //         console.log(num);
    //     };
    //     num ++;
    // };

5. 
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
    }
    console.log(string);