# Étape 1 — Afficher l'identité de l'élève

```
const Name = "William";
const Surname = "Dupont";
const BirthDay = "1986-04-22";

const SurnameMaj = Surname.toUpperCase();

console.log(Name, SurnameMaj);
console.log(BirthDay);
```

infos : je ne reviens pas dessus jusqu'à la fin. Erreur de ma part, je n'est pas creer de variable student a ce moment là. (pourquoi ? j'ai mal lu)

# Étape 2 — Afficher les notes en Histoire.

```
//ma fonction notes() contient, histoire et les notes de william.

function notes() {
const text = "HISTOIRE";
const resultats = [2, 4, 3, 7, 9, 5];

//on return les notes de william en colonne.

console.log(resultats.join("\n"));
return [text, resultats];
}

//on fait apparaitre note() dans la console.

const [text, resultats] = notes();
```

# Étape 3 — Refacto: rendre une fonction paramétrable

```
const matieres = {
HISTOIRE: [2, 4, 3, 7, 9, 5],
};

console.log("HISTOIRE : \n" + matieres.HISTOIRE.join("\n"));
```

infos : je n'arrivais pas afficher (avec node) mon histoire avec ma fonction note (), alors je l'ai passer en declarateur de variables (const).

# Étape 4 — Afficher la liste des notes de chaque matière

```
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

for (const matiere of matieres) {
  console.log(matiere + " :");
  console.log(matieres[matiere].join("\n") + "\n");
}
```

-infos : compliquer a trouver \n qui veux dire saut a la ligne
donc .join("\n") = join rassemble tous les elements dans une grande chaine de caractere et le /n indique qu'il faut un saut a la ligne pour chaque éléments.

# Étape 5 — Refacto: boucler sur les clés d'un objet (wait, what ?)

```
const list_matieres = Object.keys(matieres);
for (const matiere of list_matieres) {
  console.log(matiere + " :");
  console.log(matieres[matiere].join("\n") + "\n");
}
```

infos : J'ai définit Object.keys(matieres) dans list_matieres pour pouvoir remplacer matieres dans mon for(..of..).

# Étape 6 — Refacto: en faire un projet "npm-compatible"

-Dans le Terminal : npm init -y

-Modifier dans le package.json :

```
  "scripts": {
    "dev": "node index.js"
  },
```

-Dans le Terminal : npm run dev

# Étape 7 — Refacto: séparer données, outils et code d'exécution

-Dans le index.js avant de séparer les données :

```
const Name = "William";
const Surname = "Dupont";
const BirthDay = "1986-04-22";

const SurnameMaj = Surname.toUpperCase();

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

console.log(Name, SurnameMaj);
console.log(BirthDay);

const list_matieres = Object.keys(matieres);
for (const matiere of list_matieres) {
  console.log(matiere + " :");
  console.log(matieres[matiere].join("\n") + "\n");
}
```

-Pour les séparer, il faut y établir une fonction qui iras dans tools.js.

-Par la suite les information du student sera deplacer dans Student.js (sans declaration, car student de student.js est devenu une declaraction de variable, alors il faudra depuis le index.js faire un import student pour récupérer les données de l'élève)

-Dans index.js, on garde les console.log(), et importont ce qu'il y a dans les dossiers student.json et tools.js.

-Nous avons pas eu les assez de cours pour comprendre les export/import avec js, et json nous ne l'avons pas encore vu.

-A refaire, je relirais meiux les consignes, car j'ai passer pas mal de temps a ne pas les comprendre.
Je me suis un peu aider de IA pour ce qui concerne la structuration de mon code, j'avais tout ce qu'il me fallait mais a bien replacer dan smon code pour mque ça marce était compliquer.
