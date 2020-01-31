
let formulario;
let Objectpresupuesto;

formulario = document.getElementById('formularioGasto');


formulario.addEventListener('submit', obtenerDatos);
window.addEventListener('DOMContentLoaded', cargarPresupuesto);


let presupuesto;
let presupuestoInicial;

function cargarPresupuesto(event) {
    presupuesto = prompt('Ingrese un presupuesto semanal');
    
    if(presupuesto == null || presupuesto == '' ){
        cargarPresupuesto();
    }
    presupuestoInicial = presupuesto
    gastoSemanal.mostrarPresupuesto(presupuestoInicial , presupuesto);

}

function obtenerDatos(event) {
    event.preventDefault();
    let presupuestoActualizado;
    let nombreGasto = formulario.querySelector('#nombreGasto').value;
    let valorGasto = formulario.querySelector('#valorGasto').value;

    let nuevoGastoSemanal = new gastoSemanal(nombreGasto,valorGasto);
    nuevoGastoSemanal.mostrarGasto();
    let nuevoPresupuesto = new presupuestoSemanal(presupuesto);
    presupuestoActualizado = nuevoPresupuesto.actualizarPresupuesto(Number(valorGasto));
    //console.log(presupuestoActualizado);
    gastoSemanal.mostrarPresupuesto(presupuestoInicial, presupuestoActualizado);
    

}


class presupuestoSemanal {
    constructor(presupuesto) {
        this.presupuestoRestante = presupuesto;
    }
    actualizarPresupuesto(gasto = 0) {
        
        presupuesto = this.presupuestoRestante - gasto;
        return presupuesto;
    } 
}

//interfaz
class gastoSemanal {
    constructor(nombreGasto, valorCosto) {
        this.nombreGasto = nombreGasto;
        this.valorCosto = valorCosto;
    }

    mostrarGasto() {
        let listado;
        let card;
        listado = document.getElementById('listadoGastos');
        card = document.createElement('div');
        card.classList.add('card');
        card.style.marginBottom = '10px';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.nombreGasto.toUpperCase()}</h5>
                    <p class="card-text">Costo : ${this.valorCosto}</p>
                </div>
            </div>
        `
        listado.appendChild(card);
    }

    //presu = presupuesto
    static mostrarPresupuesto(presuInicial, presuRestante) {
        let preInicial;
        let preRestante;
        preInicial = document.getElementById('presupuesto');
        preRestante = document.getElementById('presupuestoRes');

        if(presuRestante <= (presupuestoInicial * 0.50)){
            preRestante.style.color = '#e2b624';
            preRestante.parentElement.style.color = '#e2b624';
            if(presuRestante <= (presupuestoInicial * 0.30)){
                preRestante.style.color = 'red';
                preRestante.parentElement.style.color = 'red';
            }
        }

        preInicial.textContent = presuInicial;
        preRestante.textContent = presuRestante;

    }


}

