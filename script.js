const body = document.querySelector('body');
const centralizer = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let keyboardRow;

centralizer.classList.add('centralizer');
body.appendChild(centralizer);

textarea.classList.add('textarea');
textarea.setAttribute('row', 5);
textarea.setAttribute('cols', 50);
centralizer.appendChild(textarea);

keyboard.classList.add('keyboard');
centralizer.appendChild(keyboard);

for (let i = 0; i < 5; i += 1) {
  keyboardRow = document.createElement('div');
  keyboardRow.classList.add('row');
  keyboardRow.id = `row${i}`;
  keyboard.appendChild(keyboardRow);
}

const allRows = document.querySelectorAll('.row');

// eslint-disable-next-line no-restricted-syntax
for (let i = 0; i < allRows.length; i += 1) {
  if (i === 0) {
    for (let j = 0; j < 14; j += 1) {
      const button = document.createElement('div');
      const textbutton = document.createElement('span');
      button.classList.add('key');
      textbutton.innerHTML = 'a';
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else if (i === 1) {
    for (let j = 0; j < 15; j += 1) {
      const button = document.createElement('div');
      const textbutton = document.createElement('span');
      button.classList.add('key');
      textbutton.innerHTML = 'a';
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else if (i === 2 || i === 3) {
    for (let j = 0; j < 13; j += 1) {
      const button = document.createElement('div');
      const textbutton = document.createElement('span');
      button.classList.add('key');
      textbutton.innerHTML = 'a';
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else {
    for (let j = 0; j < 9; j += 1) {
      const button = document.createElement('div');
      const textbutton = document.createElement('span');
      button.classList.add('key');
      textbutton.innerHTML = 'a';
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  }
}
