const keyboardButtons = document.querySelectorAll('#keyboard button');
const textInput = document.getElementById('textInput');
const signLanguageOutput = document.getElementById('signLanguageOutput');
const outputButton = document.getElementById('output');
const backspaceButton = document.getElementById('backspace');
const signLanguageMap = {
  a: 'keyboard/A.png',
  b: 'keyboard/B.png',
  c: 'keyboard/C.png',
  d: 'keyboard/D.png',
  e: 'keyboard/E.png',
  f: 'keyboard/F.png',
  g: 'keyboard/G.png',
  h: 'keyboard/H.png',
  i: 'keyboard/I.png',
  j: 'keyboard/J.png',
  k: 'keyboard/K.png',
  l: 'keyboard/L.png',
  m: 'keyboard/M.png',
  n: 'keyboard/N.png',
  o: 'keyboard/O.png',
  p: 'keyboard/P.png',
  q: 'keyboard/Q.png',
  r: 'keyboard/R.png',
  s: 'keyboard/S.png',
  t: 'keyboard/T.png',
  u: 'keyboard/U.png',
  v: 'keyboard/V.png',
  w: 'keyboard/W.png',
  x: 'keyboard/X.png',
  y: 'keyboard/Y.png',
  z: 'keyboard/Z.png',
  ' ': 'keyboard/space.png',
};

keyboardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.textContent.toLowerCase();
    appendLetterToTextInput(letter);
    interpretText();
  });
});

backspaceButton.addEventListener('click', () => {
  deleteCharacterAtCursor();
  interpretText();
});

textInput.addEventListener('input', interpretText);

outputButton.addEventListener('click', () => {
  const speechText = textInput.value;
  speakText(speechText);
  textInput.value = '';
});

function appendLetterToTextInput(letter) {
  textInput.value += letter;
}

function deleteCharacterAtCursor() {
  const { value, selectionStart, selectionEnd } = textInput;
  if (selectionStart === selectionEnd) {
    textInput.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
    textInput.setSelectionRange(selectionStart - 1, selectionStart - 1);
  } else {
    textInput.value = value.slice(0, selectionStart) + value.slice(selectionEnd);
    textInput.setSelectionRange(selectionStart, selectionStart);
  }
}

function interpretText() {
  const inputText = textInput.value.toLowerCase();
  let output = '';

  for (let i = 0; i < inputText.length; i++) {
    const letter = inputText[i];
    const sign = signLanguageMap[letter] || letter;
    output += `<img src="${sign}" alt="${letter}" class="resize-image">`;
  }

  signLanguageOutput.innerHTML = output;
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    console.log('Speech synthesis is not supported in this browser.');
  }
}

window.addEventListener("load", function() {
  // Get the preloader element
   const preloader = document.getElementById("preloader");

  // Hide the preloader after 5 seconds
  setTimeout(function() {
      preloader.style.display = "none";
  }, 3000);
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
    document.querySelector('#output1').style.zIndex='-1';
});

