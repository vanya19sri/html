console.log("between -10 & 20");
for(var i=-10;i<20;i++)
{
	console.log(i);
}

console.log("even between 10 & 40");
for(var i=10;i<40;i++)
{
	if(i%2 == 0)
	{
		console.log(i);
	}
}

console.log("odd between 300 and 333");
for(var i=300;i<333;i++)
{
	if(i%2 != 0)
	{
		console.log(i);
	}
}

console.log("div by 5&3 between 5&50");
for(var i=5;i<50;i++)
{
	if(i%3 == 0 && i%5 == 0)
	{
		console.log(i);
	}
}