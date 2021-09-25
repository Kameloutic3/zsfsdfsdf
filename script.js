let c = function(d){
    return document.querySelector(d);
}

let button = c('button');
let button2 = c('.segundo');
let item1 = c('.item1');
let input_valor = c('input');
let num1 = 0;
let item2 = c('.item2');
let item3 = c('.item3');
let item4 = c('.item4');
let item5 = c('.item5');
let item6 = c('.item6');

item1.addEventListener('click', ()=>{
    document.querySelector('.item1').setAttribute('data-name', 0.05);
    let pegar = c('.item1');
    pegar.classList.add('selecionado');
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);

    if(item1.classList == 'selecionado'){
        console.log(true);
    }
    
    item2.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item5.classList.remove('selecionado');
    item6.classList.remove('selecionado');
});

item2.addEventListener('click', ()=>{
    document.querySelector('.item2').setAttribute('data-name', 0.10);
    let pegar = c('.item2');
    pegar.classList.add('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);
    item1.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item5.classList.remove('selecionado');
    item6.classList.remove('selecionado');
});

item3.addEventListener('click', ()=>{
    document.querySelector('.item3').setAttribute('data-name', 0.15);
    let pegar = c('.item3');
    pegar.classList.add('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);
    item1.classList.remove('selecionado');
    item2.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item5.classList.remove('selecionado');
    item6.classList.remove('selecionado');
});

item4.addEventListener('click', ()=>{
    document.querySelector('.item4').setAttribute('data-name', 0.25);
    let pegar = c('.item4');
    pegar.classList.add('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item3').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);
    item1.classList.remove('selecionado');
    item2.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item5.classList.remove('selecionado');
    item6.classList.remove('selecionado');
});

item5.addEventListener('click', ()=>{
    document.querySelector('.item5').setAttribute('data-name', 0.50);
    let pegar = c('.item5');
    pegar.classList.add('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item3').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);
    item1.classList.remove('selecionado');
    item2.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item6.classList.remove('selecionado');
});

item6.addEventListener('click', ()=>{
    document.querySelector('.item6').setAttribute('data-name', 1);
    let pegar = c('.item6');
    pegar.classList.add('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item3').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    item1.classList.remove('selecionado');
    item2.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item5.classList.remove('selecionado');
});

button.addEventListener('click', function(){
    let input_valor = c('.input2').value;
    let porcentagem;
    let input1 = c('.input1').value;
    let mostrar;
    let item1 = document.querySelector('.item1').getAttribute('data-name');
    let item2 = document.querySelector('.item2').getAttribute('data-name');
    let item3 = document.querySelector('.item3').getAttribute('data-name');
    let item4 = document.querySelector('.item4').getAttribute('data-name');
    let item5 = document.querySelector('.item5').getAttribute('data-name');
    let item6 = document.querySelector('.item6').getAttribute('data-name');

    if(input_valor.length <= 0 ){
        mostrar = c('.price-visible').innerHTML = "Valor inválido";
    }else{
        if(item1 > 0){
            porcentagem = document.querySelector('.item1').getAttribute('data-name');
        }else if(item2 > 0){
            porcentagem = document.querySelector('.item2').getAttribute('data-name');
        }else if(item3 > 0){
            porcentagem = document.querySelector('.item3').getAttribute('data-name');
        }else if(item4 > 0){
            porcentagem = document.querySelector('.item4').getAttribute('data-name');
        }else if(item5 > 0){
            porcentagem = document.querySelector('.item5').getAttribute('data-name');
        }else{
            if(item6 > 0){
                porcentagem = document.querySelector('.item6').getAttribute('data-name');
            }
        }
            
        mostrar = c('.price-visible').innerHTML = Number(input_valor) * porcentagem;
    }

    if(porcentagem  <= 0 || porcentagem == undefined && input1.length > 0){
        let percentagem2;
        percentagem2 = Number(input1)/100;
        console.log(percentagem2)
        let colocar = c('.price-visible').innerHTML = Number(input_valor) * Number(percentagem2);
    }else{
         c('.input1').value = '';
    }
    

});

button2.addEventListener('click', ()=>{
    let mostrar = c('.price-visible').innerHTML = 0;
    input_valor = c('.input2').value = 0;
    item1.classList.remove('selecionado');
    item2.classList.remove('selecionado');
    item3.classList.remove('selecionado');
    item4.classList.remove('selecionado');
    item5.classList.remove('selecionado');
    item6.classList.remove('selecionado');
    document.querySelector('.item1').setAttribute('data-name', 0);
    document.querySelector('.item2').setAttribute('data-name', 0);
    document.querySelector('.item4').setAttribute('data-name', 0);
    document.querySelector('.item3').setAttribute('data-name', 0);
    document.querySelector('.item5').setAttribute('data-name', 0);
    document.querySelector('.item6').setAttribute('data-name', 0);
});


