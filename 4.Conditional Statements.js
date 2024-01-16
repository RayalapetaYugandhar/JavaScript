- Conditional Statements
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=ATCJTW3b-6g)
    
    ### Conditional Statements
    
    Conditional statements in JavaScript allow you to control the flow of your program based on certain conditions. They enable you to make decisions and execute different blocks of code depending on whether a condition is `true` or `false`. There are three primary conditional statements in JavaScript: `if`, `else if`, and `else`. Let's explore them with examples:
    --------------------------------------------------------------
    **1. The `if` Statement:**
    
    The `if` statement is used to execute a block of code if a condition is `true`.
    
    ```jsx
    let temperature = 25;
    
    if (temperature > 30) {
      console.log("It's a hot day!"); // This code block will not execute
    }
    
    if (temperature <= 30) {
      console.log("It's a pleasant day!"); // This code block will execute
    }
    
    ```---------------------------------------------------
    
    **2. The `if...else` Statement:**
    
    The `if...else` statement is used when you want to execute one block of code if a condition is `true`, and another block if it's `false`.
    
    ```jsx
    let age = 18;
    
    if (age >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }
    
    ```
    -------------------------------------------------------
    **3. The `else if` Statement:**
    
    The `else if` statement allows you to specify multiple conditions to check. It's often used in conjunction with `if...else` statements.
    
    ```jsx
    let hour = 14;
    
    if (hour < 12) {
      console.log("Good morning!");
    } else if (hour < 18) {
      console.log("Good afternoon!");
    } else {
      console.log("Good evening!");
    }
    ----------------------------------
    Practice code:-
        var time = 18;

        if (time<=12){
            console.log("Good Morning");
        }else if(time <=16) {
            console.log("Good Afternoon")
        }else{
            console.log("Good Night")
        }
        ```
    ---------------------------------------------------
    **Nesting Conditional Statements:**
    
    You can also nest conditional statements within each other to create more complex logic.
    ------------------------------------------
    ```jsx
    let isWeekend = true;
    let time = 14;
    
    if (isWeekend) {
      if (time < 12) {
        console.log("Good morning on the weekend!");
      } else {
        console.log("Good afternoon on the weekend!");
      }
    } else {
      if (time < 12) {
        console.log("Good morning on a weekday!");
      } else {
        console.log("Good afternoon on a weekday!");
      }
    }
    -------------------------------------------
    ```
    
    **Ternary Operator:**
    
    JavaScript also provides a concise way to write simple conditional statements using the ternary operator (`? :`).
    
    ```jsx
    let isRaining = true;
    let weatherMessage = isRaining ? "Bring an umbrella." : "No need for an umbrella.";
    console.log(weatherMessage);
    
    ```
    
    Conditional statements are fundamental for writing dynamic and responsive programs, allowing you to control the logic of your code based on different conditions and scenarios.
    
    ### Attempt Quiz → [Click Here](https://forms.gle/2CG8Mjsvs7YE1SAQ8)
    
    ### Assignment Questions:
    
    1. Write an `if...else` statement that assigns "It's hot" to a variable `weather` if the temperature is over 80 degrees, and "It's nice" if the temperature is 80 degrees or cooler. Log the `weather` variable to the console.
    2. Write a ternary statement that checks if a variable `age` is 18 or over. If so, assign the variable `canVote` to `true`, otherwise assign it to `false`. Log the `canVote` variable.
    3. Write nested conditional statements that check if a variable `day` is Saturday or Sunday, and if a variable `time` is before 11am. If both conditions are true, log "Sleep in!", else log "Wake up!".
    4. Write a series of `if`, `else if`, and `else` statements that check if a variable `temp` is below 32 (freezing), between 32 and 50 (cold), between 50 and 70 (pleasant), or above 70 (hot). Log an appropriate message for each temperature range.
    5. Write conditional statements to implement a simple calculator. Have the user input two numbers and an operation ("+","-","*","/"). Based on the operation, perform the mathematical operation on the numbers and log the result. Handle division by zero gracefully without errors.