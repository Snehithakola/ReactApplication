import { MainBanner } from './Components/Organisms/Banner/Banner' 
//import { SearchBar } from  './Components/molecules/SearchBar/Search'
import { FilterByCategory } from './Components/Organisms/ByCategories/FilterByCategory'
import { Footer } from './Components/Organisms/Footer/Footer' 
import HeaderBar from "./Components/Organisms/HeaderBar/HeaderBar"
import { styled } from "@mui/styles"
import {useState} from 'react'
import HeaderWithCategories from "./Components/Organisms/HeaderWithCategory/HeaderWithCategory"

let BodyContainer = styled("div")({
    width: 912,
    position: 'relative',
    left: 480,
})



let SearchContainer = styled("div") ({
    position: 'relative',
    top: 84,
    left: 25
})

let TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 160,
    left: 25
})

let JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 220,
    left: 25
})

let FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 306,
    left: 25
})

let Footers = styled("div") ({
    position: 'relative',
   
    top: 452
})


export const Entrepreneurship = () => {
    const [value,setValue]=useState(0);

    const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
     setValue(newValue);
     
   }
    
    return (
        <div  >
            
         {value ===0 &&   <HeaderBar handleChange={handleChange}/>}
         {value === 1 && <HeaderWithCategories handleChange={handleChange} />}
            <BodyContainer>
                <MainBanner />
                {/* <SearchContainer>
                 <SearchBar />
                </SearchContainer> */}
                <TrendingBlinks>
                <FilterByCategory  booksStatus="TrendingBlinks" />
                </TrendingBlinks>
                <JustAddedBlinks>
                <FilterByCategory  booksStatus="JustAdded" />
                </JustAddedBlinks>
                <FeaturedBlinks>
                <FilterByCategory  booksStatus="FeaturedBlinks" />
                </FeaturedBlinks>
            </BodyContainer>
            <Footers>
            <Footer />
            </Footers>
           
        </div>
    )
}