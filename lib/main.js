"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
function run() {
    try {
        const fullVersion = core.getInput("version", { required: true });
        const versionRegex = /\d+\.\d+\.\d+/;
        const result = versionRegex.exec(fullVersion);
        if (result) {
            core.setOutput("version", result[0]);
        }
        else {
            core.setFailed("Unable to extract a version label from the input.");
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
run();
