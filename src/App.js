
import './App.css';
import { Configuration, OpenAIApi } from "openai";
import { useState, useRef } from 'react';
import axios from 'axios';

function App() {


  const API_KEY = "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";

  const [dataa, setData] = useState('');
  const state = useRef();
  const inputRef = useRef(null);
  const inputRef_channel = useRef(null);
  const [updated, setUpdated] = useState('');

  
  const handleClick = () => {
    
    setUpdated(inputRef.current.value);
    callAPI(inputRef.current.value)
    
  };
  
  


  async function callAPI(data) {
    // setUpdated(inputRef.current.value);

    console.log("Pressed");

    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    delete configuration.baseOptions.headers['User-Agent'];
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write me a detailed review for the youtube video" + data,
      max_tokens: 3000,
      temperature: 0,
    });

    // console.log(response.data.choices[0].text);
    setData(response.data.choices[0].text);
    state.current = response.data.choices[0].text;
    console.log(state.current);
    const newData = {
      name: inputRef.current.value,
      data: response.data.choices[0].text,
    };
    axios.post('http://localhost:3001/added', newData);
  
    
  }

  



  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        placeholder='YT video title'
      />
      <input
        ref={inputRef_channel}
        type="text"
        id="channel"
        name="channel"
        placeholder='channel'
      />
      
      <button onClick={()=> {handleClick();}}>Press me to get responses</button>
      <div>{dataa}</div>
    </div>
  );
}

export default App;
