import React from "react";
import { useState } from "react";

function Logic() {
  const [like, setLike] = useState(0);
  const [value, setValue] = useState("Text");
  return (
    <div>
      <div>
       
        <h1>{like}</h1>
      </div>
      <div>
        
        <h1>{value}</h1>
      </div>
      <div>
        <input type="text"value={value} onChange={event=>setValue(event.target.value)}/>
      </div>
      <div>
        <input type="text"value= {value} onChange={event=>setValue(event.target.value)}/>
      </div>
      <div>
        <button onClick={() => setLike(like + 1)}> + </button>
      </div>
      <div>
        <button onClick={() => setLike(like - 1)}> - </button>
      </div>
      <div>
        <button> dane </button>
      </div>
    </div>
  );
}

export default Logic;
