// preciso de uma função que receba como argumento o mês a ser visualizado e o ano e retorne o
// número de dias criando um objeto de uma classe do tipo falta
// a classe falta vai ter uma 
// preciso de uma variável que me conte que mês e ano é da data atual
arrayFaltas = []
const divDias = document.querySelector(".dias")
class Falta{
    constructor(numFalta,numDoDia){
        this.numFalta = numFalta // 0 vai ser faltou | 1 veio | 2 dia não chegou
        this.numDoDia = numDoDia
        this.cor = "#292929" 
    }
    ConfigurarCorDaFalta(){
        if(this.numFalta == 0){
          this.cor = "#942613"  // pessoa faltou
        } else if(this.numFalta == 1){
          this.cor = "#3ead69"  // veio
        } else if(this.numFalta == 2){
            this.cor = "#292929" // dia não chegou
        }
    }

}





function numeroDeDias(ano,mes,dia){
 const ultimoDia = new Date(ano,mes,dia).getDate() // mes começa em 0 // dia 0 significa último dia do mês anterior
 return ultimoDia
}

for(i=1; i<= numeroDeDias(2024,1,0); i++){
    // backend teria que enviar o número
    const faltaObj = new Falta(1,i)
    faltaObj.ConfigurarCorDaFalta()
    arrayFaltas.push(faltaObj)
}

function conectarNumeroDeDiasUi(){
    for(i=0;i < arrayFaltas.length; i++){
        const div = document.createElement("div")
        div.classList.add("divDia")
        const p = document.createElement("p")
        p.innerText = arrayFaltas[i].numDoDia
        console.log(p.innerText)
        div.append(p)
        div.style.backgroundColor = arrayFaltas[i].cor
        divDias.appendChild(div)
      //  <div style={{dianaochegou? #432432: pessoa faltou? #423 : #432}}><div/>
    }
    
}

// testar agora

conectarNumeroDeDiasUi()
console.log(arrayFaltas)
