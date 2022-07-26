import mountFail from "./example/fail";
import mountSuccess from "./example/success";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import zodLogo from "./zod.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://github.com/colinhacks/zod" target="_blank">
      <img src="${zodLogo}" class="logo vanilla" alt="Zod logo" />
    </a>
    <h1>TypeScript + Zod</h1>
    <div class="card">
      <button id="success" type="button">
        Run Success Zod
      </button>
    </div>
    <div class="card">
      <button id="fail" type="button">
        Run Error Zod
      </button>
    </div>
  </div>
`;

mountSuccess(document.querySelector<HTMLButtonElement>("#success")!);
mountFail(document.querySelector<HTMLButtonElement>("#fail")!);
