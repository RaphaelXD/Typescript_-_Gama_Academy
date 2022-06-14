let animal: string[] = [
    'gato',
    'raposa',
    'coruja'
]

function exibeAnimal(animal: string[]) {
    return `Os meus Top 3 animais são: ${animal.join(', ')}`
}

console.log(exibeAnimal(animal));