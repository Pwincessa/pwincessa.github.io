var objPeople = [
	{ 
		username: "princess",
		password: "oviawe"
	},
	{ 
		username: "matt",
		password: "academy" 
	},
	{ 
		username: "chris",
		password: "forever"
	}

];
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

function getInfo() {
    const usernameValue = username.value.trim();
	const passwordValue =  password.value.trim();

	for(var i = 0; i < objPeople.length; i++) {
	
		if(username === objPeople[i].username && password === objPeople[i].password) {
			console.log(username + " is logged in!!!");
			
			return; 
		}
	}
	console.log("incorrect username or password");
}