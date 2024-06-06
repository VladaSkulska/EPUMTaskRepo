const users = [
  {
    name: "Маруся",
  },
  {
    name: "Катерина",
  },
  {
    name: "Єгор",
  },
  {
    name: "Андрій",
  },
  {
    name: "Владислав",
  },
];

function createUserList(users) {
  const userList = document.getElementById("userList");

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listItem.addEventListener("click", () => {
      alert(`Hello, ${user.name}`);
    });
    userList.appendChild(listItem);
  });
}

createUserList(users);
