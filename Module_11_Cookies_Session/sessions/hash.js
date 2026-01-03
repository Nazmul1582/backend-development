const crypto = require("crypto")

const data = "Md. Nazmul Hasan"

const hashed_value = crypto.createHash("sha256").update(data).digest("hex")
console.log(hashed_value) // 6a21655a1055f329fa1bca14198706db5ea6a6376324fcc13082196e8690f78d
