import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3001", // Change this to match your client URL
    supportFile: false,
  },
});

