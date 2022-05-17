//Load all users

/* Creating a variable called btn and assigning it to the button element with the id of btn. */
const btn = document.getElementById("btn")
/* Listening for a click event on the button and then calling the getUsers function. */
btn.addEventListener("click",getUsers);

function getUsers(e){
    e.preventDefault();

    /* Creating a new instance of the XMLHttpRequest object. */
    const http = new XMLHttpRequest();
    /* Opening a connection to the server and sending a GET request to the users.json file. */
    http.open("GET","users.json", true);

    /* Listening for the response from the server. */
    http.onload = function() {
        if(this.status === 200){
           /* Logging the response from the server. */
            // console.log(this.responseText);

            /* Parsing the JSON data into a JavaScript object. */
            const users = JSON.parse(this.responseText);
            

            let output = "";
            users.forEach(function(user) {
                output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `;
            });

            /* Taking the output variable and putting it into the HTML element with the id of users. */
            document.getElementById("users").innerHTML = output;
        }
    }

    /* Sending the request to the server. */
    http.send()
}