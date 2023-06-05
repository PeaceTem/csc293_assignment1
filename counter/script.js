
let counter = document.getElementById('count');
for (let i = 1; i <= 100; i++) {
  if (i != 100){
    counter.innerHTML += `<span>${i},</span>`;
  }
  else {
  counter.innerHTML += `<span>${i}.</span>`;
  }
}

