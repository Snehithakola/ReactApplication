import HeaderBar from "./Components/Organisms/HeaderBar/HeaderBar";
import HeaderWithCategories from "./Components/Organisms/HeaderWithCategory/HeaderWithCategory";
import { TabsRest } from "./Components/Organisms/Tabs/Tabs";
import { Footer } from "./Components/Organisms/Footer/Footer";
import { styled , makeStyles} from "@material-ui/styles";
import {useState} from 'react';
import {Typography} from "@mui/material";
let Reset = styled('div')({

    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    listStyle: 'none',

})
let BodyContainer= styled('div')({

   position:'relative',
   left: 490,
   top: 100,

})
let MyLibraryConrainer=styled('div')({

    position:'relative',
    left :-323,
    top: 50,

})

let FooterContainer = styled("div") ({
    position: 'relative',
    top: 452
})
let useStyles = makeStyles({

    SynopsisTypography:{

        lineHeight: "20.11px ",
        fontSize: "30px !important",
        color: '#03314B !important',
        position: 'relative',
        fontFamily:'Cera Pro',
        fontWeight:700

    },
    Egg:{

        position: "relative",
        left: 510,
        top: 200,
        
    }
})
export const Page2 =()=>{
    let styles = useStyles()
  
    const [value,setValue]=useState(0);
  
      const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
       setValue(newValue);
       
     }

    return(

        <>
        <Reset>
        {value === 0 &&   <HeaderBar handleChange={handleChange}/>}
        {value === 1 && <HeaderWithCategories handleChange={handleChange} />}
       <MyLibraryConrainer>
         <Typography variant="h3" fontWeight='bold' marginLeft="300px" className={styles.SynopsisTypography}>
         My Library
         </Typography>
         </MyLibraryConrainer>
         
        <BodyContainer>
            <TabsRest />
        </BodyContainer>
        <FooterContainer>
            <Footer />
        </FooterContainer>
        </Reset>
        </>
    );
}