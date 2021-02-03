// Coleta informações
let input_cod = document.querySelector('#cod');
let input_ip = document.querySelector('#ip');
let button = document.querySelector('button');

// Função que cria o QR-Code
var qrcode = new QRCode(document.querySelector('#qrcode'), {
  // text: "yuri",
  width: 250,
  height: 250,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

// Cria codigo na base 64 bits
function code64(json_code) {
  // Convertendo para Base64
  var emBase64 = btoa(json_code)
  console.log()
  console.log(emBase64)
  
  return emBase64
  // Voltando para string
  // var deBase64 = atob(emBase64)
  // console.log(deBase64) 
}

// Botão gerar
button.addEventListener('click', ()=>{

  // Caso ip vazio deixa o IP padrão
  if (input_ip.value == "") {
    ip_ = "http://10.0.123.4"
  } else {
    ip_ = input_ip.value;
  }

  // Cria json dos códigos
  let json = {codigo: input_cod.value, ip: ip_}
  // Transforma o json em strin
  var json_str = JSON.stringify(json);

  console.log(json_str);
  
  let outputValue = code64(json_str);
  qrcode.makeCode(outputValue);
})