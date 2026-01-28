import fs from "fs";

let adatok = [];

let nevek = [
    "Anna",
    "Béla",
    "Csaba",
    "Dóra",
    "Erik",
    "Fanni",
    "Gábor",
    "Hanna",
    "István",
    "Júlia",
    "Kata",
    "László",
    "Mária",
    "Bence"
];

let vezetekNevek = [
    "Nagy",
    "Kovács",
    "Tóth",
    "Szabó",
    "Horváth",
    "Varga",
    "Kiss",
    "Molnár",
    "Németh",
    "Farkas", 
    "Balogh",
    "Papp",
    "Lakatos"
];

for (let i = 0; i < 10; i++) {
    adatok.push({nev: vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)] + " " + nevek[Math.floor(Math.random() * nevek.length)], vernyomas: `${Math.floor(Math.random() * 30) + 100}/${Math.floor(Math.random() * 20) + 60}`});
}

fs.writeFileSync("../public/test.json", JSON.stringify(adatok, null, 4), "utf-8");