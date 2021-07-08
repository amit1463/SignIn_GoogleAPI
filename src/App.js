import React ,{useState} from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Homepage from "./Homepage/Homepage";
import "./App.css";
// or
// import { GoogleLogin } from 'react-google-login';


const App=()=>{
    const [flag,setFlag] = useState(false);
    const responseGoogle = (response) => {
        setFlag(true);
      console.log(response);
    }
    if(flag===false){
    return(
        <div className="App">
           <h1>Login with Google</h1>
           
            <GoogleLogin
                clientId="683658998923-k0jlprg58loljnnte3jm4lddg3q2r4dv.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />        

        </div>
    
    )
    }
    else if(flag===true){
       return (
           <>
           <Homepage/>
           </>
       )
    }

   
    
}


export default App;


