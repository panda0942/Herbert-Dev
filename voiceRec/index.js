


// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
// const theSearch = document.querySelector("#TextArea");
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// let isListening = false;

// recognition.onstart = function() {
//   console.log("vr active");
//   isListening = true;
// };

// recognition.onresult = function(event) {
//   let current = event.resultIndex;
//   let transcript = event.results[current][0].transcript;
//   console.log(transcript);
//   theSearch.innerHTML = transcript + ".";
// };

// recognition.onend = function() {
//   console.log("vr reactivate");
//   if (isListening) {
//     recognition.start();
//   }
// };
// recognition.continuous = true;
// recognition.interimResults = true;
// recognition.lang = navigator.language;

// startBtn.addEventListener("click", () => {
//   if (!isListening) {
//     recognition.start();
//     isListening = true;
//     setTimeout(() => {
//       theSearch.style.color = "black";
//       theSearch.innerHTML = "Listening.";
//     }, 1000);
//     setTimeout(() => {
//       theSearch.style.color = "black";
//       theSearch.innerHTML = "Listening..";
//     }, 3000);
//     setTimeout(() => {
//       theSearch.style.color = "black";
//       theSearch.innerHTML = "Listening...";
//     }, 5000);
//   }
// });

// stopBtn.addEventListener("click", () => {
//   theSearch.innerHTML = "Transcription here...";
//   recognition.stop();
//   isListening = false;

// });

// const speakBtn = document.querySelector("#speak");
// const defSays = document.querySelector("#myText");// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
// const theSearch = document.querySelector("#TextArea");
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// //onstart

// recognition.onstart = function () { 
//     console.log("vr active");
// }
// //onresult
// recognition.onresult = function (event) {
//     //console.log(event);
//     let current = event.resultIndex;
//     let transcript = event.results[current][0].transcript;
//     console.log(transcript);
//     theSearch.innerHTML = transcript + ".";
    
// }
// //onend
// recognition.onend = function () {
//     // theSearch.innerHTML = "Transcription here...";
//     console.log("vr reactivate");
//     recognition.start();
// }

// //sr continuous
// recognition.continuous = true;
// recognition.interimResults = true;
// recognition.lang = navigator.language;

// startBtn.addEventListener("click", () => {
//     recognition.start(); 
//     setTimeout(
//         function () {
//             theSearch.style.color = "black";
//             theSearch.innerHTML = "Listening.";
//         }
//         , 1000)
//         setTimeout(
//             function(){
//                 theSearch.style.color = "black";
//                 theSearch.innerHTML = "Listening..";
//             }
//             ,3000);
//             setTimeout(
//                 function(){
//                     theSearch.style.color = "black";
//                     theSearch.innerHTML = "Listening..." ;
//                 }
//                 ,5000); 
                                 
// })


// stopBtn.addEventListener("click", () => {
//     theSearch.innerHTML = "Transcription here...";
//     recognition.stop();
//     recognition.onend = function () {
//         console.log("Speech recognition stopped");
//     };
// });

// //    window.onload = function () {
// //        readOut("SpeakEazy text-to-speech and speech-to-text recognition software");
// //    }
 
// const speakBtn = document.querySelector("#speak");
// const defSays = document.querySelector("#myText")
// //How to make the program to speak
// function readOut(message) {
//     const speech = new SpeechSynthesisUtterance();
//     // different voices 
//     const allvoices = speechSynthesis.getVoices();
//     speech.voice = allvoices[3];
//     speech.text = message;
//     speech.volume = 1;
//     window.speechSynthesis.speak(speech);
//     console.log("speaking out...");
// }

// const animatedIcon = document.querySelector('.animated-icon');
// speakBtn.addEventListener("click", () => {
//     animatedIcon.classList.add('show'); // add class to trigger animation
//     readOut(defSays.value);
//     console.log(defSays.value);
//     defSays.value = " ";
//     theSearch.innerHTML = " ";
//     setTimeout(() => {
//         animatedIcon.classList.remove('show'); // remove class to stop animation
//         theSearch.innerHTML = `Transcription here...`;
//     }, 4000);
//      // set a timeout to stop the animation after 2 second
// });
// window.addEventListener("load", function() {
//     // Get the preloader element
//      const preloader = document.getElementById("preloader");

//     // Hide the preloader after 5 seconds
//     setTimeout(function() {
//         preloader.style.display = "none";
//     }, 3000);
// });
// recognition.onerror = function(event) {
//     console.error('Speech recognition error occurred: ', event.error);
// };

// const hamburgerMenu = document.getElementById("hamburger-menu");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// hamburgerMenu.addEventListener("click", function () {
//     dropdownMenu.classList.toggle("show");
// });



// function readOut(message) {
//   const speech = new SpeechSynthesisUtterance();
//   const allvoices = speechSynthesis.getVoices();
//   speech.voice = allvoices[3];
//   speech.text = message;
//   speech.volume = 1;
//   window.speechSynthesis.speak(speech);
//   console.log("speaking out...");
// }

// // speakBtn.addEventListener("click", () => {
// //   readOut(defSays.value);
// //   defSays.value = "";
// //   theSearch.innerHTML = "";
// // });

// const animatedIcon = document.querySelector('.animated-icon');
// speakBtn.addEventListener("click", () => {
//     animatedIcon.classList.add('show'); // add class to trigger animation
//     readOut(defSays.value);
//     console.log(defSays.value);
//     defSays.value = " ";
//     theSearch.innerHTML = " ";
//     setTimeout(() => {
//         animatedIcon.classList.remove('show'); // remove class to stop animation
//         theSearch.innerHTML = `Transcription here...`;
//     }, 4000);
//      // set a timeout to stop the animation after 2 second
// });



// window.addEventListener("load", function() {
//   const preloader = document.getElementById("preloader");
//   setTimeout(function() {
//     preloader.style.display = "none";
//   }, 3000);
// });

// recognition.onerror = function(event) {
//   console.error("Speech recognition error occurred: ", event.error);
// };

// const hamburgerMenu = document.getElementById("hamburger-menu");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// hamburgerMenu.addEventListener("click", function() {
//   dropdownMenu.classList.toggle("show");
// });










const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const theSearch = document.querySelector("#TextArea");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
let isListening = false;


recognition.onstart = function(event) {
  event.preventDefault();
  console.log("vr active");
  playMutedMicrophoneSound();
  isListening = true;
};

recognition.onresult = function(event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  console.log(transcript);
  theSearch.innerHTML = transcript + ".";
};

recognition.onend = function(event) {
  event.preventDefault();
  console.log("vr reactivate");
  playMutedMicrophoneSound();
  if (isListening) {
    playMutedMicrophoneSound();
    recognition.start();
  }

};
recognition.continuous=true;
recognition.interimResults = true;
recognition.lang = navigator.language;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  playMutedMicrophoneSound();
  if (!isListening) {
    recognition.start();
    isListening = true;
    isMuted = false;
    theSearch.style.color = "black";
    theSearch.innerHTML = "Listening.";
    playMutedMicrophoneSound(); 
  }
});

stopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  playMutedMicrophoneSound();
  theSearch.innerHTML = "Transcription here...";
  recognition.stop();
  isListening = false;
  playMutedMicrophoneSound();
});

const speakBtn = document.querySelector("#speak");
const defSays = document.querySelector("#myText");

function readOut(message) {
  const speech = new SpeechSynthesisUtterance();
  const allvoices = speechSynthesis.getVoices();
  speech.voice = allvoices[3];
  speech.text = message;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
  console.log("speaking out...");
}

const animatedIcon = document.querySelector('.animated-icon');
speakBtn.addEventListener("click", () => {
  animatedIcon.classList.add('show'); // add class to trigger animation
  readOut(defSays.value);
  console.log(defSays.value);
  defSays.value = " ";
  theSearch.innerHTML = " ";
  setTimeout(() => {
    animatedIcon.classList.remove('show'); // remove class to stop animation
    theSearch.innerHTML = `Transcription here...`;
  }, 4000);
  // set a timeout to stop the animation after 2 second
});

window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  readOut("Welcome to Speakeazy");
  setTimeout(function() {
    preloader.style.display = "none";
  }, 3000);
});

recognition.onerror = function(event) {
  console.error("Speech recognition error occurred: ", event.error);
};

const hamburgerMenu = document.getElementById("hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.addEventListener("click", function() {
  dropdownMenu.classList.toggle("show");
});
// Function to play muted sound indicating microphone is on
function playMutedMicrophoneSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Create a silent audio buffer
  const buffer = audioContext.createBuffer(1, 1, audioContext.sampleRate);

  // Create a source node with the silent buffer
  const source = audioContext.createBufferSource();
  source.buffer = buffer;

  // Connect the source to a gain node
  const gainNode = audioContext.createGain();
  source.connect(gainNode);

  // Disconnect the gain node from the audio context destination
  gainNode.disconnect();

  // Start the playback
  source.start();
}

