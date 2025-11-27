window.addEventListener('load', () => {
  // ocultar splash
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(()=> splash.classList.add('hidden'), 700);
    setTimeout(()=> splash.remove(), 1200);
  }
  const a = 5;                 
  const b = "7";              
  const c = a + Number(b);     
  console.log('Ejemplo tipos/operadores', a, typeof a, b, typeof b, 'a + Number(b)=', c);

setupTimerControls();
});

document.getElementById('calcBtn').addEventListener('click', () => {
  // uso de valores y conversión de tipos
  const A = Number(document.getElementById('numA').value) || 0;
  const B = Number(document.getElementById('numB').value) || 0;
  const op = document.getElementById('op').value;

  let result;
  // estructura de control (switch)
  switch(op){
    case '+': result = A + B; break;
    case '-': result = A - B; break;
    case '*': result = A * B; break;
    case '/': result = B !== 0 ? A / B : 'Error: división por 0'; break;
    case '%': result = A % B; break;
    default: result = 'Operador desconocido';
  }
  document.getElementById('calcResult').textContent = 'Resultado: ' + result;
});
const factorial = n => {
  // ejemplo de función recursiva
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
document.getElementById('factorialBtn').addEventListener('click', () => {
  const res = factorial(6); // 720
  document.getElementById('factResult').textContent = '6! = ' + res;
});
document.getElementById('animalsBtn').addEventListener('click', () => {
  const animalsList = document.getElementById('animalsList');
  animalsList.innerHTML = '';
  // usar objetos y clases
  const a1 = new Llama('Lolo');
  const a2 = new Dog('Firulais');
  const a3 = new Mammal('Criatura');
  [a1,a2,a3].forEach(a => {
    const li = document.createElement('li');
    li.textContent = a.speak() + ' — ' + (a.reveal ? a.reveal() : '(no reveal)');
    animalsList.appendChild(li);
  })});