let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrPessoas = []

function cadastrar()
{

    let pessoa = {
        nome : document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        preço: document.getElementById('preço').value,
    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas)

    ImprimirDados()

    //let imc = calculaImc(peso, altura);

    
    
    //classific(imc)
}

function calculaPreço(peso, preço)
{
    return peso*preço;
}


function ImprimirDados(){
    console.log('---------------------- ')
    div.innerHTML = ``


    

    for (let i = 0; i < arrPessoas.length; i++){
    
        div.innerHTML += `
    <tr>
      <td>${arrPessoas[i].nome} </td>
      <td> ${arrPessoas[i].categoria}</td>
      <td> ${arrPessoas[i].peso}</td>
      <td> ${arrPessoas[i].preço}</td>
      <td> ${calculaPreço(arrPessoas[i].peso, arrPessoas[i].preço).toFixed(2)}</td>
    </tr> 
    `

}
}

btn.addEventListener('click', cadastrar)