import React, {useState} from "react";

//login page
//username
//password
//sumbit button - it should return json object of username and password
//reset button - clears the username and password 

const UserLogin =  () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let userArr = [];
    const uName = (e) =>{
        setUserName(e.target.value);
        console.log(e);
    }
     
    const uPassword = (e) =>{
        setPassword(e.target.value);
        console.log(e);
    }

    const submit = () =>{
        let userInput = { username : userName, Password : password };
        let userArr = [userName, password];
        console.log("accesing user array - username : " + userArr[0])
        console.log("accesing user array- password : " + userArr[1])
        console.log("accesing user object - username : " + userInput?.username)
        console.log("accesing user object using bracket- username : " + userInput["username"])
        console.log(userInput);
        console.log(userName);
        console.log(password);
        return userInput;
    }

   // const data = fetch(" url ") 
   // fecthing data
    //post data to backend
    

    const reset = () =>{
        setUserName("");
        setPassword(""); 
    }

    return (
        <>
        <div className="w-52 h-7 p-2 m-2 shadow-6xl ml-96 flex flex-wrap">
            <div>
                <input type="email" className="w-52 h-7 p-2 m-2 border-spacing-1 rounded-xl  bg-pink-200 " placeholder="Email" value={userName}
                onChange={uName} />
            </div>
            <div>
                <input className="w-52 h-7 p-2 m-2 border-spacing-1 bg-pink-200 rounded-xl" type="password" placeholder="password" value={password}
                onChange={uPassword} />
            </div>
            <div>
                <button onClick={submit} className=" w-20 h-9 p-2 m-2 border-spacing-1 bg-purple-600 rounded-md text-white"> Submit </button>
                <button onClick={reset} className="w-20 h-9 p-2 m-2 border-spacing-1 bg-purple-600 rounded-md text-white"> Reset </button>
            </div>           
        </div>
        <div>
            <p>{userArr[0]}</p>
            <p>{userArr[1]}</p>
        </div>
        </>
        
    )
}

export default UserLogin;