const numero = document.querySelector('#numero');
const opcion = document.querySelector('#opcion');

const formulario = document.querySelector(".formulario");

const pResultado = document.querySelector('.resultado h1');

const regNum = /^[0-9]*$/gm;

formulario.addEventListener('submit', muestraRes);

function sumOddFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return (fibo.filter(n => n%2 != 0)).reduce(total);
}

function sumEvenFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return (fibo.filter(n => n%2 == 0)).reduce(total);
}

function sumAllFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo.reduce(function(acc,curr){
    return acc + curr;
  });
}

function allFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo;
}

function allOddFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo.filter(n => n%2 != 0);
}

function allEvenFibs(num) {
  let fibo = [];
  const total = (acc,current) => acc + current;
  if(fibo.length<2){
    fibo = [0,1];
  }
  while((fibo[fibo.length - 1] + fibo[fibo.length - 2]) <= num){
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo.filter(n => n%2 == 0);
}

function muestraRes(evnt){
  evnt.preventDefault();
  if(regNum.test(numero.value)){
    //Si tiene forma de numero
    if(opcion.value == "odd"){
      pResultado.innerHTML = "The summ of all odd numbers in the sequence is <br>" + sumOddFibs(parseInt(numero.value));
    }
    else if(opcion.value == "even"){
      pResultado.innerHTML = "The summ of all even numbers in the sequence is <br>" + sumEvenFibs(parseInt(numero.value));
    }
    else if(opcion.value == "add"){
      pResultado.innerHTML = "The summ of all numbers in the sequence is <br>" + sumAllFibs(parseInt(numero.value));
    }
    else if(opcion.value == "sequence"){
      pResultado.innerHTML = "The sequence is <br>" + allFibs(parseInt(numero.value));
    }
    else if(opcion.value == "sequence_odd"){
      pResultado.innerHTML = "The odd numbers in the sequence are <br>" + allOddFibs(parseInt(numero.value));
    }
    else if(opcion.value == "sequence_even"){
      pResultado.innerHTML = "The even numbers in the sequence are <br>" + allEvenFibs(parseInt(numero.value));
    }
  }
  else{
    pResultado.innerHTML = "Woops, not a number";
  }
}