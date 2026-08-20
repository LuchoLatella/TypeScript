// 1. Interfaz de Animal
interface Animal {
    nombre: string;
    gritar(): string;
}

// 2. Clases que implementan Animal

class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Guau";
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Miau";
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Muuu";
    }
}

// 3. Función describirAnimal
function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// 4. Crear las constantes con sus tipos correspondientes

const perro: Perro = new Perro("Firulais");
const gato: Gato = new Gato("Michi");
const vaca: Vaca = new Vaca("Lola");
