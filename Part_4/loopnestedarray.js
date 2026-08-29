//nested loop with nested array

let heroNames = [["Ironman","Blackpanther","Doctor Strange"],["Superman", "Batman", "Wonder Woman"]];

//loop 

for(let i = 0; i <heroNames.length;i++){
    console.log(heroNames[i], heroNames.length);
    for(let j = 0; j <heroNames[i].length;j++){
        console.log(heroNames[i][j]);
    }
}