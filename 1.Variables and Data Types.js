Variables and Data Types:-


  ** Variables in JavaScript**:-
   
    Variables in javascript are used to store data values.You can think of them as containers that hold different types of information. 
	To declare a variable in javascript, you can use the var , let, or const keywords.
	
	1. var:
		var was traditionally used for variable declaration, but it has some scope issues and is less commonly used now.
		var age = 19; // Declaring a variable 'age' and assigning it a value of 19
		age = 20; // You can change the value of a 'var' variable
----------------------------
			Practice code:-
				var name = 'yugandhar';
				var age = 20;
				age = 25;

				console.log(name);
				console.log(age);			
-------------------
	2.let:
		let allows you to declare block-scoped variables, which means they are only accessible within the block (e.g., inside a function or loop) where they are defined.
		let name = "Yugandhar";
		let age = 19;
----------------------------			
			Practice Code:-
				let name = 'yugandhar';
				name = 'king kong';
				let age = 20;
				age = 25;

				console.log(name);
				console.log(age);
----------------------------				
	3.const:
		const is used to declare constants. Once a value is assigned to a const, it cannot be changed.
		const pi = 3.14159;
-------------------------------	
		  Practice code:-
				const name = 'yugandhar';
				// name = 'king kong';
				const age = 20;
				// age = 25;

				console.log(name);
				console.log(age);

----------------------------
		  
	**Data Types in JavaScript:**

JavaScript has several data types to represent different kinds of values. These data types include:

1. **Primitive Data Types:**
    
    a. **String:**
    
    - Represents textual data and is enclosed in single or double quotes.
    
    ```jsx
    let name = "Yugandhar";
    
    ```
    ----------------------------------
	Practice code:-
		let name = 'Yugandhar';

		console.log(typeof(name));
		console.log("name is of datatype: "+ typeof(name));
		
   -----------------------------------		


    b. **Number:**
    
    - Represents both integer and floating-point numbers.
    
    ```jsx
    let age = 19;
    let price = 19.69;
    
    ```
	
	-------------------------
	Practice code:-
	   let age = 50;
	   console.log(typeof(age));
	   
	   let age = 60;
	   console.log("age is of datatype: "+ typeof(age));


	 ------------------------


    
    c. **Boolean:**
    
    - Represents `true` or `false` values.
    
    ```jsx
    let isStudent = true;
    let isAdmin = false;
    
    ```
	
	-----------------------------
	Practice Code:-
	  isStudent = true;
      console.log("isStudent is of datatype: "+ typeof(isStudent));

----------------------------------
    
    d. **Undefined:**
    
    - Represents a variable that has been declared but hasn't been assigned a value.
    
    ```jsx
    let x;
    console.log(x); // This will output 'undefined'
    
    ```
    --------------------------------------------
	Practice Code:-
		let a;
		console.log("a is of datatype: "+ typeof(a));
-----------------------------------

    e. **Null:**
    
    - Represents the intentional absence of any object value.
    
    ```jsx
    let emptyValue = null;
    
    ```
	
	----------------------
	Practice code:-
	let a = null;
	console.log(a);
	
	--------------------------
	
    
2. **Reference Data Types:**
    
    a. **Object:**
    
    - Used to store collections of key-value pairs. Objects are created using curly braces `{}`.
    
    ```jsx
    let person = {
      name: "Bob",
      age: 30,
    };
    
    ```
	
	----------------------------
	Practice Code:-
		let person = {
			name: 'Yugandhar',  //single or double quotes.
			age: 23,
		};
		console.log(person);
		console.log(person.name);  // Accessing one Element
		console.log(person['age']);  // Accessing one Element
		----------------------
    
    b. **Array:**
    
    - Used to store ordered collections of values. Arrays are created using square brackets `[]`.
    
    ```jsx
    let colors = ["red", "green", "blue"];
    
    ```
	--------------------------
	Practice Code:-
		let colors = ["green", "red", "blue", "black"];
		console.log(colors);
		console.log(colors[1]);
		console.log(colors[2]);
	----------------------------
    
    c. **Function:**
    
    - Functions are objects and can be assigned to variables, passed as arguments, and returned from other functions.
    
    ```jsx
    function greet(name) {
      return `Hello, ${name}!`;
    }
    
    ```
	----------------------------
	Practice Code:-
	
		function greet(name) {
			return `Hello, ${name}!`;
		}

		 console.log(greet("Yugandhar"));
    ---------------------------------------

These are the fundamental concepts of variables and data types in JavaScript. Understanding these concepts is essential for writing effective and flexible JavaScript code.


### Assignment Questions:

1. **Variable Declaration:**
    - **Question:** Declare a variable called `myNumber` and assign it the value `5`. Output the value using `console.log()`.
2. **Boolean Variable:**
    - **Question:** Declare a variable called `isSunny` and assign it the value `true`. Output the value using `console.log()`.
3. **String Concatenation:**
    - **Question:** Declare two variables, `firstName` and `lastName`, and assign them your first and last name, respectively. Concatenate them to form a full name and output the result.
4. **Array Declaration:**
    - **Question:** Declare an array called `myArray` with three elements: `1`, `2`, and `3`. Output the array using `console.log()`.
5. **Object Declaration:**
    - **Question:** Create an object called `myObject` with a property `color` set to `"blue"` and another property `number` set to `42`. Output the object using `console.log()`.
	
	
	Answers:--
	1.  var myNumber = 5;
    console.log(myNumber);

	2.  isSunny = true;
		console.log(isSunny);

	3. var a = "Yugandhar";
	   var b = "Babu";
	   console.log(a + b);

	4. var myArray = [1,2,3];
	   console.log(myArray);
	   console.log(myArray['2']);

	5. myObject = {
			color: "Blue",
			number:42,
		};
		console.log(myObject);