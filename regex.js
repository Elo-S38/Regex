// @ts-nocheck
/* Etape 1 */

const str =
  "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères.";

const exp = /\bde\b/g; // \b= delimiteur de mot
const exp1 = /de/g;
const exp2 = /de/;

console.log(str.match(exp).length);
console.log(str.match(exp));
console.log(str.match(exp1).length);
console.log(str.match(exp1));
console.log(str.match(exp2)); //s'arrete à la premiere correspondance (index 51)
console.log(str.search(exp2)); // pour trouver directement l'index

/* Etape 2 */

const exp3 = /\b(de|des)\b/g; // avec l'operator "ou"

console.log(str.match(exp3).length);
console.log(str.match(exp3));

/* Etape 3 */
const exp4 = /\b(d|l)es?\b/g;
// presence de soit d soit l
// presence de e obligatoirement
// presence en + de s si il y a

console.log(str.match(exp4)); // ['des', 'de', 'de', 'les']
console.log(str.match(exp4).length); // 4

/* Etape 4 */
const exp5 = /[a-zA-Z]/g; //presence minuscule et majuscule

console.log(str.match(exp5).length); // ça ne compte pas les accents et les caracteres comme .,espace...

/* Etape 5 */

const exp6 = /[^\w\s]/g; //recherche tous ce qui n'est pas ([^]) lettre, chiffre (w) et espace (s)
console.log(str.match(exp6)); // ["'", "é", "è", "é", ".", "é"]
console.log(str.match(exp6).length);
