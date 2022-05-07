const body = document.querySelector('body');
const centralizer = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');

let keyboardRow;
let textbutton;

centralizer.classList.add('centralizer');
body.appendChild(centralizer);

textarea.classList.add('textarea');
textarea.setAttribute('row', 5);
textarea.setAttribute('cols', 50);
textarea.setAttribute('id', 'textarea');
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
      textbutton = document.createElement('span');
      button.classList.add('key');
      button.id = `key${i}`;
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else if (i === 1) {
    for (let j = 0; j < 15; j += 1) {
      const button = document.createElement('div');
      textbutton = document.createElement('span');
      button.classList.add('key');
      button.id = `key${i}`;
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else if (i === 2 || i === 3) {
    for (let j = 0; j < 13; j += 1) {
      const button = document.createElement('div');
      textbutton = document.createElement('span');
      button.classList.add('key');
      button.id = `key${i}`;
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  } else {
    for (let j = 0; j < 9; j += 1) {
      const button = document.createElement('div');
      textbutton = document.createElement('span');
      button.classList.add('key');
      button.id = `key${i}`;
      button.appendChild(textbutton);
      allRows[i].appendChild(button);
    }
  }
}

const row0 = [{
  className: 'Backquote',
  eng: {
    caps: '`',
    caseDown: '`',
    caseUp: '~',
    shiftCaps: '~',
  },
  rus: {
    caps: 'Ё',
    caseDown: 'ё',
    caseUp: 'Ё',
    shiftCaps: 'ё',
  },
}, {
  className: 'Digit1',
  eng: {
    caps: '1',
    caseDown: '1',
    caseUp: '!',
    shiftCaps: '!',
  },
  rus: {
    caps: '1',
    caseDown: '1',
    caseUp: '!',
    shiftCaps: '!',
  },
}, {
  className: 'Digit2',
  eng: {
    caps: '2',
    caseDown: '2',
    caseUp: '@',
    shiftCaps: '@',
  },
  rus: {
    caps: '2',
    caseDown: '2',
    caseUp: '"',
    shiftCaps: '"',
  },
}, {
  className: 'Digit3',
  eng: {
    caps: '3',
    caseDown: '3',
    caseUp: '#',
    shiftCaps: '#',
  },
  rus: {
    caps: '3',
    caseDown: '3',
    caseUp: '№',
    shiftCaps: '№',
  },
}, {
  className: 'Digit4',
  eng: {
    caps: '4',
    caseDown: '4',
    caseUp: '$',
    shiftCaps: '$',
  },
  rus: {
    caps: '4',
    caseDown: '4',
    caseUp: ';',
    shiftCaps: ';',
  },
}, {
  className: 'Digit5',
  eng: {
    caps: '5',
    caseDown: '5',
    caseUp: '%',
    shiftCaps: '%',
  },
  rus: {
    caps: '5',
    caseDown: '5',
    caseUp: '%',
    shiftCaps: '%',
  },
}, {
  className: 'Digit6',
  eng: {
    caps: '6',
    caseDown: '6',
    caseUp: '^',
    shiftCaps: '^',
  },
  rus: {
    caps: '6',
    caseDown: '6',
    caseUp: ':',
    shiftCaps: ':',
  },
}, {
  className: 'Digit7',
  eng: {
    caps: '7',
    caseDown: '7',
    caseUp: '&',
    shiftCaps: '&',
  },
  rus: {
    caps: '7',
    caseDown: '7',
    caseUp: '?',
    shiftCaps: '?',
  },
}, {
  className: 'Digit8',
  eng: {
    caps: '8',
    caseDown: '8',
    caseUp: '*',
    shiftCaps: '*',
  },
  rus: {
    caps: '8',
    caseDown: '8',
    caseUp: '*',
    shiftCaps: '*',
  },
}, {
  className: 'Digit9',
  eng: {
    caps: '9',
    caseDown: '9',
    caseUp: '(',
    shiftCaps: '(',
  },
  rus: {
    caps: '9',
    caseDown: '9',
    caseUp: '(',
    shiftCaps: '(',
  },
}, {
  className: 'Digit0',
  eng: {
    caps: '0',
    caseDown: '0',
    caseUp: ')',
    shiftCaps: ')',
  },
  rus: {
    caps: '0',
    caseDown: '0',
    caseUp: ')',
    shiftCaps: ')',
  },
}, {
  className: 'Minus',
  eng: {
    caps: '-',
    caseDown: '-',
    caseUp: '_',
    shiftCaps: '_',
  },
  rus: {
    caps: '-',
    caseDown: '-',
    caseUp: '_',
    shiftCaps: '_',
  },
}, {
  className: 'Equal',
  eng: {
    caps: '=',
    caseDown: '=',
    caseUp: '+',
    shiftCaps: '+',
  },
  rus: {
    caps: '=',
    caseDown: '=',
    caseUp: '+',
    shiftCaps: '+',
  },
}, {
  className: 'Backspace',
  eng: {
    caseDown: 'Backspace',
    caseUp: 'Backspace',
  },
  rus: {
    caseDown: 'Backspace',
    caseUp: 'Backspace',
  },
}];

const keysRow0 = document.querySelectorAll('#key0');

for (let i = 0; i < keysRow0.length; i += 1) {
  keysRow0[i].lastChild.innerHTML = row0[i].eng.caseDown;
  keysRow0[i].classList.add(row0[i].className);
}

const row1 = [{
  className: 'Tab',
  eng: {
    caseDown: 'Tab',
    caseUp: 'Tab',
  },
  rus: {
    caseDown: 'Tab',
    caseUp: 'Tab',
  },
}, {
  className: 'KeyQ',
  eng: {
    caseDown: 'q',
    caseUp: 'Q',
  },
  rus: {
    caseDown: 'й',
    caseUp: 'Й',
  },
}, {
  className: 'KeyW',
  eng: {
    caseDown: 'w',
    caseUp: 'W',
  },
  rus: {
    caseDown: 'ц',
    caseUp: 'Ц',
  },
}, {
  className: 'KeyE',
  eng: {
    caseDown: 'e',
    caseUp: 'E',
  },
  rus: {
    caseDown: 'у',
    caseUp: 'У',
  },
}, {
  className: 'KeyR',
  eng: {
    caseDown: 'r',
    caseUp: 'R',
  },
  rus: {
    caseDown: 'к',
    caseUp: 'К',
  },
}, {
  className: 'KeyT',
  eng: {
    caseDown: 't',
    caseUp: 'T',
  },
  rus: {
    caseDown: 'е',
    caseUp: 'Е',
  },
}, {
  className: 'KeyY',
  eng: {
    caseDown: 'y',
    caseUp: 'Y',
  },
  rus: {
    caseDown: 'н',
    caseUp: 'Н',
  },
}, {
  className: 'KeyU',
  eng: {
    caseDown: 'u',
    caseUp: 'U',
  },
  rus: {
    caseDown: 'г',
    caseUp: 'Г',
  },
}, {
  className: 'KeyI',
  eng: {
    caseDown: 'i',
    caseUp: 'I',
  },
  rus: {
    caseDown: 'ш',
    caseUp: 'Ш',
  },
}, {
  className: 'KeyO',
  eng: {
    caseDown: 'o',
    caseUp: 'O',
  },
  rus: {
    caseDown: 'щ',
    caseUp: 'Щ',
  },
}, {
  className: 'KeyP',
  eng: {
    caseDown: 'p',
    caseUp: 'P',
  },
  rus: {
    caseDown: 'з',
    caseUp: 'З',
  },
}, {
  className: 'BracketLeft',
  eng: {
    caps: '[',
    caseDown: '[',
    caseUp: '{',
    shiftCaps: '{',
  },
  rus: {
    caps: 'Х',
    caseDown: 'х',
    caseUp: 'Х',
    shiftCaps: 'х',
  },
}, {
  className: 'BracketRight',
  eng: {
    caps: ']',
    caseDown: ']',
    caseUp: '}',
    shiftCaps: '}',
  },
  rus: {
    caps: 'Ъ',
    caseDown: 'ъ',
    caseUp: 'Ъ',
    shiftCaps: 'ъ',
  },
}, {
  className: 'Backslash',
  eng: {
    caps: '\\',
    caseDown: '\\',
    caseUp: '|',
    shiftCaps: '|',
  },
  rus: {
    caps: '\\',
    caseDown: '\\',
    caseUp: '/',
    shiftCaps: '/',
  },
}, {
  className: 'Delete',
  eng: {
    caseDown: 'Del',
    caseUp: 'Del',
  },
  rus: {
    caseDown: 'Del',
    caseUp: 'Del',
  },
}];

const keysRow1 = document.querySelectorAll('#key1');

for (let i = 0; i < keysRow1.length; i += 1) {
  keysRow1[i].lastChild.innerHTML = row1[i].eng.caseDown;
  keysRow1[i].classList.add(row1[i].className);
}

const row2 = [{
  className: 'CapsLock',
  eng: {
    caseDown: 'CapsLock',
    caseUp: 'CapsLock',
  },
  rus: {
    caseDown: 'CapsLock',
    caseUp: 'CapsLock',
  },
}, {
  className: 'KeyA',
  eng: {
    caseDown: 'a',
    caseUp: 'A',
  },
  rus: {
    caseDown: 'ф',
    caseUp: 'Ф',
  },
}, {
  className: 'KeyS',
  eng: {
    caseDown: 's',
    caseUp: 'S',
  },
  rus: {
    caseDown: 'ы',
    caseUp: 'Ы',
  },
}, {
  className: 'KeyD',
  eng: {
    caseDown: 'd',
    caseUp: 'D',
  },
  rus: {
    caseDown: 'в',
    caseUp: 'В',
  },
}, {
  className: 'KeyF',
  eng: {
    caseDown: 'f',
    caseUp: 'F',
  },
  rus: {
    caseDown: 'а',
    caseUp: 'А',
  },
}, {
  className: 'KeyG',
  eng: {
    caseDown: 'g',
    caseUp: 'G',
  },
  rus: {
    caseDown: 'п',
    caseUp: 'П',
  },
}, {
  className: 'KeyH',
  eng: {
    caseDown: 'h',
    caseUp: 'H',
  },
  rus: {
    caseDown: 'р',
    caseUp: 'Р',
  },
}, {
  className: 'KeyJ',
  eng: {
    caseDown: 'j',
    caseUp: 'J',
  },
  rus: {
    caseDown: 'о',
    caseUp: 'О',
  },
}, {
  className: 'KeyK',
  eng: {
    caseDown: 'k',
    caseUp: 'K',
  },
  rus: {
    caseDown: 'л',
    caseUp: 'Л',
  },
}, {
  className: 'KeyL',
  eng: {
    caseDown: 'l',
    caseUp: 'L',
  },
  rus: {
    caseDown: 'д',
    caseUp: 'Д',
  },
}, {
  className: 'Semicolon',
  eng: {
    caps: ';',
    caseDown: ';',
    caseUp: ':',
    shiftCaps: ':',
  },
  rus: {
    caps: 'Ж',
    caseDown: 'ж',
    caseUp: 'Ж',
    shiftCaps: 'ж',
  },
}, {
  className: 'Quote',
  eng: {
    caps: "'",
    caseDown: "'",
    caseUp: '"',
    shiftCaps: '"',
  },
  rus: {
    caps: 'Э',
    caseDown: 'э',
    caseUp: 'Э',
    shiftCaps: 'э',
  },
}, {
  className: 'Enter',
  eng: {
    caseDown: 'Enter',
    caseUp: 'Enter',
  },
  rus: {
    caseDown: 'Enter',
    caseUp: 'Enter',
  },
}];

const keysRow2 = document.querySelectorAll('#key2');

for (let i = 0; i < keysRow2.length; i += 1) {
  keysRow2[i].lastChild.innerHTML = row2[i].eng.caseDown;
  keysRow2[i].classList.add(row2[i].className);
}

const row3 = [{
  className: 'ShiftLeft',
  eng: {
    caseDown: 'Shift',
    caseUp: 'Shift',
  },
  rus: {
    caseDown: 'Shift',
    caseUp: 'Shift',
  },
}, {
  className: 'KeyZ',
  eng: {
    caseDown: 'z',
    caseUp: 'Z',
  },
  rus: {
    caseDown: 'я',
    caseUp: 'Я',
  },
}, {
  className: 'KeyX',
  eng: {
    caseDown: 'x',
    caseUp: 'X',
  },
  rus: {
    caseDown: 'ч',
    caseUp: 'Ч',
  },
}, {
  className: 'KeyC',
  eng: {
    caseDown: 'c',
    caseUp: 'C',
  },
  rus: {
    caseDown: 'с',
    caseUp: 'С',
  },
}, {
  className: 'KeyV',
  eng: {
    caseDown: 'v',
    caseUp: 'V',
  },
  rus: {
    caseDown: 'м',
    caseUp: 'М',
  },
}, {
  className: 'KeyB',
  eng: {
    caseDown: 'b',
    caseUp: 'B',
  },
  rus: {
    caseDown: 'и',
    caseUp: 'И',
  },
}, {
  className: 'KeyN',
  eng: {
    caseDown: 'n',
    caseUp: 'N',
  },
  rus: {
    caseDown: 'т',
    caseUp: 'Т',
  },
}, {
  className: 'KeyM',
  eng: {
    caseDown: 'm',
    caseUp: 'M',
  },
  rus: {
    caseDown: 'ь',
    caseUp: 'Ь',
  },
}, {
  className: 'Comma',
  eng: {
    caps: ',',
    caseDown: ',',
    caseUp: '<',
    shiftCaps: '<',
  },
  rus: {
    caps: 'Б',
    caseDown: 'б',
    caseUp: 'Б',
    shiftCaps: 'б',
  },
}, {
  className: 'Period',
  eng: {
    caps: '.',
    caseDown: '.',
    caseUp: '>',
    shiftCaps: '>',
  },
  rus: {
    caps: 'Ю',
    caseDown: 'ю',
    caseUp: 'Ю',
    shiftCaps: 'ю',
  },
}, {
  className: 'Slash',
  eng: {
    caps: '/',
    caseDown: '/',
    caseUp: '?',
    shiftCaps: '?',
  },
  rus: {
    caps: '.',
    caseDown: '.',
    caseUp: ',',
    shiftCaps: ',',
  },
}, {
  className: 'ArrowUp',
  eng: {
    caseDown: '▲',
    caseUp: '▲',
  },
  rus: {
    caseDown: '▲',
    caseUp: '▲',
  },
}, {
  className: 'ShiftRight',
  eng: {
    caseDown: 'Shift',
    caseUp: 'Shift',
  },
  rus: {
    caseDown: 'Shift',
    caseUp: 'Shift',
  },
}];

const keysRow3 = document.querySelectorAll('#key3');

for (let i = 0; i < keysRow3.length; i += 1) {
  keysRow3[i].lastChild.innerHTML = row3[i].eng.caseDown;
  keysRow3[i].classList.add(row3[i].className);
}

const row4 = [{
  className: 'ControlLeft',
  eng: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
  },
  rus: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
  },
}, {
  className: 'MetaLeft',
  eng: {
    caseDown: 'Win',
    caseUp: 'Win',
  },
  rus: {
    caseDown: 'Win',
    caseUp: 'Win',
  },
}, {
  className: 'AltLeft',
  /* systemBtn: true, */
  eng: {
    caseDown: 'Alt',
    caseUp: 'Alt',
  },
  rus: {
    caseDown: 'Alt',
    caseUp: 'Alt',
  },
}, {
  className: 'Space',
  eng: {
    caseDown: ' ',
    caseUp: ' ',
  },
  rus: {
    caseDown: ' ',
    caseUp: ' ',
  },
}, {
  className: 'AltRight',
  eng: {
    caseDown: 'Alt',
    caseUp: 'Alt',
  },
  rus: {
    caseDown: 'Alt',
    caseUp: 'Alt',
  },
}, {
  className: 'ArrowLeft',
  eng: {
    caseDown: '◄',
    caseUp: '◄',
  },
  rus: {
    caseDown: '◄',
    caseUp: '◄',
  },
}, {
  className: 'ArrowDown',
  eng: {
    caseDown: '▼',
    caseUp: '▼',
  },
  rus: {
    caseDown: '▼',
    caseUp: '▼',
  },
}, {
  className: 'ArrowRight',
  eng: {
    caseDown: '►',
    caseUp: '►',
  },
  rus: {
    caseDown: '►',
    caseUp: '►',
  },
}, {
  className: 'ControlRight',
  /* systemBtn: true, */
  eng: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
  },
  rus: {
    caseDown: 'Ctrl',
    caseUp: 'Ctrl',
  },
}];

const keysRow4 = document.querySelectorAll('#key4');

for (let i = 0; i < keysRow4.length; i += 1) {
  keysRow4[i].lastChild.innerHTML = row4[i].eng.caseDown;
  keysRow4[i].classList.add(row4[i].className);
/*  if(row4[i].systemBtn){
    keysRow4[i].classList.add('system');
  } */
}

const keys = document.querySelectorAll('.key');

/*
document.addEventListener('click', (event) => {
      event.stopPropagation();
  const char = event.target.innerText;

   if(event.classList.contains('system')){
    document.getElementById('textarea').value += char;
  }

} , true );
 */

document.onkeydown = (event) => {
  document.querySelector(`.key.${event.code}`).classList.add('active');
  const char = document.querySelector(`.key.${event.code}`).lastChild.innerHTML;
  document.getElementById('textarea').value += char;
};

document.onkeyup = (event) => {
  setTimeout(() => {
    document.querySelector(`.key.${event.code}`).classList.remove('active');
  }, 20);
};

keys.forEach((el) => el.addEventListener('mousedown', () => {
  el.classList.add('active');
  const char = el.lastChild.innerHTML;
  document.getElementById('textarea').value += char;
}));

keys.forEach((el) => el.addEventListener('mouseup', () => {
  setTimeout(() => {
    el.classList.remove('active');
  }, 100);
}));
