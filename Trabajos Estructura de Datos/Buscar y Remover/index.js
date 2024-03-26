//Creamos un nodo

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    insertFirst(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Índice inválido");
            return;
        }
        if (index === 0) {
            this.insertFirst(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log("Índice inválido.");
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    }

    searchIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("Índice inválido.");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    printAll() {
        if (this.isEmpty()) {
            console.log("La lista está vacía");

        } else {
            let current = this.head;
            let result = "";
            while (current) {
                result += current.data + ' -> ';
                current = current.next;
            }
            console.log(result + ' null')
        }

    }
    //Metodo de busqueda por valor
    buscar_valor(data) {
        let current = this.head;

        while (current && current.data !== data) {
            current = current.next;
        }

        return current ? current.data : null;
    }
    //Metodo para remover por valor
    remover_valor(data) {
        let current = this.head;
        let prev = null;
    
        while (current) {
          if (current.data === data) {
            if (prev) {
              prev.next = current.next;
            } else {
              // Si es el primer nodo, actualiza la cabeza de la lista
              this.head = current.next;
            }
            this.size--;
            return data; // Retornando el valor del nodo removido
          }
          prev = current;
          current = current.next;
        }
    
        return null; // No se encontró el valor
      }
    

}

let lista = new LinkedList();
console.log(lista.isEmpty());
lista.printAll();
lista.insertFirst("Jose");
lista.printAll();
lista.insertLast("Pepito");
lista.printAll();
lista.insertFirst("Manolo");
lista.printAll()
lista.insertLast("Barack Obama");
lista.printAll();
lista.insert("IWEJHGDWSIKJUGH", 3);
lista.printAll();
lista.removeIndex(3);
lista.printAll();
lista.insert({
    nombre: "George Bush",
    categoria: "Terrorista"
}, 2)
console.log(lista.searchIndex(2));
const encontrado = lista.buscar_valor("Jose");
console.log(encontrado ? encontrado : "Nodo no encontrado");
lista.remover_valor("Manolo");
console.log(lista.printAll());
