import { Nav } from "../Nav/Nav";
import {ExploreData} from "../../../Data/ExploreData"
import { Box, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";
//import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

const Principle = styled("div")({
    width: "100%",
    height: "100%",
    zIndex:6,
   
  });
  
  let useStyles = makeStyles({
      mainDiv: {
          boxSizing: 'border-box',
          width: "100%",
         // minWidth: "100%",
          height: 430,
          zIndex: 5,
          position: 'absolute',
          backgroundColor: "#F1F6F4"
      },
      firstBox: {
          display: 'flex',
          flexDirection: 'row',
          gap: 150,
          position: 'relative',
          top: 30,
          paddingBottom: 24,
          borderBottom: '1px solid #042330',
          width: 940,
          margin: '0 auto',
          zIndex: 2
      },
      secondBox: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 940,
          position: 'relative',
          margin: '0 auto',
          top: 40,
          gap: '16px 140px',
          justifyContent: 'flex-start',
          alignContent: 'flexStart'
      },
      navItem: {
          display: 'flex',
          flexDirection: 'row',
          width: 182
      },
      highlight: {
          fontWeight: '700 !important',
          color: '#116BE9',
          fontFamily: 'Cera Pro'
      },
      textAlign: {
          alignSelf: "center", 
          fontFamily: 'Cera Pro !important', 
          fontWeight: '400 !important'
      },
      icon: {
        marginRight: 12,
        width: 16,
        height: 22.05
      }
  });
  
  export const ExploreNav = () => {
    let styles = useStyles();
  
    
  
    return (
      <Principle>
        {/* <Router> */}
        <div className={styles.mainDiv}>
          <Box className={styles.firstBox}>
              <Typography className={styles.highlight}>Explore by category</Typography>
              <Typography>See recently added titles</Typography>
              <Typography>See popular titles</Typography>
          </Box>
          <Link to ='/bookcat' style={{ textDecoration: 'none' , color: 'black'}} >
          <Box className={styles.secondBox}>
          
            {ExploreData.map((data) => {
              return (
                <div className={styles.navItem}>
                  <Nav source={data.icon}  title={data.title} variant="body2"  />
                </div>
              );
            })}
           
          </Box>
          </Link>
        </div>
      
      </Principle>
    );
  };
  