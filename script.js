// ***** 3 SEMANA *****

const raca1 = {
  raca: "Husky Siberiano",
  idade: 14,
  temPedigree: true,
  coloracaoPelos: ["branco", "cinza", "preto"],
};
const raca2 = {
  raca: "Rough Collie",
  idade: 15,
  temPedigree: true,
  coloracaoPelos: ["amarelo", "branco", "preto"],
};

const raca3 = {
  raca: "Vira Lata",
  idade: 14,
  temPedigree3: false,
  coloracaoPelos: ["caramelo", "preto", "marrom"],
};

const raca4 = {
  raca: "Pastor Alemão",
  idade: 13,
  temPedigree: true,
  coloracaoPelos: ["caramelo", "preto", "cinza"],
};

const raca5 = {
  raca: "Dachshund",
  idade: 16,
  temPedigree: true,
  coloracaoPelos: ["preto", "marrom", "branco"],
};

const raca6 = {
  raca: "Samoieda",
  idade: 14,
  temPedigree: true,
  coloracaoPelos: ["branco", "creme", "rajado"],
};


const racas = [];


if (raca1.temPedigree) {
  racas.push(raca1);
} else {
  alert(`O item informado ${raca1.raca}, não foi adicionado.`);
}

if (raca2.temPedigree) {
  racas.push(raca2);
} else {
  alert(`O item informado ${raca2.raca}, não foi adicionado.`);
}

if (raca3.temPedigree) {
  racas.push(raca3);
} else {
  alert(`O item informado ${raca3.raca}, não foi adicionado.`);
}

if (raca4.temPedigree) {
  racas.push(raca4);
} else {
  alert(`O item informado ${raca4.raca}, não foi adicionado.`);
}

if (raca5.temPedigree) {
  racas.push(raca5);
} else {
  alert(`O item informado ${raca5.raca}, não foi adicionado.`);
}

if (raca6.temPedigree) {
  racas.push(raca6);
} else {
  alert(`O item informado ${raca6.raca}, não foi adicionado.`);
}


for (const propriedade in racas) {
    racas[propriedade].coloracaoPelos = racas[propriedade].coloracaoPelos.toString(); 
    console.log(racas[propriedade].coloracaoPelos);
}

console.log(racas);

/*3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.*/

function recebaUmaString(objeto) {
  let umRelatorio =""
  for (const i in objeto){
    umRelatorio=`${umRelatorio}\n${[i]}: ${objeto[i]}`    
  }
  return umRelatorio
}
recebaUmaString(raca1)

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function busca(array, string) {
    for (let i in array) {
        if (array[i].raca === string) {
            return array[i]
        }
    }
  return alert(`Nenhum item ${string} não foi encontrado`)
}

console.log(busca(racas, "Rough Collie"));



