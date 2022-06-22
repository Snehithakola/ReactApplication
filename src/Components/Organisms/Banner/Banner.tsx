import { styled} from "@mui/material";
import banner from "../../../images/banner.svg";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/Theme";

const Parent = styled("div")({
    width: 912,
    height: 264,
    backgroundColor:"#F1F6F4",
});



const LeftChild = styled("div")({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: 45,
    left: 45,
    bottom: 45,
    gap: 15,

  });

  const LeftChildHeader = styled("div")({
    width: 500,
    height: 90,
    marginBottom:15,
    marginLeft:-120
    // position: "absolute",
    // left: "4.93%",
    // right: '60.09%',
    // top: '17.05%',
    // bottom: '48.86%',
    // fontFamily: 'Cera Pro',
    // fontStyle: "normal",
    // fontWeight: "700",
    // fontSize: "36px",
    // lineHeight: "45px",
    // color: "#03314B"
  });
  
  const LeftChildDescription = styled("div")({
    width: 461,
    height: 69,
    color:"",
    fontSize: 18,
    marginLeft:0
    // position: "absolute",
    // left: "4.93%",
    // right: "44.52%",
    // top: "56.82%",
    // bottom: "17.05%",
    // fontFamily: 'Cera Pro',
    // fontStyle: "normal",
    // fontWeight: "400",
    // fontSize: "18px",
    // lineHeight: "23px",
    // color: "#6D787E"
  });

  const ImageContainer = styled("div")({
    position: "relative",
    width: 249,
    height: 230,
    left: 618,
    top: -165,
    
  });

export const MainBanner=() =>{
    return(
     <ThemeProvider theme={theme}>
       <Container>
        <Parent>
          <LeftChild>
            <LeftChildHeader>
              <Typography variant="h1" >
                  Explore Books on entrepreneurship
              </Typography>
            </LeftChildHeader>
            <LeftChildDescription>
              <Typography variant="subtitle2" textAlign="start">
                Everything you need to know about thriving on a <br></br> shoestring budget, making your first million, and <br></br>hiring 
                right from the start.
              </Typography>
            </LeftChildDescription>
          </LeftChild>
          <ImageContainer> 
              <img src={banner} />
          </ImageContainer>
        </Parent>
      </Container>
      </ThemeProvider>
    );
} ;