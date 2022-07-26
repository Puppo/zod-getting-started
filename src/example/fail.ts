import { get } from "./http-client";
import { User, Users } from "./user.schemas";

async function run() {
  await get("http://localhost:3001/usersError/1", User)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });

  await get("http://localhost:3001/usersError", Users)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
}

export default function (button: HTMLButtonElement) {
  button.addEventListener("click", run);
}
