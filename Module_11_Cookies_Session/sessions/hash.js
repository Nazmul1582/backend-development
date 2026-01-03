const crypto = require("crypto")

const data = "Md. Nazmul Hasan"

// const hashed_value = crypto.createHash("sha256").update(data).digest("hex")
// console.log(hashed_value) // 6a21655a1055f329fa1bca14198706db5ea6a6376324fcc13082196e8690f78d

const hashed_value = crypto
  .createHmac("sha256", "13082196e8690f78d")
  .update(data)
  .digest("hex")
console.log(hashed_value) // 05215bf7c9b861abb8c79005e319734284a3e97305427b8f8ca5f5a2f0ce61f5
