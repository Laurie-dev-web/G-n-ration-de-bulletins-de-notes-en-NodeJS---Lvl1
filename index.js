const Name = "William";
const Surname = "Dupont";
const BirthDay = "1986-04-22";

const SurnameMaj = Surname.toUpperCase();

console.log(Name, SurnameMaj);
console.log(BirthDay);

const matieres = {
  histoire: [2, 4, 3, 7, 9, 5],
  mathematiques: [12, 11, 13, 15],
  anglais: [15, 14, 18, 19, 10],
  francais: [8, 11, 12, 10, 0, 12, 12.5],
  arts: [17, 16],
  musique: [15, 16, 14, 18, 17],
  physique: [18, 16, 15, 16],
  sport: [13],
};

const list_matieres = Object.keys(matieres);

for (const matiere of list_matieres) {
  console.log(matiere + " :");
  console.log(matieres[matiere].join("\n") + "\n");
}
