import React, {useState, FC} from "react";
import { Box, Typography } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextFields, Buttons } from "../reuse";
import { loginAction } from "../../state/authSlice/authSlice";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import {useRouter} from 'next/router'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        border:'1px solid #eee',
        display:'flex',
        flexDirection:'column',
        padding:50,
        height:400
    }
   
  })
);
type LoginProps = {
   token:string
}

const Login = () => {
    const {loading} =  useAppSeletor(state => state.loginSlice)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const classes = useStyles()
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

    }

    
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        const datas = {
            email:email,
            password:password
        }
          dispatch(loginAction(datas))
          .then(data => {
            if(data.payload){
              localStorage.setItem('id', data.payload.id)
               router.push('/dashboard/layout/layout')
              
            }
          })
        }
  return (
    <Box className={classes.root}>
      <Typography sx={{textAlign:'center'}}>Login Form</Typography>
      <TextFields type="text" label="Email" onChange={handleEmailChange} name={email} value={email} />
      <TextFields type="password" label={'Password'} onChange={handlePassword} name={password} value={password}/>
      <Buttons submit={handleSubmit}>{loading === true ? "Loading..." : 'Login'}</Buttons>
    </Box>
  );
};

export default Login;