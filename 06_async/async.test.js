import { expect, it } from "vitest";
import { encryptMessage, encryptMessagepromise } from "./async";
import CryptoJS from "crypto-js";

const message = "Programming Hero";
const secretKey = "12344321";

it("should encrypt a message", async () => {
  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (message) => {
      //   console.log("encryptedData-1:", message);
      resolve(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

// for promise example
it("should also encrypt the message", async () => {
  const encryptedData = await encryptMessagepromise(message, secretKey);
  //   console.log("encryptedData-2:", encryptedData);
  expect(encryptedData).toBeDefined();
});

it("should encrypt the message correctly", async () => {
  const encryptedData = await encryptMessagepromise(message, secretKey);
  //   console.log("encryptedData-2:", encryptedData);
  expect(encryptedData).toBeDefined();

  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
    CryptoJS.enc.Utf8
  );
  //   console.log("decryptedData-2:", decryptedData);
  expect(decryptedData).toBe(message);
});
