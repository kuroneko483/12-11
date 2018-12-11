function twush()
{
	var a=document.getElementById('value').value;
	a=Number(a);
	if ((a>=25)==true)
	{
		var b=a-25;
		document.getElementById('change').innerHTML="Thank you for Purchasing here's your change: "+b;
		alert('enjoy your coke')
	}
	else
	{
		var b=25-a;
		alert('Your amount is not Sufficient!!');
		document.getElementById('change').innerHTML="Your money needs "+b+" more to avail this one";
	}
}
function biri()
{
	var a=document.getElementById('value').value;
	a=Number(a);
	if ((a>=30)==true)
	{
		var b=a-30;
		document.getElementById('change').innerHTML="Thank you for Purchasing here's your change: "+b;
		alert('enjoy your coke')
	}
	else
	{
		var b=30-a;
		alert('Your amount is not Sufficient!!');
		document.getElementById('change').innerHTML="Your money needs "+b+" more to avail this one";
	}
}
function shwing	()
{
	var a=document.getElementById('value').value;
	a=Number(a);
	if ((a>=50)==true)
	{
		var b=a-50;
		document.getElementById('change').innerHTML="Thank you for Purchasing here's your change: "+b;
		alert('enjoy your coke')
	}
	else
	{
		var b=50-a;
		alert('Your amount is not Sufficient!!');
		document.getElementById('change').innerHTML="Your money needs "+b+" more to avail this one";
	}
}