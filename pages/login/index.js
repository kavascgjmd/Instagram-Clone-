import React, {  useState, useContext ,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { requirePropFactory } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import imag from './otaku.jpg';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
function Index() {
  const router = useRouter();
  const [email, setemail] = useState('');
  const [password,setpassword] = useState('');
  const [error, seterror] = useState('');
  const [loading , setloading] = useState(false);
  const {login, user} = useContext(AuthContext);
  
  useEffect(()=>{
  
    if(user){
      router.push('/');
    }

  })
  const handleclick = async ()=>{
try{
  setloading(true);
  seterror('');
  await login (email, password);
  console.log("Logged In");
}
catch(err){
  console.log(err);
  seterror(err);
  setTimeout(()=>{
  seterror('');
  }, 2000
  )
}
  setloading(false);
  }
  return (
    <div className='login-container'>
    <div className ='login-card'>
        
        <div className='otaku' > <div className='otaku-logo'><Image  src={imag} alt="" ></Image></div></div>
        <div className='textarea'>
    <TextField id="outlined-basic" label="email" variant="outlined" size='small' fullWidth margin='dense' value ={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <TextField id="outlined-basic" label="password" variant="outlined" size='small' fullWidth margin='dense' value ={password} onChange={(e)=>{setpassword(e.target.value)}}/>
    { error != '' && 
      <div style={{color : "red"}}>{error.message} </div>}
    <Button variant="contained" fullWidth  style ={{marginTop : "0.5rem"}} onClick = {handleclick} >Login</Button>
    <Link href = "/forgotPassword"><div style={{color : "blue" }}> Forgot Password ?</div></Link>
    </div>
    </div>
    <div className='bottom-card'>
     Do not Have an Account?<Link href = "/signup"><span style={{color:'blue'}}>Sing Up</span></Link> 
    </div>
    </div>
  )
}

export default Index