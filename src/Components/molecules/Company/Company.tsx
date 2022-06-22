import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
   edit:{
      width: '73px',
      height: '24px',
      // position : 'relative',
      // left : '70px',
   },

    title:{

      position: 'static',
      //   width: '64px',
      //   height: '24px',
      //left: '0px',
      //   fontFamily: 'Raleway',
      //   fontStyle: 'normal',
      //   fontWeight: 'bold',
      //   fontSize: '16px',
      //   lineHeight: '24px',     
      //   color: '#03314B',
      //   flex: 'none',
      //   order: '0',
      //   flexGrow: '0'
      // width: '73px', 
      // height: '24px',
      fontFamily: 'Cera Pro',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#03314B',
      flex: 'none',
      order: '0',
      flexGrow: '0'
    },
    element:
    {
        width: '214px',
        height: '24px',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#6D787E',
        marginTop:'16px',
        flex: 'none',
         order: '2',
         flexGrow: '0'
    }
});

export const Company:React.FunctionComponent = ()=>
{
    const classes=useStyles();
     return(

        <Grid container sx={{width:"284px",height:"150px"}} direction="row">

            <Grid container direction="column">
                <Grid item>
                 

                    <Grid item className={classes.edit}>
                       <Typography className={classes.title} variant="body1">
                           Company
                      </Typography>
                    </Grid>

                    <Grid item >
                        <Typography className={classes.element} variant="body2">
                           About
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                             Careers
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                           Partners
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                           Code of Conduct
                        </Typography>
                     </Grid>
                    
                </Grid>
            </Grid>

       

       

  
    </Grid>
  

     );
}