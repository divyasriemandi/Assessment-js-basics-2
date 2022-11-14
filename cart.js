///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const initialValue = 0;
const summedPrice = cart.reduce((previousValue,currentValue) => previousValue + currentValue.price, initialValue);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    
    taxamount = tax * cartTotal;
    let finalCartTotal = cartTotal + taxamount - couponValue;
    return finalCartTotal;
}

let
cartTotal = 500;
couponValue = 10;
tax = 0.05;

let finalcartTotal = calcFinalPrice(cartTotal,couponValue,tax);
console.log(finalcartTotal);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
  var cartPage = {
  custBOD: 'jan22/1991', (date of birth to you for promotional usage and to offer specials for royal customers)
  favoriteItem: 'chicken',(for royal customers as well)
  dessert: 'icecream',
}
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
var customer = {
custBOD: 'jan22/1991', 
favoriteItem: 'chicken',
dessert: 'icecream',
}
let custBOD = customer,
favoriteItem = customer,
dessert = customer;
console.log(customer.dessert);