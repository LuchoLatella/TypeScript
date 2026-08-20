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

// 5. Ejecutar describirAnimal para cada animal

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);


// 6. Enum DiasSemana

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}


// 7. Variable que puede ser número o string

let dato: number | string = "Messi";

dato = 10;


// 8. Interfaz Fila y clase genérica

interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}


// 9. Crear una fila para números, strings y animales

const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();

const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();

const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();


// 10. Agregar elementos a las filas

// Fila de números
filaNumeros.agregar(10);
filaNumeros.agregar(20);
filaNumeros.agregar(30);

// Fila de strings
filaStrings.agregar("Hola");
filaStrings.agregar("TypeScript");
filaStrings.agregar("Desarrollo Web");

// Fila de animales
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);


// Remover un elemento de cada fila

filaNumeros.remover();
filaStrings.remover();
filaAnimales.remover();