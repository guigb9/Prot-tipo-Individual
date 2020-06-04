var contador = 0
function func_0(){
    contador++
    document.getElementById("conteudo").style.width = '0%'
    document.getElementById("conteudo1").style.width = '100%'
    if(contador == 2){
        document.getElementById("conteudo").style.width = '100%'
        document.getElementById("conteudo1").style.width = '0%'
        contador = 0
    }

}
