//load all users

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers)

//Create function Get users 
function getUsers(e){
    e.preventDefault();

    const http = new XMLHttpRequest(); // the new should be used for es6

    /* Opening the file users.json and getting the data from it. */
    http.open("GET","users.json",true);

    http.onload = function() {
        if(this.status === 200){
            const users = JSON.parse(this.responseText);
            /* Creating a variable called output and setting it to an empty string. Then it is looping
            through the users array and adding the user information to the output variable. */
            let output = "";
            users.forEach(function(user){
                output += ` <hr>
                <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                <li>Email: ${user.email}</li>
                </ul>`
            })

            /* Getting the element with the id of users and setting the innerHTML to the output
            variable. */
            document.getElementById('users').innerHTML = output;
        }
    }

    /* Sending the request to the server. */
    http.send();
}