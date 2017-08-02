module.exports=Bowling

function Bowling (rolls)
{
	 this.score= function()
	{
  	var initialState=
	  {
		shootNumber:1,
		pinsRemaining:10,
		isStrike:false,
		isSpare:false,
		total:0,
		roundNumber:1
  
	  }
	 
	  for(i=0;i<rolls.length;i++)
	  {	
	  	
	  	initialState.pinsRemaining-=rolls[i];

	  	if(rolls[i%2])
	  	{
	  		initialState.pinsRemaining=10
	  	}
	  
	  }	


	  return initialState.pinsRemaining
	}		
  
}