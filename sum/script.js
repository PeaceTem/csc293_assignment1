const formBox = document.getElementById('sum-form');

formBox.addEventListener('submit', (e) => {
  e.preventDefault();
  let number_1 = document.getElementById('id_number_1');
  let number_2 = document.getElementById('id_number_2');
  let number_3 = document.getElementById('id_number_3');
  let number_4 = document.getElementById('id_number_4');
  let number_5 = document.getElementById('id_number_5');
  let output = document.getElementById('output');
  let sum = parseInt(number_1.value) + parseInt(number_2.value) + parseInt(number_3.value) + parseInt(number_4.value) + parseInt(number_5.value);
  console.log(number_1);
  output.textContent = `Sum: ${sum}`;
})