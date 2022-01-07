import { useState } from "react";

function App() {
  return (
    <div>

      <h1 className="bg-dark text-light">MyChatApp</h1>
      <div> by Pratik-090_KH</div>

      <send />
    </div>
  );
}

export default App;

function Send() {
  const [chat, setChat] = useState("");
  const [list, setlist] = useState("");

  const handleChat = (e) => {
    setChat(e.target.value);
  };

  const send = (e) => {
    const newList = [...chat];
    setlist(newList);
    setChat("");
  };
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <input className="form-control" type="text" placeholder="Lets chat here"
            value={chat}
            onChange={handleChat}
          />  

          </div>
          <div className="col-4">
            <input
             className="form-control"
             type="button"
             value="send"
             onClick={send}
             />
          </div>
        </div>
      </div>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}