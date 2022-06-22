import { styled, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/Theme";
import { useEffect, useState } from "react";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Add } from "../../../images/add.svg";
import { Nav } from "../Nav/Nav";
import api from "../../../api/api";
import { Typography } from "@mui/material";
import {ButtonComponent} from "../../atoms/Buttons/Button";
import {Link } from 'react-router-dom';
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import { WindowSharp } from "@mui/icons-material";


let Principle = styled("div")({
    width: 284,
    height: 480,
    boxSizing: "border-box",
    border: "1px solid #E1ECFC",
    borderRadius: 8,
  });

  let TitleContainer= styled("div")({
    position: "relative",
    width: 224,
    height: 95,
    top: 15,
    left:10,
  });

  let ImageContainer = styled("div")({
    width: 284,
    height: 292,
  });

  let BottomContainer = styled("div") ({
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: 5,
    left: -10
  })
  
  let FirstLine = styled("div") ({
    left: 17.67,
    fontSize: 14,
    position: 'relative'
  })
  
  let SecondLine = styled("div") ({
    position: 'relative',
    left: 47.33,
    fontSize: 14
  })
  
  let ButtonDiv = styled("div") ({
    position: 'relative',
    top: 10
  })
  let useStyles = makeStyles({
    author: {
      position: "relative",
      top: 12,
      color: "#6D787E",
      fontSize: 16,
      fontWeight: 500,
      
    },
    title: {
      fontWeight: 700,
      fontSize: '18px !important',
      color: "#03314B",
    },
    image: {
      width: 16.67,
      height: 16.67,
    },
    finished: {
      color: '#0365F2 !important',
      position: 'relative',
      left: 111,
      top: 25,
      fontWeight: 500,
      fontSize: 16
    },
    button: {
      width: '100%',
      height: 52,
      color: '#0365F2 !important',
      "&:hover": {
        color: 'white !important',
        backgroundColor: '#0365F2 !important',
        fill: 'white'
      }
    },
    button1: {
      width: '100%',
      height: 52,
      color: '#ADD8E6 !important',
     
    },
   
  });

  export interface BookCardProps {
    title?: string;
    image?: string;
    author?: string;
    isFinished?: boolean;
    addToLibrary?: boolean;
    currentlyReading?: boolean;
    readAgain?: boolean;
    onClick?: () => void;
    id?: number;
    timeToRead?: string;
    numberOfReads?: string;
    value: number;
    className?: string;
    setPageStatus: any;
  }
  
  export type BookInfo = {
    id: number,
    title: string,
    author: string,
    image: string,
    timeToRead: string,
    numberOfReads: string,
    status: {
      isFinished: boolean,
      isTrending: boolean,
      justAdded: boolean,
      isFeatured: boolean
    }
  }
export const BookCard =(props: BookCardProps) =>{
    let styles = useStyles();
    let [iconStyle, setIconStyle] = useState({})

    let handleMouseEnterEvent = () => {
      setIconStyle({
        fill: 'white',
        stroke: 'white'
      })
    }
  
    let handleMouseLeaveEvent = () => {
      setIconStyle({})
    }
    
    const [bookInfo, setBookInfo] = useState<BookInfo>({
        id: 1,
        title: "",
        author: "",
        image: "",
        timeToRead: "",
        numberOfReads: "",
        status: {
          isFinished: false,
          isTrending: false,
          justAdded: false,
          isFeatured: false
        }
      });
      useEffect(() => {
        const retrieveBookById = async(val: number) => {
          if(val && val != 0) {
            const book = await api.get(`/booksStore/${val}`)
            const data = book.data
            setBookInfo(data)
          }
        }
    
        retrieveBookById(props.value)
      }, [props.value])
      
      let addToCurrentlyReading = async (num: number) => {
        
        bookInfo.status.isFinished = false
       // bookInfo.status.isTrending = false
    
        await api.put(`/booksStore/${num}`, bookInfo)
       //window.location.reload();
      }
    
      let updateFinish = async (num: number) => {
        if(bookInfo.status.isFinished) {
          bookInfo.status.isFinished = false
        }
        else {
          bookInfo.status.isFinished = true
        }
    
        await api.put(`/booksStore/${num}`, bookInfo)
        //window.location.reload();
        props.setPageStatus((prevState:any) =>prevState+1)
      }
    
      return(
        
          <ThemeProvider theme={theme}>
             
            <Principle>
            {/* 
             */}
            <div data-testid="addLib">
            <Link to='/bookview' >
              <ImageContainer>
                <img src={props.image} alt="img" />
              </ImageContainer>
              </Link>
              <TitleContainer>
               
                <Typography
            variant="subtitle1"
            textAlign='start'
            sx={{ color: "#03314B" }}
            className={styles.title}
          >
            {props.title}
                 </Typography>
                 
                 <Typography 
            variant="body1" 
            textAlign='start'
            className={styles.author}>
            {props.author}
                </Typography>
              </TitleContainer>
              <BottomContainer>
                <FirstLine>
                 {!(props.timeToRead)? null:(
                     <Nav source={<Time/>} variant="caption" title={props.timeToRead}  />
    
                 )}
                </FirstLine>
                <SecondLine>
                  {!(props.numberOfReads)? null:(
                      <Nav source={<User/>} variant="caption" title={props.numberOfReads} />
                  )}
                </SecondLine>
              </BottomContainer>
              {((props.isFinished) && (!props.addToLibrary))? (
            <Typography variant="body1" className={styles.finished} textAlign="start" onClick={() => updateFinish(props.value)}>
              Finished
            </Typography>
          ) : null}

          {(props.readAgain ) && (!props.addToLibrary) ? ( 
            <Typography variant="body1"  className={styles.finished} textAlign="start" onClick={() => updateFinish(props.value)} >
              Read again
            </Typography>
          ) : null}
           {((props.addToLibrary)&&(!props.isFinished) ) ? (
          <ButtonDiv>
            <ButtonComponent startIcon={<Add />} className={styles.button1} >Add To Library</ButtonComponent> 
          </ButtonDiv>
        ) : null}


        {((props.addToLibrary)&&(props.isFinished) ) ? (
          <ButtonDiv>
            <div  >
            <ButtonComponent  startIcon={<Add />} className={styles.button} onClick={() => addToCurrentlyReading(props.value)}  onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent}>Add To Library</ButtonComponent>
            </div>
          </ButtonDiv>
        ) : null}
           </div> 
           
            </Principle>
           
          </ThemeProvider>
      )
}