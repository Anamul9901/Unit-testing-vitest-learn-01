import { expect, it } from "vitest";
import { encryptMessage, encryptMessagepromise } from "./async";

const message = "Programming Hero";
const secretKey = "12344321";

it("should encrypt a message", async () => {
  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (message) => {
      console.log("encryptedData-1:", message);
      resolve(message);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should also encrypt a message", async () => {
  const encryptedData = await encryptMessagepromise(message, secretKey);
  console.log("encryptedData-2:", encryptedData);
  expect(encryptedData).toBeDefined();
});
