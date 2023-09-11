let events = [];
const eventName= document.querySelector('#eventName');
const eventDate= document.querySelector('#eventDate');
const buttonAdd= document.querySelector('#bAdd');
const eventsContainer = document.querySelector('#eventsContainer');

document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault();
    addEvent();
});

function addEvent(){
    //Por si faltó llenar algún campo
    if(eventName.value=="" || eventDate.value==""){
        return; //---> Este return nos saca de la función en caso de faltar algpun valor
    }
    //Por si se crea un evento con fecha igual o anterior al día que se crea
    if(dateDiff(eventDate.vale)<0){
        return;//---> Este return nos saca de la función en caso de que la fecha no sea posterior al día en que se crea el evento
    }

    const newEvent = {
        id:(Math.random()*100).toString(36).slice(3),
        name: eventName.value,
        date:eventDate.value,

    }

    //Agregamos el nuevo evento al inicio del arreglo
    events.unshift(newEvent);
    
    //Limpiamos los campos
    eventName.value="";

    //Redibujamos el div que contiene los eventos
    renderEvents();
    
}   
    

function dateDiff(fecha){
    const date1 = new Date(fecha); //Fecha del evento
    const date2 = new Date(); //Fecha del día de hoy
    const difference = date1.getTime() - date2.getTime(); //Restamos la diferencia entre la fecha dele vento y la del día de hoy y está dada en milisegundos
    const days = Math.ceil(difference/(1000*3600*24));
    return days;
}

function renderEvents(){
    const eventsHTML = events.map(event => {
        return `
            <div class='event'>
                <div class='days'>
                    <span class='days-number'>${dateDiff(event.date)} </span>
                    <span class='days-text'>días</span>
                </div>
                <div class='event-name'>
                    ${event.date}
                </div>
                <div class='actions' data-id='${event.id}'>
                    <button class='Delete'>Eliminar</button>
                </div>
            </div>
        `;

        
    });
    //console.log(eventsHTML);
    eventsContainer.innerHTML = eventsHTML;
}


/* 
let x=Math.random()*100;
console.log(x);
console.log(x.toString(36));
console.log(x.toString(36).slice(3));
71.58116358814614
1z.kx6rnt03r
kx6rnt03r
*/