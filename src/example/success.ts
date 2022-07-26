import { get } from "./http-client";
import { User, Users } from "./user.schemas";

async function run() {
  const user: User = await fetch("http://localhost:3001/users/1")
    .then(response => response.json())
    .then(json => User.parse(json));

  console.log(user);

  try {
    const users = await get("http://localhost:3001/users", Users);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

export default function (button: HTMLButtonElement) {
  button.addEventListener("click", run);
}
