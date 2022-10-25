// ***** 6 SEMANA *****

const raca1 = {
  raca: "Husky Siberiano",
  idade: 14,
  temPedigree: true,
  coloracaoPelos: ["branco", "cinza", "preto"],
  imagem: "./img/Husky Siberiano.jpg",
};
const raca2 = {
  raca: "Rough Collie",
  idade: 15,
  temPedigree: true,
  coloracaoPelos: ["amarelo", "branco", "preto"],
  imagem: "./img/Rough Collie.jpg",
};

const raca3 = {
  raca: "Vira Lata SRD",
  idade: 14,
  temPedigree: false,
  coloracaoPelos: ["caramelo", "preto", "marrom"],
  imagem: "./img/Vira Lata SRD.jpg",
};

const raca4 = {
  raca: "Pastor Alemão",
  idade: 13,
  temPedigree: true,
  coloracaoPelos: ["caramelo", "preto", "cinza"],
  imagem: "./img/Pastor Alemão.jpg",
};

const raca5 = {
  raca: "Dachshund",
  idade: 16,
  temPedigree: true,
  coloracaoPelos: ["preto", "marrom", "branco"],
  imagem: "./img/Dachshund.jpg",
};

const raca6 = {
  raca: "Samoieda",
  idade: 14,
  temPedigree: true,
  coloracaoPelos: ["branco", "creme", "rajado"],
  imagem: "./img/Samoieda.jpg",
};


const racas = [];


if (raca1.temPedigree) {
  racas.push(raca1);
} else {
  console.log(`O item informado ${raca1.raca}, não foi adicionado.`);
}

if (raca2.temPedigree) {
  racas.push(raca2);
} else {
  console.log(`O item informado ${raca2.raca}, não foi adicionado.`);
}

if (raca3.temPedigree) {
  racas.push(raca3);
} else {
  console.log(`O item informado ${raca3.raca}, não foi adicionado.`);
}

if (raca4.temPedigree) {
  racas.push(raca4);
} else {
  console.log(`O item informado ${raca4.raca}, não foi adicionado.`);
}

if (raca5.temPedigree) {
  racas.push(raca5);
} else {
  console.log(`O item informado ${raca5.raca}, não foi adicionado.`);
}

if (raca6.temPedigree) {
  racas.push(raca6);
} else {
  console.log(`O item informado ${raca6.raca}, não foi adicionado.`);
}


for (const propriedade in racas) {
    racas[propriedade].coloracaoPelos = racas[propriedade].coloracaoPelos.toString(); 
    console.log(racas[propriedade].coloracaoPelos);
}

console.log(racas);


function recebaUmaString(objeto) {
  let umRelatorio =""
  for (const i in objeto){
    umRelatorio=`${umRelatorio}\n${[i]}: ${objeto[i]}`    
  }
  return umRelatorio
}
recebaUmaString(raca1)


function busca(array, string) {
    for (let i in array) {
        if (array[i].raca === string) {
            return array[i]
        }
    }
  return alert(`Nenhum item ${string} não foi encontrado`)
}

console.log(busca(racas, "Rough Collie"));

 // Array com todos os objetos.
  const todasAsRacas = [raca1, raca2, raca3, raca4, raca5, raca6];

//Função que vai retornar todos os obejtos do array como string
function objetoToString(array){
  console.log("-----------------------");
  for(const objeto of array){
    for(const prop in objeto){
      console.log(`${[prop]}: ${objeto[prop]}`);
    }
    console.log(("---------------------"));
  }
}
objetoToString(todasAsRacas);

// **********Dom*****************

/*1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.

Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista interação entre HTML e CSS e o Script que criamos. A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir do nosso código JS. Para isso, devemos manipular os objetos do HTML e do CSS utilizando o DOM.*/

  
  function criandoObjetoHtml(array) {
    let container = document.getElementsByClassName("container")[0]
    container.innerHTML = ""
    let card = ""
    array.map(element => {
      card = `<section class = "card">
        <img src = "${element.imagem}">
        <ul>
          <li>Raca: ${element.raca.toUpperCase()}</li>
          <li>Tempo de vida: ${element.idade} anos</li>
          <li>Tem Pedigree: ${element.temPedigree}</li>
          <li>Coloracao dos Pelos: ${element.coloracaoPelos}</li>
        </ul>
      </section>`
      container.innerHTML += card;
    });
  }
  criandoObjetoHtml(todasAsRacas);


/*2. Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um campo no input e apertar o botão, apenas os itens com nome igual ao da busca sejam renderizados na tela.*/

//Função de buscar no array de objeto
function buscarArrayPelaRaca(array, nome){
  const racas = array.filter((item) => item.raca.toLowerCase().includes(nome.toLowerCase())); 

  if(racas.length){
    return racas;
    }else{
      return array;
    }
}

// Função de limpeza do campo de pesquisa

function limparInput(){
  document.getElementById("input").value= "";
}

//Função que pega o valor do input, chama a função que busca os objetos.

function buscarRaca(event){
  event.preventDefault()


  const input = document.getElementById("input").value;
  const filtroRaca = buscarArrayPelaRaca(todasAsRacas, input);

  if (input === "") {
    alert("Digite um nome de uma raça!");
    criandoObjetoHtml(todasAsRacas);
  }else{
    console.log(filtroRaca);
    criandoObjetoHtml(filtroRaca)
  }
  console.log(filtroRaca.includes(input));
  limparInput()
}

//Ativar o botão ENTER do teclado com o botão do campo de buscar.

const input = document.getElementById("input");
input.addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("botao-de-buscar").click();
  }
});

//Calculo da Média

let soma = 0;
soma = ((todasAsRacas[0].idade)+(todasAsRacas[1].idade)+ (todasAsRacas[2].idade)+ (todasAsRacas[3].idade)+ (todasAsRacas[4].idade) + (todasAsRacas[5].idade))/(todasAsRacas.length);
console.log(`A média do tempo de vida entre as Raças é de : ${soma.toFixed(2)} anos.`); 