console.log('Starting app');
 //ce msg "inside callback" on CMD kaytla3 après 2seconde
//wait 2seconde
 setTimeout(() =>
{
	console.log('Inside of callback');
},2000);

 setTimeout(() =>
{
	console.log('Try 0seconde');
},0);

console.log('Finishing up');