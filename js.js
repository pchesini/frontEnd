
function addElement () {

  // obtener el elemento div con id = "acerca"

  const existDiv = document.getElementById("card");

  // crear un nuevo elemento div 

  const newDiv = document.createElement("div");

  // agregar el nuevo elemento div existente

  existDiv.appendChild(newDiv);
 // add the newly created element and its content into the DOM

 const currentDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);
} 

function editarParrafo(){
  document.getElementById("editarTexto").style.display = "block";
  let texto = document.getElementById("textoAcerca").innerText;
  console.log(texto);
};
//asigna un nuevo valor para el texto

function miFuncion1(valor){
  document.getElementById("textoAcerca").innerText = valor;
};
function logMessage(msj){
  console.log(msj + "<br>");
};
//controla si se presiono un enter.
let textarea= document.getElementById("editarTexto");
textarea.addEventListener ('keyup',(e) => {
  logMessage('Key "${e.key}" released [event: keyup]');
  if (e.key=="Enter"){
    document.getElementById('editarTexto').style.display = 'none';
  }
})
//carga el contenido en un archivo de texto y lo carga
function showFile(input){
  let file= input.file[0];
  alert('nombre: ${file.name}');
  alert('ultima modificacion: ${file.lastModifified}');

  let reader= new FileReader();
  reader.readAsText(file);
  reader.onload=function(){
    console.log(reader.result);
    document.getElementById('textoAcerca').innerText=reader.result;
  };
  reader.onerror=function(){
    console.log(reader.error);
  };
}