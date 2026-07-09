import React, { useRef,useState } from "react";
import YouTube from "react-youtube";
function App() {
  const playerRef = useRef(null);

  const [videoId,setVideoId] = useState('EV168NQvCHc')

  // Called when the player is ready
  const onReady = (event) => {
    playerRef.current = event.target;
  };

  // Play the video
  const playVideo = () => {
    playerRef.current?.playVideo();
  };

  // Pause the video
  const pauseVideo = () => {
    playerRef.current?.pauseVideo();
  };

  // Stop the video
  const stopVideo = () => {
    playerRef.current?.stopVideo();
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        onReady={onReady}
        opts={{
          width: "640",
          height: "390",
          playerVars: {
            autoplay: 0,
          },
        }}
      />

      <br />

      <button className="mx-2 bg-green-600 w-50 h-10 cursor-pointer"
      onClick={playVideo}>Play</button>

      <button className="mx-2 bg-green-600 w-50 h-10 cursor-pointer"
      onClick={pauseVideo}>Pause</button>

      <button className="mx-2 bg-green-600 w-50 h-10 cursor-pointer"
      onClick={stopVideo}>Stop</button> 

       <br></br><br></br>

       <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('EV168NQvCHc')}>Redux Tool Kit by  Yoshmita</button> 

        <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
      
      // style={{
      //   backgroundColor: "blue",
      //   color: "white",
      //   padding: "10px 20px",
      //   border: "none",
      //   borderRadius: "5px",
      // }}  
      
      onClick={() =>setVideoId('DnRY5yG67u8')}>Redux Tool Kit by Love Babbar</button> 

       <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('s-AaaDIzgQw')}>useState Hook by  Yoshmita</button> 

       <br></br><br></br>

         <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('MXs2qqWcGHo')}>useMemo Hook by  Love Babbar</button> 

          <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('Z7VSgQ_y0dg')}>useContext Hook by  Love Babbar</button> 

           <button className="mx-2 px-1 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('_NZ5kb68IpA')}>useEffect Hook by  Love Babbar</button>

       <br></br><br></br>


         <button className="mx-2 bg-green-600 w-50 h-15 cursor-pointer"
       onClick={()=>setVideoId('Z4hN0WZbASk')}>Lifting State by Love Babbar</button>


        <button className="mx-2 px-1 bg-green-600 w-50 h-25 cursor-pointer"
       onClick={()=>setVideoId('BBgSB2bLy60')}>Passing PROPS as Childrenand and Function by Love Babbar</button>


    </div>
  );
}

export default App;

/*

import React, { useState, useRef } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }

      setText(transcript);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Voice Recognition</h2>

      <button onClick={startListening} disabled={listening}>
        Start
      </button>

      <button onClick={stopListening} disabled={!listening}>
        Stop
      </button>

      <h3>Transcript</h3>

      <textarea
        rows={50}
        cols={10000}
        value={text}
        readOnly
      />
    </div>
  );
};

export default App;
*/