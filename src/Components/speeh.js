// import React, { useState } from 'react';

// const AudioRecorder = () => {
//   const [audioChunks, setAudioChunks] = useState([]);
//   let mediaRecorder;
//   let audioStream;

//   const startRecording = async () => {
//     try {
//       audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaRecorder = new MediaRecorder(audioStream);

//       mediaRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           setAudioChunks((prevChunks) => [...prevChunks, event.data]);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         console.log('Recording stopped');
//       };

//       mediaRecorder.start();
//       console.log('Recording started');
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && mediaRecorder.state === 'recording') {
//       mediaRecorder.stop();
//       audioStream.getTracks().forEach((track) => track.stop());
//       console.log('Recording stopped');
//     }
//   };

//   const sendAudioChunks = () => {
//     console.log('Audio chunks:', audioChunks);
//   };

//   return (
//     <div>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <button onClick={sendAudioChunks}>Send</button>
//     </div>
//   );
// };

// export default AudioRecorder;
// import { useState } from 'react';
// import { useSpeechRecognition } from 'react-speech-kit';
    
// function Example() {
//    const [value, setValue] = useState('')
//    const { listen, stop } = useSpeechRecognition({
//      onResult: (result) => {
//        setValue(result)
//      }
//    })
    
//    return (
//      <div>
//        <textarea
//          value={value}
//          onChange={(event) => setValue(event.target.value)}
//         />
//         <button onMouseDown={listen} onMouseUp={stop}>
//           🎤
//         </button>
//        </div>
//       )
//    }
// export default Example;
// import React, { useState, useEffect } from 'react';
// import annyang from 'annyang';

// function Example() {
//   const [transcript, setTranscript] = useState('');
//   const [listening, setListening] = useState(false);

//   const startListening = () => {
//     setListening(true);

//     // Define a command and a callback for the recognized speech
//     annyang.addCommands({
//       '*speech': (speech) => {
//         setTranscript((prevTranscript) => prevTranscript + ' ' + speech);
//       },
//     });

//     // Start listening
//     annyang.start();
//   };

//   const stopListening = () => {
//     setListening(false);

//     // Stop listening
//     annyang.abort();
//   };

//   useEffect(() => {
//     return () => {
//       stopListening();
//     };
//   }, []);

//   return (
//     <div>
//       <textarea value={transcript} readOnly />
//       <button onClick={listening ? stopListening : startListening}>
//         {listening ? 'Stop Listening' : 'Start Listening'}
//       </button>
//     </div>
//   );
// }

// export default Example;

