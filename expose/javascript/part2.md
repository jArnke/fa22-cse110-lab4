question1: the value in i, 3, will be logged to the console.  This is because them variable was declared in the for loop with the var keyword which keeps the variable in scope of the entire function, not just the for loop block it is declared in.
question2: the value of the last price in the input array after the discount is applied but before rounding will be printed to the console, 150.
question3: the value of the last price in the input list after the discount and rounding is applied will be printed to the console, 150.
question4: the function will return a new list of numbers that is equal to [x[i] * (1-p) for i = 0 to len(x)] where x is the input list and p is the inputed discount percentage.
question5: the function call will result in an error as the variable i is declared with let keyword this time so it is only in scope inside of the for loop which it is declared in. Attempting to log it to the console outside of the loop won't work as i is no longer in scope.
question6:  the variable discountedPrice is declared within the scope of the for loop and attempting to log it to the console outside of the loop will result in an error.
question7:  the price after discounts and rounding applied to the last item in the input list will be printed to the console.
question8: the function will return a new list of numbers that is equal to [x[i] * (1-p) for i = 0 to len(x)] where x is the input list and p is the inputed discount percentage.   
question9:  the function will result in an error when attempting to log i, as it is not in scope after the for loop.
question10:  the length of the input list will be printed, 3.
question11:  the function will return a new list of numbers that is equal to [x[i] * (1-p) for i = 0 to len(x)] where x is the input list and p is the inputed discount percentage.

question12:
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0];

question13:
    A: 32 because + converts the 2 to a string '2' and concatonates the two strings
    B: 1 because the - attempts to convert a string to the number it represents or NaN if its not a number and 3-2 is 1
    C: 3 because null gets mapped to 0 as a number
    D: 3null because null gets mapped to a 'null' as a string
    E: 4 because true gets mapped to 1 as a number
    F: 0 because both false and null get mapped to 0 as a number
    G: 3undefined because undefined gets mapped to 'undefined' as a string
    H: NaN because '3' gets mapped to 3 as a number and undefined gets mapped to NaN as a number

question14:
    A: True, the string gets mapped to the number 2 and 2 is greater than 1
    B: True, both strings get mapped to numbers 2 < 12
    C: True, the string gets mapped to the number 2 and 2 == 2
    D: False, the === returns false when the 2 values are of different types
    E: False, true is mapped to the number 1 and 1 != 2
    F: True, Boolean(2) evaluates to true and then the comparison occurs true === true is true.

question15:  the === checks for strict equality, rather than converting all values to numbers like == does.  Therefore it returns false immediately if the types differ, and otherwise compares the two items based on the comparison rules of the type.

question17: the function takes in an array and another function.  It then initalizes a new array to return at the end of the function.  Next the function iterates through the values in the passed array, and at each value it, it pushes the return value of calling the passed function on the input array to the output array. Finally the output array is returned.  the return array is [func(xi) for i = 0 to length of x] where x is the passed array and func is the passed function.  In this case the output is [2,4,6].

question19: 
1
4
3
2
