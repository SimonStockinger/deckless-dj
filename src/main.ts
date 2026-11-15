import { invoke } from "@tauri-apps/api/core";

const app = document.querySelector<HTMLDivElement>("#app")!;
invoke<string>("ping").then((reply) => {
  app.textContent = `Apollon backend: ${reply}`;
});
