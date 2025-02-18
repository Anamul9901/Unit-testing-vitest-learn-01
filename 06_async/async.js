import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
  // aita ekta js libray. er maddhome key deye konu message k encript & descript kora jai
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

export function encryptMessagepromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message"));
      }
    }, 2000);
  });
}

const message = {
  name: "Anamul",
  password: "1141mul",
};
const secretKey = "secret_key_1141";

// encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//   console.log(encryptedMessage);

//     const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
//     console.log("de-", decryptedMessage.toString(CryptoJS.enc.Utf8));
// });

// encryptMessagepromise(JSON.stringify(message), secretKey).then(
//   (encryptMessage) => console.log(encryptMessage)
// );
