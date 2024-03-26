//Estructura de Pila
class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(" <- "));
    }
}

//Ejemplo con Pokemons 
const pila = new Stack();
console.log("lista de Pokemons en Pila:")
pila.push("1.Bulbasaur");
pila.push("2.Charmander");
pila.push("3.Charizard");
pila.push("4.Lukario");
pila.push("5.Greninja");
pila.push("6.Blastoise");
pila.print(); 
console.log("Tamaño de la pila:", pila.size()); 
pila.pop();
pila.print(); 
console.log("Elemento al tope:", pila.peek()); 

//Estructura de Cola
class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(" -> "));
    }
}

//Ejemplo con Pokemons
const cola = new Queue();
console.log("lista de Pokemons en Cola:")
cola.enqueue("1.Bulbasaur");
cola.enqueue("2.Charmander");
cola.enqueue("3.Lucario");
cola.enqueue("4.Pikachu");
cola.enqueue("5.Cyndaquil");
cola.enqueue("6.Lugia");
cola.print(); 
console.log("Tamaño de la cola:", cola.size()); 
cola.dequeue();
cola.print(); 
console.log("Elemento al frente:", cola.front());
