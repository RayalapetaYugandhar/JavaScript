- Few more Array Methods
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=8CQTwWLJqHs)
    
    ### Few more Array Methods
    
    **`concat` Method:**
    
    The `concat` method is used to merge two or more arrays and returns a new array.
    
    ```jsx
    let fruits = ['apple', 'banana'];
    let vegetables = ['carrot', 'broccoli'];
    let combined = fruits.concat(vegetables);
    ```
    --------------Practice-----------

    let name = ['Yuga','Vinay'];
    let age = ['23','25'];
    console.log(name);
    console.log(age);

    let combined = name.concat(age);
    console.log(combined);
    
    ---------------------------------------
    **`slice` Method:**
    
    The `slice` method extracts a section of an array and returns it as a new array.
    
    ```jsx
    let subArray = combined.slice(2, 4); // Extract elements at indices 2 an
    
    ```
    ----------Practice------------

    let name = ['Yuga','Vinay','king','kong','Rani','Rani'];
    console.log(name);
    let combined = name.slice(2,5); //It will print 2,3 & 4 index values
    console.log(combined);
--------------------------------------

    **`splice` Method:**
    
    The `splice` method can be used to add, remove, or replace elements within an array.
    
    ```jsx
    combined.splice(2, 2, 'grape', 'kiwi'); // Remove 2 elements from index 2 and insert 'grape' and 'ki
    ```
    ----------Practice----------------------

    let name = ['Yuga','Vinay','king','kong','Raju','Rani'];
    console.log(name);
    name.splice(2,1, 'Dad', 'mom' ); //It will remove 2nd index value and add new values then it will print next values of the 2nd index
    console.log(name);

    ----------------------------------------
    
    **`indexOf` Method:**
    
    The `indexOf` method returns the first index at which a given element is found in the array, or -1 if it is not present.
    
    ```jsx
    let index = combined.indexOf('kiwi');
    ```
    --------------Practice-------------

    let name = ['Yuga','Vinay','king','kong','Raju','Rani'];
    console.log(name);
    let index = name.indexOf('kong');  //it will check the index value of 'knog'
    console.log(index);
    ---------------------------------
    
    **`filter` Method:**
    
    The `filter` method creates a new array with all elements that pass a test implemented by a provided function.
    
    ```jsx
    let filtered = combined.filter(item => item.length > 5);
    
    
    -------------------Practice---------

    let name = ['Yugandhar','Vinay','king','kong','Raju','Rani'];
    console.log(name);
    let filter = name.filter(item => item.length > 4);  //it will check length '4' , if the length is more than 4 it will print those values
    console.log(filter);

----------------------------------------------
    ```
    
    **`forEach` Method:**
    
    The `forEach` method allows you to iterate over the elements of an array and execute a function for each element.
    
    ```jsx
    let numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
      console.log(number * 2);
    });
    // Output: 2, 4, 6, 8, 10
    
    
    -------------------Practice--------

    let number = [0,1,2,3];

    number.forEach(function(number){
        console.log(number * 2);
    });

------------------------------------
    
    **`map` Method:**
    
    The `map` method creates a new array by applying a function to each element of the original array.
    
    ```jsx
    let squared = numbers.map(function(number) {
      return number * number;
    });
    console.log(squared); // Output: [1, 4, 9, 16, 25]
    
    ----------Practice------------
    let num = [0,1,2,3];
    console.log(num);

    let check = num.map(function(number) {
        return number * number;
    });
    console.log(check); 

    --------------------
    ```
    
    **`find` Method:**
    
    The `find` method returns the first element in an array that satisfies a provided testing function.
    
    ```jsx
    let even = numbers.find(function(number) {
      return number % 2 === 0;
    });
    console.log(even); // Output: 2 (the first even number)
    
    -----------Practice-----------

    let num = [1,2,3,4,5,6];
    console.log(num);

    let check = num.find(function(number) {
        return number % 2 === 0;     // If it satisfies a provided testing function then it will stop. it will return only first satisfied value
    });
    console.log(check); 
   -------------------------------

        
    **`sort` Method:**
    
    The `sort` method is used to sort the elements of an array in place and return the sorted array.
    
    ```jsx
    let fruits = ['banana', 'cherry', 'apple', 'date'];
    fruits.sort();
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
    ```
    ------------Practice-----------

    let fruits = ['banana','watermelon', 'cherry', 'apple', 'date'];
    fruits.sort();  //it will short names by alphabetical order
    console.log(fruits);

    -----------------------------
    
    ### Attempt Quiz → [Click Here](https://forms.gle/FUkf4y5smCZEMEqk6)
    
    ### Assignment Questions:
    
    1. Create an array of 5 student names. Take a new input student name from the user and add it to the existing array using concat(). Display the final array.
    2. Create an array of length 10 with random numbers between 1-100. Take a slice of this array to select only last 5 elements. Display the sliced array.
    3. Create an array of 6 fruits with "apple" as one of them. Use indexOf() to find position of "apple". Display the index or display "apple not found".
    4. Create an array of even numbers from 2 to 20. Using filter(), create new array with only numbers greater than 10. Display filtered array.
    5. Create an array to store 5 random country names. Sort the array in ascending alphabetical order using sort() method. Display final array.
    


-----------------Answers-------------------

1. 
    let std = ['Yuga', 'Vinay', 'King', 'Kong', 'Rani'];
    console.log(std);

    let name = ['Raju'];
    console.log(name);

    let Names = std.concat(name);
    console.log(Names);


2. 
    let num = [1,2,3,5,6,7,8,9,55,57];
    console.log(num);

    let name = num.slice(5,10);
    console.log(name);


3. 
    let fruits = ['banana', 'cherry', 'apple', 'date', 'xhy', 'fyh'];
    console.log(fruits);

    let Result = fruits.indexOf('apple');
    console.log(Result);

4. 
    let number = [2,4,6,8,10,12,14,16,18,20];
    console.log(number);

    let Result = number.filter(item=> item >10);
    console.log(Result);

5. 
    let country = ['India', 'Asutria','Netherlands','Portugal', 'Switzerland'];
    console.log(country);

    country.sort();
    console.log(country);