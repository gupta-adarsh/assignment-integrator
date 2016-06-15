
function NthFibonacci(n)
{
	if(n < 1)
		return -1
	
	if(n >=1 && n <=2)
		return 1
	
	var n1=1
	var n2=1
	
	console.log(n1)
	console.log(n2)
	
	for(var i=3; i <=n ;i++)
	{
		temp = n2
		n2 = n1 + n2
		n1 = temp
		
		console.log(n2)
	}
	return n2
}

var number=5;
console.log("Fibonacci number "+number+ " is " + NthFibonacci(number))

