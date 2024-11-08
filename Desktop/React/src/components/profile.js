import React from 'react'; 
import { useState } from 'react'; 

function UserInput() { 
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');
  const [emailinput, setInputEmail] = useState('');
  const [password, setInputpassword] = useState('');


  const userInput = (a) => { 
      setInput(a.target.value)
      console.log(a);
      console.log(a.target);
    }

  const displayInput = () => {
    setDisplay(input);
    console.log(input);
    return (0,1)  
  }

  const usercheck = (a) => { 
    console.log(a);
  }

  const userEmail = (e) => { 
    setInputEmail(e.target.value)
    console.log(e);
  }
 const userPassword = (e) => { 
  setInputpassword(e.target.value)
  console.log(e);
}
  return (
    <>
    <div>
      <h1>User Input </h1>
      <input type="text" className="search-input" placeholder="Search" value={input}
        onChange={userInput}
      />
      <button
        onClick={displayInput}
      >
        Display
      </button>
      <p>{display}</p>
      <div>
      <input type="checkbox" onChange={usercheck}
      />
       <input type="email" placeholder="email" value = {emailinput} onChange={userEmail}
      />
       <input type="password" placeholder="password" value ={password} onChange={userPassword}
      />
      </div>

    </div>
    </>
  );
}

export default UserInput;

