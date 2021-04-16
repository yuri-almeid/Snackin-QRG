// Coleta informações
let input_cod = document.querySelector('#cod');
let input_name = document.querySelector('#name');
let input_code = document.querySelector('#code');
let input_num = document.querySelector('#num');
let input_ip = document.querySelector('#ip');
let type = document.querySelector('#tipo');
// let button = document.querySelector('button');
let btn_code = document.querySelector('#gcode');
let btn_qr = document.querySelector('#gqr');


let ip;
let cod;

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


// seleciona tipo
type.addEventListener('change', ()=>{
  
  // Define ip do tipo específico
  if (type.value == "FR") {

    ip = "10.0.0.124";

  } else if (type.value == "MM"){

    ip = "10.0.0.125";

  } else {
    ip = "Selecione uma opção"
  }

  input_ip.value = ip;

})



// Botão gerar code 
btn_code.addEventListener('click', ()=>{

  
  cod = "SN" + input_name.value.substr(0, 2).toUpperCase() + input_name.value.substr(-1).toUpperCase(); 
  cod = cod  + "00" + type.value + "00" + input_num.value;

  input_code.value = cod;

})


// Botão gerar qr
btn_qr.addEventListener('click', ()=>{

  // Pega ip selecionado ou escrito
  ip_ = "http://" + input_ip.value;

  // Cria json dos códigos
  let json = {codigo: input_code.value, ip: ip_}
  // Transforma o json em strin
  var json_str = JSON.stringify(json);

  console.log(json_str);
  
  let outputValue = code64(json_str);
  qrcode.makeCode(outputValue);

})


  




// Botão gerar
// button.addEventListener('click', ()=>{

//   // Pega ip selecionado ou escrito
//   ip_ = "http://" + input_ip.value;


//   cod = "SNC00" + type.value + input_name.value.substr(0, 2).toUpperCase() + input_name.value.substr(-2).toUpperCase(); 
//   cod = cod + "00" + input_num.value;

//   input_code.value = cod;

//   // Cria json dos códigos
//   let json = {codigo: cod, ip: ip_}
//   // Transforma o json em strin
//   var json_str = JSON.stringify(json);

//   console.log(json_str);
  
//   let outputValue = code64(json_str);
//   qrcode.makeCode(outputValue);
// })