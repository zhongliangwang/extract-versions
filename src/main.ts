import * as core from "@actions/core";

async function run() {
  try {
    const fullVersion = core.getInput("version", { required: true });
    const versionRegex = /\d+\.\d+\.\d+/;
    const result = versionRegex.exec(fullVersion);
    if (result) {
      core.setOutput("version", result[0]);
    } else {
      core.setFailed("Unable to extract a version label from the input.");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
