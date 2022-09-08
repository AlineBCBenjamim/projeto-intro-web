// ***** 1 SEMANA *****

//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

//const raca; 
//const idade; 
//const temPedigree;

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const raca1 = "Husky Siberiano";
const idade1 = 14;
const temPedigree1= true;
const coloracaoPelos1= ["branco", "cinza", "preto"];

const raca2 = "Rough Collie";
const idade2 = 15;
const temPedigree2 = true;
const coloracaoPelos2= ["amarelo", "branco", "preto"];

const raca3 = "Vira Lata";
const idade3 = 14;
const temPedigree3 = false;
const coloracaoPelos3 = ["caramelo", "preto", "marrom"];

const raca4 = "Pastor Alemão";
const idade4 = 13;
const temPedigree4 = true
const coloracaoPelos4 = ["caramelo", "preto", "cinza"];

const raca5 = "Dachshund";
const idade5 = 16;
const temPedigree5 = true;
const coloracaoPelos5 = ["preto", "marrom", "branco"];

const raca6 = "Samoieda";
const idade6 = 14;
const temPedigree6 = true;
const coloracaoPelos6= ["branco", "creme", "rajado"];


const media = (idade1 + idade2 + idade3 + idade4 + idade5 + idade6)/6;
console.log("Valor da Média", media);


const temPedigree = temPedigree1 && temPedigree2 && temPedigree3 &&temPedigree4 && temPedigree5 && temPedigree6; 
console.log(temPedigree);


console.log(`Raça: ${raca1.toUpperCase()}, Idade: ${idade1}, Tem Pedigree: ${temPedigree1}, Coloração dos pelos: ${coloracaoPelos1}`);

console.log(`Raça: ${raca2.toUpperCase()}, Idade: ${idade2}, Tem Pedigree: ${temPedigree2}, Coloração dos pelos: ${coloracaoPelos2}`);

console.log(`Raça: ${raca3.toUpperCase()}, Idade: ${idade3}, Tem Pedigree: ${temPedigree3}, Coloração dos pelos: ${coloracaoPelos3}`);

console.log(`Raça: ${raca4.toUpperCase()}, Idade: ${idade4}, Tem Pedigree: ${temPedigree4}, Coloração dos pelos: ${coloracaoPelos4}`);

console.log(`Raça: ${raca5.toUpperCase()}, Idade: ${idade5}, Tem Pedigree: ${temPedigree5}, Coloração dos pelos: ${coloracaoPelos5}`);

console.log(`Raça: ${raca6.toUpperCase()}, Idade: ${idade6}, Tem Pedigree: ${temPedigree6}, Coloração dos pelos: ${coloracaoPelos6}`);




