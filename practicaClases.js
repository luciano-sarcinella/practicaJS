let usuario1 = new Usuario('Luciano', 'Sarcinella', totalLibros,totalMascotas);
let totalLibros = [{nombre: 'Rayuela', autor: 'Julio Cortazar'}];
let totalMascotas = ['Codi', 'Pia'];

class Usuario  {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName (){
        return `Que tal? Mi nombre es ${this.nombre} ${this.apellido}.`
    };

    addMascota(mascota){
        this.mascotas.push(mascotas);
    };

    countMascotas(){
        return this.mascotas.length;
    };
    
    addBook(nombre,autor){
        this.libros.push(nombre,autor);
    };
    
    getBookNames(){
        return this.libros.map(libro => libro.nombre);
    }
};

console.log(usuario.getFullName());
usuario.addMascota("Ambar");
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());
usuario.addBook('El Psicoanalista', 'John Katzenbach');
console.log(usuario.getBookNames());