var getUser = (id, callback) => {
   var user = {
	   id: id,
	   name: 'Vikram'
   };
 

setTimeout(() => {
	  callback(user);
      },3000); //i will not access to userObject until 3seconde passe
};

getUser(31, (userObject) => {
	console.log(userObject);
});//user comes back the argument function