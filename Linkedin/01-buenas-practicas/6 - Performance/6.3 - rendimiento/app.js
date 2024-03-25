console.time('revisión')

let animales = ["perro", "gato", "pez"];
let l = animales.length;

for (let i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión')