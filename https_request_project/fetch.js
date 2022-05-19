//Load all users 

/* Getting the button element from the HTML file. */
const btn1 = document.getElementById("btn1")
/* Listening for a click event on the button and then calling the getUsers function. */
btn.addEventListener("click",getUsers)

function getUsers(e) {
    /* It prevents the default action of the event from happening. */
    e.preventDefault();

    /* Fetching the users.json file and then returning the response as a json object. */
    fetch('users.json').then(function(response){
        return response.json();
    })
    /* Looping through the data and then outputting the data to the HTML file. */
    .then(function(data){
        let output = "";
            data.forEach(function(user){
                output += ` <hr>
                <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                <li>Email: ${user.email}</li>
                </ul>`
            })

          /* Outputting the data to the HTML file. */
            document.getElementById('users').innerHTML = output;
    })
}