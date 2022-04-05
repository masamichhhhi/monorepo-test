import * as cp from "child_process";

import { loadEnvConfig } from "@next/env";
import gulp from "gulp";

loadEnvConfig(process.env.PWD ?? "");

gulp.task("generate-api-client", (done) => {
  cp.spawnSync(
    "openapi-generator-cli",
    [
      "generate",
      "-g",
      "typescript-axios",
      "-i",
      `${process.env.API_JSON_URL ?? ""}`,
      "-o",
      "./openapi-generator",
      "-c",
      "./openapiConfig.yml",
    ],
    {
      stdio: [process.stdin, process.stdout, process.stderr],
      shell: true,
    }
  );
  done();
});
