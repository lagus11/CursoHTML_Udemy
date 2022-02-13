

const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }//for}
    document.getElementById('personas').innerHTML = texto;
}//mostrarPersonas

function agregarPersona(){
    console.log('si entra');
    const forma = document.getElementById('forma');
    let nombre = forma['nombre'];
    let apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona)
        mostrarPersonas();
        nombre.value = '';
        apellido.value = '';
    }//if
    else{
        alert('No hay informacion que agregar');
    }//else
}//agregarPersona