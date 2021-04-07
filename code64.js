// Uma string qualquer
var string = "DevPleno"
// Convertendo para Base64
var emBase64 = btoa(string)
console.log(emBase64) // Saída: "RGV2UGxlbm8="
// Voltando para string
var deBase64 = atob(emBase64)
console.log(deBase64) // Outputs: "DevPleno"