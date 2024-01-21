- Arrays in JavaScript
    
    ### Watch Tutorial → [Click Here](https://www.youtube.com/watch?v=SPiX08QcXTg)
    
    ### Arrays
    
    Arrays in JavaScript are a data structure used to store collections of values in a single variable. You can access the elements in an array by their index, and arrays are very versatile and widely used in JavaScript for a variety of tasks.
    
    **Declaration and Initialization:**
    
    To declare and initialize an array in JavaScript, you can use square brackets to enclose the array elements. Here's an example:
    
    ```jsx
    // Declaration and initialization of an array
    let fruits = ['apple', 'banana', 'cherry', 'date'];
    
    // Accessing elements by index
    console.log(fruits[0]); // Output: 'apple'
    
    ```
        ----------------Practice-----
    let names = ['Yugandhar', 'Vinay', 'Raju'];
        console.log(names);
        console.log(names[1]); //Accessing elements by index
        console.log(typeof(names[0])); //Checking the typoeof values
        console.log(names.length); //finding the array length

        -------------------------------
    ### Array Methods
    
    1. **Push Method:**
        
        The `push` method adds one or more elements to the end of an array and returns the new length of the array.
        
        ```jsx
        fruits.push('elderberry');
        console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
        
        ```
        ----Practice-------- ////adding extra names into array
            let names = ['Yugandhar', 'Vinay', 'Raju'];
            console.log(names);
            names.push('Rani');
            console.log(names);
        -------------------------

    2. **Pop Method:**
        
        The `pop` method removes the last element from an array and returns that element.
        
        ```jsx
        let removedFruit = fruits.pop();
        console.log(removedFruit); // Output: 'elderberry'
        console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
        
        ```
        --------Practice-------- ////Removing last names into array

            let names = ['Yugandhar', 'Vinay', 'Raju'];
            console.log(names);
            names.pop('');
            console.log(names);
        -------------------------
        
    3. **Shift Method:**
        
        The `shift` method removes the first element from an array and returns that element.
        
        ```jsx
        let removedFruit = fruits.shift();
        console.log(removedFruit); // Output: 'apple'
        console.log(fruits); // Output: ['banana', 'cherry', 'date']
        
        ```
        --------Practice-------- // //Removing first name into array

        let names = ['Yugandhar', 'Vinay', 'Raju'];
        console.log(names);
        names.shift('');
        console.log(names);
    -------------------------
    
        
    4. **Unshift Method:**
        
        The `unshift` method adds one or more elements to the beginning of an array and returns the new length of the array.
        
        ```jsx
        fruits.unshift('apricot', 'fig');
        console.log(fruits); // Output: ['apricot', 'fig', 'banana', 'cherry', 'date']
        
        ```
        --------Practice-------- //Adding new values in array at position '0'

        let names = ['Yugandhar', 'Vinay', 'Raju'];
        console.log(names);
        names.unshift('King', 'Queen');
        console.log(names);
    -------------------------
        
    
    ### Attempt Quiz → [Click Here](https://forms.gle/7R8VXdzjwaFmFJDQ8)
    
    ### Assignment Questions:
    
    1. Create an array called "fruits" and add 3 fruits to it using the push() method. Then remove the last fruit using the pop() method and display the updated array.
    2. Create an array called "vegetables" with 5 items. Remove the first item using shift() and add a new item to the beginning using unshift(). Display the updated array.
    3. Create an array called "nums" with numbers 1-5. Using a loop, remove all existing items and add numbers 6-10 using the push() method. Display the final array.
    4. Create an array called "strings" with 5 string values. Using push() and unshift(), add 2 items to beginning and end. Using pop() and shift(), remove 2 items from beginning and end. Display array after each operation.
    
    ### Congrats Mowa Successful ga complete chesnav! Next session lo kaluddam :)



    ///------------Practice code------------------
        //Storing data into array
        let names = ['Yugandhar', 'Vinay', 'Raju'];
        console.log(names);
        console.log(names[1]);
        console.log(typeof(names[0])); //Checking the typoeof values

        //adding extra names into array
        names.push('Rani');
        console.log(names);

        //Removing last names into array
        names.pop('');
        console.log(names);

        //Removing first name into array
        names.shift('');
        console.log(names);

        //Adding new values in array
        names.unshift('King', 'Queen');
        console.log(names);
//////////////////////////////////////////////////////////////////////////////

-----------Answers------------

1.  
    let fruits = ['Apple']
    console.log(fruits);
    fruits.push('mango', 'orange', 'graps');
    console.log(fruits);
    fruits.pop('');
    console.log(fruits);

2. 
    let vegetables = ['tamota', 'ladyfinger', 'goss', 'cucumber', 'carrot'];
    console.log(vegetables)
    //Removing first vegetables into array
    vegetables.shift('');
    console.log(vegetables);

    //Adding new vegetables in array
    vegetables.unshift('Chilli', 'onion');
    console.log(vegetables);

4.
    let strings = ['Yuga','Vinay', 'Sai', 'Nikhil', 'Vikram'];
    console.log(strings);

    strings.push( 'Rani', 'Raju');
    console.log(strings);

    strings.unshift('king', 'Kong');
    console.log(strings);

    strings.pop('');
    console.log(strings);

    strings.shift('');
    console.log(strings);
