/* Getting the button element from the HTML file. */
const btn = document.getElementById("btn")
/* Adding an event listener to the button element. */
btn.addEventListener("click",getUsers)

function getUsers(e) {
    e.preventDefault();

    /* Fetching the users.json file and then converting it to a json object. */
    fetch("users.json").then(function(response){return response.json();})
    .then(function(data){let output = "";
            data.forEach(function(user) {
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

            /* Setting the innerHTML of the element with the id "users" to the value of the variable
            output. */
            document.getElementById("users").innerHTML = output;
        })
}