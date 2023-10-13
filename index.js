// Return the sum of two numbers
let sum=addition(3,2)
console.log(sum);
let sum1=addition1(-3,-6)
console.log(sum1);
let sum2=addition2(7,3)
console.log(sum2);
function addition(x,y)
{
        console.log("Addition function");
        return x+y;
}
function addition1(x,y)
{
        console.log("Addition1 function");
        return x+y;
}
function addition2(x,y)
{
        console.log("Addition2 function");
        return x+y;
}


// Convert minutes into seconds
let minutes=seconds(5)
let minutes1=seconds(3)
let minutes2=seconds(2)
function seconds(x)
{
        return x*60;
}
console.log("Convert minutes into seconds" + " " + minutes + "," + minutes1 + "," + minutes2);


// Area of triangle
let area=triangleArea(3,2)
let area1=triangleArea(7,4)
let area2=triangleArea(10,10)
function triangleArea(x,y)
{
        return x*y/2;
}
console.log("Area of Triangle" + " " + area + "," + area1 + "," + area2);


// Return the next numbers
let add=additionNumber(0)
let add1=additionNumber(9)
let add2=additionNumber(-3)
function additionNumber(x)
{
        return x+1;
}
console.log("Return the next number" + " " + add + "," + add1 + "," + add2);


// Return the remainder
let one=remainder(1,3)
let two=remainder(3,4)
let three=remainder(-9,45)
let four=remainder(5,5)
function remainder(x,y)
{
        return x%y;
}
console.log("Return the remainder" + " " + one + "," + two + "," + three + "," + four);

