function divide()
{
	var val1=document.getElementById('amount').value;
	val1=Number(val1);
	if (val1%100==0) 
	{
		alert('Acceptable!!! '+val1+' is Divisible by 100!')
	}
	else
	{
		alert('The Value you input is not acceptable!!')
	}
}