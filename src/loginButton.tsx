import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
const useStyles= makeStyles({
  login: {
    position: 'fixed',
    right: '200px',
    top: '20px'
},
})

interface Props{
    onClickFun? : Function;
}

const LoginButton = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  const classes= useStyles()
  return  <React.Fragment>
     
    {
    <div style={{"textAlign":"center"}}>
      {/* <h1 style={{"textAlign":"center"}}>Blinkist-App</h1> */}
      <Button variant='contained' className ={classes.login} color='primary' onClick={() => loginWithRedirect()}>Log In</Button>
      {/* <ButtonComponent className={styles.hello} variant={'contained'}>hello</ButtonComponent> */}
    </div>
    }</React.Fragment>

};

export default LoginButton;