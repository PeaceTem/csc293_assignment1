
const formBox = document.getElementById('form-box');

formBox.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name');
  let nameError = document.getElementById('name-error');
  let output = document.getElementById('output');

  if( name.value.trim() == ''){
    nameError.textContent = "Name cannot be empty!";
    return;
  } else {
    nameError.textContent = "";
  }
  formBox.style.display = "none";
  output.textContent = `Hello world, ${name.value.trim()}`;

})
