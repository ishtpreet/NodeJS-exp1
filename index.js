var rect = require('./rectangle');
function solveReactangle(l,b)
{
    console.log("Solving for "+l+"and "+b);
    if(l<=0 || b<=0)
    {
        console.log("Enter correct value of the dimensions");
    }
    else
    {
        console.log("Area is"+rect.area(l,b)+" and perimeter is "+rect.perimeter(l,b));
    }
}
solveReactangle(5,4);
solveReactangle(0,3);
solveReactangle(2,2);