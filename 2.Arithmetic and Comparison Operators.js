// let a = 5;
// let b = 8;
// let c = 10;

// console.log(a+b);
// console.log(c-a);
// console.log(b*c);
// console.log(a/c);
// console.log(a%b);

############################
- Arithmetic and Comparison Operators
    
    ### Watch Tutorial → [Click Here](https://youtu.be/mrSacf2obos)
    
    ### **Arithmetic Operators:**
    
    Arithmetic operators in JavaScript allow you to perform mathematical calculations on numeric values. Here are the most common arithmetic operators:
    
    1. **Addition (+):** Adds two numbers together.
        
        ``jsx
        let sum = 5 + 3; // sum will be 8
        --------------------
        Practice code:-
            var num = 5;
            var num1 = 6;
            sum = num+num1;
            console.log(sum);
        ------------------------
        ``
        
    2. **Subtraction (-):** Subtracts the right operand from the left operand.
        
        ``jsx
        let difference = 10 - 4; // difference will be 6

        ------------------
        Practice code:-
            var num = 7;
            var num1 = 6;
            sum = num-num1;
            console.log(sum);
        ------------------------
        
    3. **Multiplication (*):** Multiplies two numbers.
        
        ``jsx
        let product = 6 * 7; // product will be 42
---------------------------------
        Practice code:-
            var num = 7;
            var num1 = 6;
            sum = num*num1;
            console.log(sum);
        ------------------------
        
    4. **Division (/):** Divides the left operand by the right operand.
        
        ``jsx
        let quotient = 20 / 4; // quotient will be 5
        ----------
        Practice code:-
            var num = 20;
            var num1 = 4;
            sum = num/num1;
            console.log(sum);
        ------------------------
        ```
        
    5. **Modulus (%):** Returns the remainder of the division of the left operand by the right operand.
        
        ```jsx
        let remainder = 17 % 5; // remainder will be 2
        ----------
        Practice code:-
            var num = 17;
            var num1 = 5;
            sum = num/num1;
            console.log(sum);
        ------------------------

        ```
        
    6. **Increment (++) and Decrement (--):** These operators increase or decrease a variable by 1.
        
        ```jsx
        let count = 5;
        count++; // Increment by 1, count is now 6
        count--; // Decrement by 1, count is now 5
        -----------------
        ----------
        Practice code:-
            var num = 5;
            console.log(num++);
        ------------------------
        Practice code:-
            var num = 5;
            console.log(num--);
        ------------------------
        ----------
        Practice code:-
            var num = 5;
            console.log(++num);
        ------------------------
        Practice code:-
            var num = 5;
            console.log(--num);
        ------------------------

        ```
        
    
    ### **Comparison Operators:**
    
    Comparison operators in JavaScript are used to compare values and return Boolean results (`true` or `false`). Here are some common comparison operators:
    
    1. **Equal (==):** Checks if two values are equal, but it doesn't consider data types (type coercion).
        
        ```jsx
        5 == "5"; // true (values are equal, type coercion)
        ---------------
        Practice Code:-
            var num=5;
            console.log(num==5);
        --------------------
        ```
        
    2. **Not Equal (!=):** Checks if two values are not equal, with type coercion.
        
        ```jsx
        5 != "3"; // true (values are not equal, type coercion)
        ---------------
        Practice Code:-
            var num=5;
            console.log(num!=3);
        --------------------
        ```
        
    3. **Strict Equal (===):** Checks if two values are equal and have the same data type (no type coercion).
        
        ```jsx
        5 === 5; // true (values and data types are equal)
        --------------------
        Practice Code:-
            var num=5;
            console.log(num===5);
        --------------------
        
    4. **Strict Not Equal (!==):** Checks if two values are not equal or have different data types.
        
        ```jsx
        5 !== "5"; // true (values are not equal or have different data types)
        
        ```
        ---------------
        Practice Code:-
            var num=5;
            console.log(num!=="5");
        --------------------
        
    5. **Greater Than (>):** Checks if the left value is greater than the right value.
        
        ``jsx
        10 > 5; // true
        ---------------
        Practice Code:-
            var num=10;
            console.log(num>5);
        --------------------
        
        ```
        
        
    6. **Less Than (<):** Checks if the left value is less than the right value.
        
        ```jsx
        3 < 7; // true
        ---------------
        Practice Code:-
            var num=3;
            console.log(num<7);
        --------------------
        ```
        
    7. **Greater Than or Equal (>=):** Checks if the left value is greater than or equal to the right value.
        
        ```jsx
        10 >= 10; // true
        ---------------
        Practice Code:-
            var num=10;
            console.log(num>=5);
        --------------------
        ```
        
    8. **Less Than or Equal (<=):** Checks if the left value is less than or equal to the right value.
        
        ```jsx
        3 <= 3; // true
        ---------------
        Practice Code:-
            var num=3;
            console.log(num<=3);
        --------------------
        
        ```
        
    
    These operators are crucial for performing comparisons and making decisions in your JavaScript code. Understanding how to use them effectively is fundamental for writing robust programs.
    
    ### Attempt Quiz → [Click Here](https://forms.gle/Z2x7XMW2hBAPvUQE6)
    
    ### Assignment Questions:
    
    1. Code a statement that adds 5 and 7. Assign the result to a variable called `sum`.
    2. Write a line of code that subtracts 3 from 10. Store the result in a variable named `difference`.
    3. Use JavaScript to multiply 4 by 6. Save the product in a variable called `product`.
    4. Create a line of code that divides 15 by 3. Save the quotient in a variable named `quotient`.
    5. Write a statement that checks if 8 is equal to "8". Store the result in a variable named `isEqual`.
    6. Code a line that verifies if 10 is greater than 5. Save the result in a variable named `isGreaterThan`.
    7. Implement a statement that checks if 6 is not equal to 6. Store the result in a variable named `isNotEqual`.



    Assignment Answers:-

    1.  var num = 5;
        var num1 = 7;

        var sum = num+num1;
        console.log(sum);

    2.  var difference = 3/10;
        console.log(difference);

    3.  var product = 4*6;
        console.log(product);

    4.  var quotient = 15%3;
        console.log(quotient);

    5.  var num = 8;
        var isEqual = num == "8";
        console.log(isEqual);

    6.  var num = 10;
        var isGreaterThan = num>5;
        console.log(isGreaterThan);

    7.  var num = 6;
        var isNotEqual = num!=6;
        console.log(isNotEqual);
    

       