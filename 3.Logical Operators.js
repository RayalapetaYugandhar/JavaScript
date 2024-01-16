- Logical Operators
    
    ### Watch Tutorial → **[Click Here](https://www.youtube.com/watch?v=FKPNI-iev3M)**
    
    ### Logical Operators
    
    Logical operators in JavaScript are used to combine or manipulate Boolean values. They allow you to make more complex decisions by evaluating multiple conditions. There are three main logical operators in JavaScript: `&&` (AND), `||` (OR), and `!` (NOT). Let's explore these operators with examples:
    
    **1. Logical AND (`&&`):**
    
    The `&&` operator returns `true` if both of its operands are `true`. If at least one of the operands is `false`, it returns `false`.
    
    ```jsx
    let isTrue = true;
    let isFalse = false;
    
    let result1 = isTrue && isTrue; // true (both operands are true)
    let result2 = isTrue && isFalse; // false (one operand is false)
    let result3 = isFalse && isFalse; // false (both operands are false)
    
    ```
    
    **2. Logical OR (`||`):**
    
    The `||` operator returns `true` if at least one of its operands is `true`. If both operands are `false`, it returns `false`.
    
    ```jsx
    let isTrue = true;
    let isFalse = false;
    
    let result1 = isTrue || isTrue; // true (both operands are true)
    let result2 = isTrue || isFalse; // true (one operand is true)
    let result3 = isFalse || isFalse; // false (both operands are false)
    
    ```
    
    **3. Logical NOT (`!`):**
    
    The `!` operator is a unary operator that negates a Boolean value. It returns `true` if the operand is `false`, and `false` if the operand is `true`.
    
    ```jsx
    let isTrue = true;
    let isFalse = false;
    
    let result1 = !isTrue; // false (negating true)
    let result2 = !isFalse; // true (negating false)
    
    ```
    
    **Combining Logical Operators:**
    
    You can combine logical operators to create more complex conditions. Parentheses are often used to control the order of evaluation.
    
    ```jsx
    let x = 5;
    let y = 10;
    
    let isGreater = (x > y) && (x !== 0); // false (both conditions must be true)
    let isEither = (x < y) || (y === 10); // true (at least one condition must be true)
    let isNotZero = !(x === 0); // true (negating a false condition)
    ------------------
    Practice code:-
        let x = 5;
        let y = 10;
        
        let isGreater = (x > y) && (x !== 0); //false
        let isEither = (x < y) || (y === 10);  //true
        let isNotZero = !(x === 0);  // true
        console.log(isGreater);
        console.log(isEither);
        console.log(isNotZero);
        
    ```
    
    ### Attempt Quiz → [Click Here](https://forms.gle/JTgWeNPw54eHf4HEA)
    
    ### Assignment Questions:
    
    1. Write a program that checks whether a given number is between 10 and 20 (inclusive). Use the logical AND operator (**`&&`**) for this task.
    2. Create a program that determines whether a given year is a leap year. A leap year is either divisible by 4 but not by 100 unless it is divisible by 400. Use the logical OR operator (**`||`**) in your solution.
    3. Write a program that takes a boolean parameter and returns the opposite value. Use the logical NOT operator (**`!`**) to achieve this.
    4. Create a program that asks the user for their age and whether they have a valid driver's license. Allow them to proceed only if they are 18 or older and have a valid driver's license. Use a combination of logical operators.
    5. Write a program that determines if a given number is positive and even.
    
    Note: use prompt() function to get user input

    1.  let x =  10;
        let y =  20;
        let z = x >= 10 && y <= 20;
        console.log(z);

    2. // program to check leap year
        function checkLeapYear(year) {
        
            //three conditions to find out the leap year
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                console.log(year + ' is a leap year');
            } else {
                console.log(year + ' is not a leap year');
            }
        }
        
        // take input
        const year = prompt('Enter a year:');
        
        checkLeapYear(year);
        
    3.  let x = true;
        let z = !x;
        console.log(z);

    4.  var age = 18;
        if (age >=18){
            console.log("valid drivers license")
        }else{
            console.log("Invalid drivers license")
        }
            
        -------------------
        let name = "Yuga";
        let age = 18;
        
        if (age >= 18){
            console.log("You are eligible to apply for the driving license.")
        }else{
            console.log("You are not eligible to apply for the driving license.")
        }
        ------------------------------------

    5. // program that checks if the number is positive, negative or zero
        // input from the user

        const number = parseInt(prompt("Enter a number: "));

        // let number = 2;
        
        // check if number is greater than 0
        if (number > 0) {
            console.log("The number is positive");
        }
        
        // check if number is 0
        else if (number == 0) {
            console.log("The number is zero");
        }
        
        // if number is less than 0
        else {
            console.log("The number is negative")-1
        }