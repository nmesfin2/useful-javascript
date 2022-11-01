function fibonacci(num)
{
	var array = [];
    var num1=0;
    var num2=1;
    var sum;
    var i=0;
    for (i = 1; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
		array.push(sum);
    }
    return array;
}