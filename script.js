let SeuVotoPara = document.querySelector('.top_part_left-1 span');
let cargo = document.querySelector('.top_part_left-2 span');
let descricao = document.querySelector('.top_part_left-4');
let aviso = document.querySelector('.bottom_part');
let lateral = document.querySelector('.top_part_right');
let numeros = document.querySelector('.top_part_left-3');

let etapaAtual = 0;
let sqnumber = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    
    let numeroHTML = '';

    for(let i=0;i<etapa.numeros;i++) {
        if (i === 0) {
            numeroHTML += '<div class="sq pisca"></div>'
        } else {
            numeroHTML += '<div class="sq"></div>';
        }
    }

    SeuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function atualizaInterface() {
    alert('Finalizou de digitar o voto!')
}

function clicou(n) {
    let elNumber = document.querySelector('.sq.pisca');
    if (elNumber !== null) {
        elNumber.innerHTML = n;
        sqnumber = `${sqnumber}${n}`;

        elNumber.classList.remove('.pisca');  
        if(elNumber.nextElementSibling !== null) {
            elNumber.nextElementSibling.classList.add('.pisca'); 
        } else {
            atualizaInterface();    
        }
         
    }

}

function branco() {
    alert("Clicou em BRANCO!");
}

function corrige() {
    alert("Clicou em CORRIGE!");
}

function confirma() {
    alert("Clicou em CONFIRMA!");
}

comecarEtapa ();