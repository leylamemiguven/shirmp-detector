
import React, {useState, useEffect, useRef} from  'react';

import './App.css';
import userEvent from '@testing-library/user-event';

import shrimpDetectorImage from './shrimp-detector-logo.png'


function App() {
  const videoRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getCameraStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing camera: ", error);
      setErrorMessage("Error accessing camera. Please check your permissions.");
    }
  };


  return (

    <div>
      <h1>Shrimp Detector: What you need to keep a good posture while working</h1>
      <h3>An extension that analyzes your posture using your camera so you stop...you know...🦐 shirmping 🦐.</h3>
      <div className='body-elements'>
        <img  className="shrimpImage" src={shrimpDetectorImage}></img>
        <button onClick={getCameraStream}>Enable Camera</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <video ref={videoRef} width="640" height="480" autoPlay></video>
      </div>
    </div>
  );
}

export default App;
