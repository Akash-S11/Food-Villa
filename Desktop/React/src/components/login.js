import React, {useState} from "react";
import styles from "../../login.module.css";


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
        <div>
            <div>
                <input type="email" className={styles.loginusername} placeholder="Email" value={userName}
                onChange={uName} />
            </div>
            <div>
                <input type="password" placeholder="password" value={password}
                onChange={uPassword} />
            </div>
            <div>
                <button onClick={submit} className = {styles.searchinput}> Submit </button>
                <button onClick={reset} > Reset </button>
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