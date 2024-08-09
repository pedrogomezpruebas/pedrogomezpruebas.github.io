function agregar(valor){
    document.getElementById('pantalla').value+= valor;
}
function borrar(){
    document.getElementById('pantalla').value = '';
}
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const res = eval(valorPantalla);
    document.getElementById('pantalla').value = 6;
    alert("la sexta es inevitable");
}