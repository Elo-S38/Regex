// @ts-nocheck
/* Etape 1 */

const str =
  "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères.";

const exp = /\bde\b/g; // \b= delimiteur de mot
const exp1 = /de/g;

console.log(str.match(exp).length);
console.log(str.match(exp));

console.log(str.match(exp1));

/* Etape 2 */

const exp2 = /\b(de|des)\b/g;

console.log(str.match(exp2).length);
console.log(str.match(exp2));
