module.exports=Bowling

function Bowling (rolls) 
{
this.score= function()
{
	var total=0;
	for(i=0;i<rolls.length;i++)	
	{
		total+=rolls[i];
	}
	return total
}
}