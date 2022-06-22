import { Box,AppBar, Button, Grid,    IconButton,    Typography } from "@mui/material";
import React from "react";
import { makeStyles,styled } from "@mui/styles";
import {Icons,IconProps} from "../../atoms/BlinkistLogo/Blinkistlogo";
import SearchItem from "../../atoms/SearchItem/SearchItem";
import Avatars from "../../atoms/Avatar/Avatars";
import { ExploreNav } from "../../molecules/ExploreNav/ExploreNav";
import {  StyledEngineProvider } from "@mui/system";
import BlinkistLogo from "../../../images/blogo.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MainContainer = styled("div")({
    width: "100%",
    height: 86,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: 40,
    position: 'relative',
    left: 50,
    right:50,
    fontFamily: 'Cera Pro !important'
  });
  const MainContainer2 = styled("div")({
    width: "80%",
    height: 86,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 40,
    position: 'relative',
    left: 240,
    right:240,
    fontFamily: 'Cera Pro !important'
  });

const useStyles=makeStyles({
    main: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: '1px 1px'
      },
  
   blinklistlogo:{

    width: 124.09,
    height: 26,
    alignSelf: "center",
    position: "absolute",
    left: 190,
    top: 30,

    
   },
   search:{

    width: 15.31,
    height: 15.31,
    alignSelf: "center",
    position: "absolute",
    left: 307,
    top: 24,
    
   },
   explore1: {
    alignSelf: "center",
    position: "absolute",
    left: 329,
    top: -5,

  },

   explore:{
       marginLeft:'58px',
       height: '20px',
       width: '57px',
       borderRadius: 'nullpx',
       fontFamily: 'Raleway',
       fontSize: '18px',
       fontStyle: 'normal',
       fontWeight: '500',
       lineHeight: '20px',
       letterSpacing: '0em',
       textAlign: 'left',
       color:'#03314B',
       paddingTop:'20px'
                  
       
   },
   expand:
   {
       
       paddingTop:'23.85px',
       height: '20.481667518615723px',
       width: '20.606668472290039px',
       left: '1.6966552734375px',
       borderRadius: '0px',
       color: '#042330'
       
       
   },
   library:
   {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    alignSelf: "center",
    color: "#03314B",
    left: 504,
    position: "absolute",
    top: 29,
    fontSize: 18,
   
   },

   account:
   {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#03314B',
    marginLeft: "auto",
    width: 40,
    height: 40,
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1px 1px',
   },
   expand2:
   {
    height: '20.481667518615723px',
    width: '20.606668472290039px',
    borderRadius: '0px',
    color: '#042330',
    marginLeft:'448px',
    marginTop:'25.85px',
    position: "relative",
    //  alignSelf: "center",
     
      top: 7.5,

   },
   main1:{
    position: "absolute",
    alignSelf: "center",
    left: 778,
    top: 0,
   },
   avatar:
   {
    marginLeft:'100px',
    marginTop:'23px',
       
   }
});

interface Props{
    handleChange:any;
}



const HeaderWithCategories=(props:Props)=>
{

    const classes=useStyles();

   

    return(


     

        <StyledEngineProvider injectFirst>
       <MainContainer>
        <MainContainer2>
         <Box>
          <Box className={classes.blinklistlogo}>
           < Icons source={BlinkistLogo} />
           </Box>

           <Box className={classes.search}>
           <SearchItem />
           </Box>
         
           <Box  style={{marginLeft:'30px'}}  >
           <Box className={classes.explore1}>
            <Button variant="text" style={{textTransform:'initial'}}
            endIcon= { <IconButton >
                <KeyboardArrowUpIcon className={classes.expand}
                 ></KeyboardArrowUpIcon>
                </IconButton>}
               onClick={(e)=>props.handleChange(e,0)} 
               sx={{':hover':{backgroundColor:'#FFFFFF'}}}
            >

          
                 <Typography variant="body1"  sx={{':hover':{ borderBottom:'2px solid #2CE080' }}}
                className={classes.explore}>
                   Explore  
               </Typography>
               

                </Button>   
            </Box>
           </Box>
          
         
         
          <Box >
         
               <Typography variant="body1" className={classes.library}>
                   My Library  
               </Typography>
             
           </Box>

           <Box className={classes.main1}>
         <Box className={classes.account}>
              <Button startIcon={ <Avatars alphabet="A" />    } endIcon= { <IconButton >
                   <KeyboardArrowDownIcon className={classes.expand2}
                      ></KeyboardArrowDownIcon>
                             </IconButton>}
               variant='text'  >
              </Button>
           </Box>
          </Box>
          

          </Box>
          </MainContainer2>

         
          </MainContainer>
          <ExploreNav />
    </StyledEngineProvider>

       

       

    );
}

export default   HeaderWithCategories