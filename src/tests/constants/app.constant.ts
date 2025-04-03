import path from "path";
import config from "../../../playwright.config";

export const APPLICATION_URL = config.appUrl;

export function loadJsonFile(filename: string): any {
  return require(path.resolve(config.testDataDir, filename));
}

let testData = loadJsonFile("testdata.json");
// Test Data From JSON File
export const EMAIL = testData.email;
export const PASSWORD = testData.password;

