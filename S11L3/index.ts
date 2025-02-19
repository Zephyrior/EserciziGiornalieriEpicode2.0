// 1) Quali sono i tipi primitivi principali in TypeScript?
console.log("Eser 1:");
console.log("I tipi primitivi di TypeScript sono String, Number, Boolean, Undefined, Null, Any, Never.");

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
console.log("Eser 2:");
let myName: string = "Mark";
let myAge: number = 31;
let isStudying: boolean = true;
console.log("il mio nome è", myName, "e la mia età è", myAge);

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
console.log("Eser 3:");
const greet = (name: string) => {
  return "Ciao " + name;
};
console.log(greet("Mark"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
console.log("Eser 4:");
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(2, 1));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
console.log("Eser 5:");
const prezzoIVAto = (prezzo: number): number => prezzo + prezzo * 0.22;
console.log(prezzoIVAto(100));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
console.log("Eser 6:");
const strConc = (str1: string, str2: string): number => str1.concat(str2).length;
console.log(strConc("One", "Two"));

// 7) Cos'è un Type Union e come si scrive?
console.log("Eser 7:");
console.log("I Type Union sono tipi composti dall'unione di più insieme e si scrive mettendo due tipi separati da un pipe String | Number");

// 8) Crea una variabile che possa contenere un numero, null o undefined.
console.log("Eser 8:");
type varRand = number | string | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
console.log("Eser 9:");
type daysofWeek = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
console.log("Eser 10:");
const numbers: number[] = [1, 2, 3];
const numbers1: [number, number, number] = [1, 2, 3];
console.log(numbers.map((i) => typeof i));
console.log(numbers1.map((i) => typeof i));

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
console.log("Eser 11:");
const myTupla: [string, string, string, number, number] = ["mi chiamo", "Mark", "ho", 3, 0];
myTupla.map((x) => console.log(x));

// 12) Qual è la differenza tra type e interface?
console.log("Eser 12:");
console.log("Il type serve a contenere il tipo di una variabile mentre l'interface descrive la struttura di un oggetto");

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
console.log("Eser 13:");
interface sonoIo {
  firstname: string;
  lastname: string;
  age: number;
}
const ioSono: sonoIo = {
  firstname: "Mark",
  lastname: "Tembs",
  age: 31,
};
console.log({ ioSono });
console.log("Mi chiamo", ioSono.firstname, "di cognome", ioSono.lastname, "ed ho", ioSono.age, "anni");
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

console.log("Eser 14:");
interface utente {
  email: string;
  telefono?: number | undefined;
}

const user: utente = {
  email: "mark.tembs@epicode.com",
};
console.log({ user });
console.log(user.email);

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
console.log("Eser 15:");
const studente: [string, number] = ["Mark", 90];
console.log([studente]);
console.log("Mi chiamo", studente[0], "ed ho", studente[1], "di voto");

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
console.log("Eser 16:");
interface Veicolo {
  brand: string;
  modello: string;
}

interface Auto extends Veicolo {
  porte: number;
  posti: number;
  cavalli: string;
}
const myAuto: Auto = {
  porte: 4,
  posti: 5,
  cavalli: "110bhp",
  brand: "MINI",
  modello: "Mini Cooper D",
};

console.log({ myAuto });
console.log(
  "I have a car and it's brand is",
  myAuto.modello,
  "from",
  myAuto.brand,
  "house.",
  "It has",
  myAuto.porte,
  "doors and",
  myAuto.posti,
  "seats.",
  "Its horsepower can go up to",
  myAuto.cavalli
);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
console.log("Eser 17:");
console.log("Vedi l'esempio all'esercizio 16");

// 18) Cosa sono i Generics in TypeScript?
console.log("Eser 18:");
console.log("I Generics sono una specie di parametri ma di natura tipi primitivi che permette ad una tipizzazione flessibile");
// 19) È possibile avere più tipi generici in un'interfaccia?
console.log("Eser 19:");
console.log("Sì.");
// 20) Crea un'interfaccia generica per una risposta API.
console.log("Eser 20:");
interface films<x> {
  name: string;
  release_date: string | number;
  duration: number;
  genre: x;
}
const Alien: films<string[]> = {
  name: "Alien",
  release_date: 296438400000,
  duration: 116,
  genre: ["Sci-Fi", "Horror"],
};
const Thunderbolts: films<string> = {
  name: "Thunderbolts",
  release_date: "TBA",
  duration: 120,
  genre: "Adventure",
};
console.log({ Alien });
console.log(
  "Il film",
  Alien.name,
  "è uscito il",
  new Date(Alien.release_date).toLocaleDateString(),
  "ed ha una durata di",
  Alien.duration,
  "minuti.",
  "I suoi generi sono:",
  Alien.genre[0],
  "ed",
  Alien.genre[1]
);
