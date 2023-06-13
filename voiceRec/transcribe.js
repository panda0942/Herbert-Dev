const signLanguageImages = {
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
  
  // Check if the browser supports the necessary APIs
  if (!('webkitSpeechRecognition' in window)) {
    alert('Speech recognition is not supported in this browser. Please try a different browser.');
  } else {
    let recognition;
  
    function startRecording() {
      // Create a new instance of the speech recognition object
      recognition = new webkitSpeechRecognition();
  
      // Set properties for speech recognition
      recognition.continuous = true;
      recognition.interimResults = true;
  
      // Start recognition
      recognition.start();
  
      // Add event listener for the 'result' event
      recognition.addEventListener('result', handleRecognitionResult);
    }
  
    function stopRecording() {
      if (recognition) {
        // Stop recognition
        recognition.stop();
  
        // Remove event listener
        recognition.removeEventListener('result', handleRecognitionResult);
      }
    }
  
    function handleRecognitionResult(event) {
      let interimTranscript = '';
      let finalTranscript = '';
  
      // Iterate over the results and concatenate the transcript
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
  
      // Display the final transcript in the text area
      document.getElementById('text-output').value = finalTranscript;
  
      // Convert the final transcript to sign language symbols
      const signLanguageSymbols = convertToSignLanguageSymbols(finalTranscript);
  
      // Display the sign language symbols on the web page
      displaySignLanguageSymbols(signLanguageSymbols);
    }
  
    function convertToSignLanguageSymbols(text) {
      const signLanguageSymbols = [];
  
      for (let i = 0; i < text.length; i++) {
        const symbol = text[i].toLowerCase(); // Convert text to lowercase
        if (symbol in signLanguageImages) {
          const imageSrc = signLanguageImages[symbol];
          const imageElement = document.createElement('img');
          imageElement.src = imageSrc;
          signLanguageSymbols.push(imageElement);
        } else {
          // If symbol is not found in the sign language images object, create a text node
          const textNode = document.createTextNode(symbol);
          signLanguageSymbols.push(textNode);
        }
      }
  
      return signLanguageSymbols;
    }
  
    function displaySignLanguageSymbols(symbols) {
      const signLanguageOutput = document.getElementById('sign-language-output');
      signLanguageOutput.innerHTML = '';
  
      // Iterate over the sign language symbols and display them on the web page
      for (const symbol of symbols) {
        const symbolElement = document.createElement('div');
        symbolElement.classList.add('sign-language-symbol');
  
        // Check if the symbol is an image element
        if (symbol instanceof HTMLImageElement) {
          symbolElement.appendChild(symbol);
        } else {
          symbolElement.textContent = symbol;
        }
  
        signLanguageOutput.appendChild(symbolElement);
      }
    }
  }
  