let SeuVotoPara = document.querySelector('.top_part_left-1 span');
let cargo = document.querySelector('.top_part_left-2 span');
let descricao = document.querySelector('.top_part_left-4');
let aviso = document.querySelector('.bottom_part');
let lateral = document.querySelector('.top_part_right');
let num_lg = document.querySelector('top_part_left-3 span');
let numeros = document.querySelector('.top_part_left-3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    
    let numeroHTML = '';
    numero = '';
    votoBranco = false;

    for(let i=0;i<etapa.numeros;i++) {
        if (i === 0) {
            numeroHTML += '<div class="numero pisca"></div>';
        } else {
            numeroHTML += '<div class="numero"></div>';
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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) =>{ 
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if (candidato.length > 0) {
        candidato = candidato [0];

        SeuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        aviso.style.display = 'block';
                
        let fotosHtml = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class="top_part_right-img small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHtml += `<div class="top_part_right-img"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
            
        }
        
        lateral.innerHTML = fotosHtml;   
    } else {
        SeuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso_grande pisca">VOTO NULO</div>';
    }
}

function clicou(n) {
   elNumber = document.querySelector('.numero.pisca');
   if (elNumber !== null) {
    elNumber.innerHTML = n;
    numero = `${numero}${n}`;

    elNumber.classList.remove('pisca');
    if (elNumber.nextElementSibling !== null) {
        elNumber.nextElementSibling.classList.add('pisca');
    } else {
        atualizaInterface();
    }
    
   }

}

function branco() {
    numero = '';
    votoBranco = true;
    
    SeuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso_grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';
}

function corrige() {
    comecarEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if (votoBranco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    } else if (numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.screen').innerHTML ='<div class="aviso_gigante pisca">FIM</div>';
            console.log(votos);
        }
    }

}

comecarEtapa ();