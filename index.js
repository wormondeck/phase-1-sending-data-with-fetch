function submitData(name, email) {
const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
    }),
};
    return fetch("http://localhost:3000/users", configObject)
    .then(response => response.json())
    .then(data => {
        // Retrieve the new ID value from the response data
        const newId = data.id;
  
        // Append the new ID to the DOM
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
      })
    .catch(error => {
        // Handle the error
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}
submitData("Steve", "steve@steve.com");