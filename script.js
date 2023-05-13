const text = document.querySelector(".text");
const message = document.querySelector(".message");

function btnEncrypt() {
  const encryptedText = encrypt(text.value);
  message.value = encryptedText;
  text.value = "";
}

function encrypt(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptedString = encryptedString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }

  return encryptedString;
}

function btnDecrypt() {
  const decryptText = decrypt(message.value);
  text.value = decryptText;
  message.value = "";
}

function decrypt(decryptString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decryptString = decryptString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptString.includes(matrixCode[i][1])) {
      decryptString = decryptString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }

  return decryptString;

  console.log("decrypt")
}

function copy() {
  if (message.value !== "") {
    message.select();
    message.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(message.value);

    alert(message.value + " foi copiado!");

    message.value = "";
  }
}