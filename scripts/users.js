function handleResponse(response){
  return  response.json();
}

const handleData = (data) => {
  console.log(data);

  let tableLines = "";
  for(let index = 0; index < data.length; index ++){
    const user = data[index];
    const tableLine = `
      <tr>
          <td>${user.name}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.id}</td>
          <td>${user.username}</td>
      </tr>
      `;
      tableLines = tableLines +tableLine;
  }
  document.getElementById("users-body").innerHTML = tableLines;
  };

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then( (data) => handleData(data)); 
}