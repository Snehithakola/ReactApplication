import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles=makeStyles({
    edit:{
        // position : 'relative',
        // left : '60px',
     },

    title:{

        // position: 'static',
        width: '196px', //86
        height: '24px',
        // left: '0px',
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
        left: '0px',
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

export const Links:React.FunctionComponent = ()=>
{
    const classes=useStyles();
     return(

        <Grid container sx={{width:"284px",height:"150px"}} direction="row">

            <Grid container direction="column">
                <Grid item >
                 

                    <Grid item  className={classes.edit}>
                       <Typography className={classes.title} variant="body1">
                           UsefulLinks
                      </Typography>
                    </Grid>

                    <Grid item >
                        <Typography className={classes.element} variant="body2">
                           Pricing
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Blinklist Business
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Gift cards
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Blinklist Magazine
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Contact & Help
                        </Typography>
                     </Grid>

                   
                    
                </Grid>
            </Grid>

       

       

  
    </Grid>
  

     );
}