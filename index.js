// Add your code here
function submitData(userName, userEmail){
  const baseURL = "http://localhost:3000";
  const basePath = "/users";

  const dataObject = {
    name: userName,
    email: userEmail
  }

  const configurationObject = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify(dataObject)
  };

  const destinationURL = baseURL + basePath;

  return fetch (destinationURL, configurationObject)
  .then((response) => response.json())
  .then((data) => {
    let newId = data.id;
    document.body.innerHTML = newId;
  })
  .catch((error) => {
    document.body.innerHTML = error.message;
  })
}