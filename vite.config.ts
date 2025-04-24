import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: fs.readFileSync("C:/Users/DELL/certs/key.pem"),
  //     cert: fs.readFileSync("C:/Users/DELL/certs/cert.pem"),
  //   },
  // },
  plugins: [react(), svgr()],
});
