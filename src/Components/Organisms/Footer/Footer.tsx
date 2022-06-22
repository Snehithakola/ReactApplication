import { Grid, StyledEngineProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { BigIdeas } from "../../molecules/BigIdea/BigIdeas";
import { Company}  from "../../molecules/Company/Company";
import { Editorial } from "../../molecules/Editorial/Editorial"; 
import { CopyRights } from "../../molecules/CopyRights/Copyrights"; 
import { Links } from "../../molecules/Links/Links"

const useStyles=makeStyles({

    footer:{
        display: 'grid',
        height: '370px',
        top: '111px',
        borderRadius: '0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // position: 'relative',
        backgroundColor: '#F1F6F4',
        overflow : 'wrap'
    },
  
});



export const Footer:React.FunctionComponent= (props) =>
{
    const classes=useStyles();
    return(

        <React.Fragment>

           <StyledEngineProvider injectFirst>
    

    <div className={classes.footer}>

      <Grid container direction="column">

     <Grid item>

      <Grid container  >

            <Grid item sx={{ marginLeft: "244px"}}>
            <BigIdeas /> 
            </Grid>

           <Grid item> <Editorial />
           </Grid>
            
          <Grid item> <Links />
          </Grid>

         <Grid item> <Company />
         </Grid>
         
        </Grid>


      </Grid>

      {/* <Grid item sx={{marginLeft:'-900px',marginTop:'100px',marginBottom:'38px'}}><CopyRights /></Grid> */}
      <Grid item sx={{marginLeft:'-500px',marginTop:'100px',marginBottom:'38px'}}><CopyRights /></Grid>

    </Grid>

    </div>

</StyledEngineProvider> 

</React.Fragment>
);
}