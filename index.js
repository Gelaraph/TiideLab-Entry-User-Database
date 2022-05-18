// 1. API Url
const url = "https://jsonplaceholder.typicode.com/users";

// 2.  Fetch users from the API Url
function fetchUsers() {
  // 2.1 make use of the browser fech API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 2.2 passing the user under data to renderUsers function
      renderUsers(data);
    });
}

//3. Render the users to the DOM
function renderUsers(usersData) {
  console.log(usersData);
  const ul = document.getElementById("user-li-container");
  console.log(ul);

  // Render an li tage for eacch of the users
  usersData.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index + 1}.</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username} </span>
  `;

    //3.2  Append the current user li tag the the UL tag
    ul.appendChild(li);
  });
}

//4. Add a search function to the DOM
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-li-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li"); //arrary of all the li tags []

  // console.log(usersList[2]);

  // Loop through all the users and render the ones that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}

// Calling the fetch function
fetchUsers();
