let nameHero = ""
let experienceLevel = ""

if(experienceLevel === "Ferro") {
    console.log("Seu XP é menor do que 1.000")   
}
else if(experienceLevel === "Bronze") {
    console.log("Seu XP é entre 1.001 e 2000")
}
else if(experienceLevel === "Prata") {
    console.log("Seu XP é entre 2.001 e 5.000")
}
else if(experienceLevel === "Ouro") {
    console.log("Seu XP é entre 5.001 e 7.000")
}
else if(experienceLevel === "Platina") {
    console.log("Seu XP é entre 7.001 e 8.000")
}
else if(experienceLevel === "Ascendente") {
    console.log("Seu XP é entre 8.001 e 9.000")
}
else if(experienceLevel === "Imortal") {
    console.log("Seu XP é entre 9.001 e 10.000")
}
else if(experienceLevel === "Radiante") {
    console.log("Seu XP é maior do que 10.001")
}

//Mensagem de Saída

console.log("A Heroína de nome **{nameHero}** está no nível de **{experienceLevel}**")