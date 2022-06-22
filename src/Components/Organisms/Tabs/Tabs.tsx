import { TabContext, TabList } from "@mui/lab";
import { useState } from "react";
//import { makeStyles } from "@mui/styles";
import { Tab , ThemeProvider, createTheme} from "@mui/material";
import { TabPanel } from "@mui/lab";
import { useEffect } from "react";
import {styled} from "@mui/styles";
import {BookCard,BookInfo } from "../../molecules/BookCards/Bookcards";
import api from "../../../api/api";
import beingBoss from "../../../images/beingBoss.svg";
import humanWork from '../../../images/humanWork.svg';
import be from '../../../images/beyondEntrepreneurship.svg'
import emp from '../../../images/employee.svg'
import ff from '../../../images/theFateOfFood.svg'
import lvs from '../../../images/livesOfStoics.svg'
import love from '../../../images/lovingYourBusiness.svg'
import lonely from '../../../images/theLonelyCentury.svg'
import eat from '../../../images/eatBetterFeelBetter.svg'
import drop from '../../../images/dropshipping.svg'
import does from '../../../images/doesntHurtToAsk.svg'
//import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#22C870'
    }
  }
});


let Panel= styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "25px 30px",
  width: 922,
  })

  let Main = styled("div")({
    marginLeft: 20,
  })

export const TabsRest =()=>{
    const[value, setValue] = useState("1");
    
    const change = (event: React.SyntheticEvent, newValue: string) => {
      console.log(event)
      setValue(newValue);
    };
    const [books, setBooks] = useState<BookInfo[]>([
    
    ]);
    //const [currentlyReadingBooks, setCRBooks] = useState<
    const getBooks = async () => {
      const response = await api.get("/booksStore/");
      const data = response.data;
  
      setBooks(data);
    };
  
   const [pageStatus, setPageStatus] = useState(0)
  
    
  
    useEffect(() => {
      getBooks();
    }, [pageStatus]);

  

    return(
      
         <TabContext value={value}>
          <Main>
          <ThemeProvider theme = {theme}>
          <TabList 
             textColor = "primary"

          onChange={change}
          
          >
            <Tab label="Currently Reading"
              color = "primary"
              value="1"
              sx={{
                width: 304,
                alignItems: "flex-start",
              }}></Tab>
              <Tab  label="Finished"
                value="2"
                sx={{
                  width: 304,
                  alignItems: "flex-start",
              }}
              ></Tab>

          </TabList>
          </ThemeProvider>
          </Main>
          <TabPanel value="1">
            <Panel>
             
             {books.filter((b)=> !b.status.isFinished)
             .map((c,index)=>{
               return (
                <BookCard setPageStatus={setPageStatus}
                       id={c.id}
                       value={c.id}
                       key={index}
                       image= {c.image}
                       timeToRead={c.timeToRead}
                       numberOfReads={c.numberOfReads}
                       author={c.author}
                       isFinished={!c.status.isFinished}
                       title={c.title}
                     />
               )}
            //   let img2 = c.image
            //   if(img2==='./humanWork.svg'){
            //     console.log(c.id)
            //    return (
            //      <BookCard 
            //        id={c.id}
            //        value={c.id}
            //        key={index}
            //        image= {humanWork}
            //        timeToRead={c.timeToRead}
            //        numberOfReads={c.numberOfReads}
            //        author={c.author}
            //        isFinished={!c.status.isFinished}
            //        title={c.title}
            //      />
            //    )}
            //    if(img2==='./beingBoss.svg'){
            //     return (
            //       <BookCard
            //         id={c.id}
            //         value={c.id}
            //         key={index}
            //         image= {beingBoss}
            //         timeToRead={c.timeToRead}
            //         numberOfReads={c.numberOfReads}
            //         author={c.author}
            //         isFinished={!c.status.isFinished}
            //         title={c.title}
            //         //readAgain={c.status.isFinished}

            //       />
            //     )}
            //     if(img2==='./beyondEntrepreneurship.svg'){
            //       return (
            //         <BookCard 
            //           id={c.id}
            //           value={c.id}
            //           key={index}
            //           image= {be}
            //           timeToRead={c.timeToRead}
            //           numberOfReads={c.numberOfReads}
                     
            //           author={c.author}
            //           isFinished={!c.status.isFinished}
            //           title={c.title}
            //           //readAgain={c.status.isFinished}
   
            //         />
            //       )}
            //       if(img2==='./theFateOfFood.svg'){
            //         return (
            //           <BookCard 
            //             id={c.id}
            //             value={c.id}
            //             key={index}
            //             image= {ff}
            //             timeToRead={c.timeToRead}
            //             numberOfReads={c.numberOfReads}

            //             author={c.author}
            //             isFinished={!c.status.isFinished}
            //             title={c.title}
            //             //readAgain={c.status.isFinished}
     
            //           />
            //         )}
            //         if(img2==='./livesOfStoics.svg'){
            //           return (
            //             <BookCard 
            //               id={c.id}
            //               value={c.id}
            //               key={index}
            //               image= {lvs}
            //               timeToRead={c.timeToRead}
            //               numberOfReads={c.numberOfReads}
                         
            //               author={c.author}
            //               isFinished={!c.status.isFinished}
            //               title={c.title}
            //               //readAgain={c.status.isFinished}
       
            //             />
            //           )}
            //           if(img2==='./lovingYourBusiness.svg'){
            //             return (
            //               <BookCard 
            //                 id={c.id}
            //                 value={c.id}
            //                 key={index}
            //                 image= {love}
            //                 timeToRead={c.timeToRead}
            //                 numberOfReads={c.numberOfReads}
                           
            //                 author={c.author}
            //                 isFinished={!c.status.isFinished}
            //                 title={c.title}
            //                 //readAgain={c.status.isFinished}
         
            //               />
            //             )}
            //             if(img2==='./theLonelyCentury.svg'){
            //               return (
            //                 <BookCard 
            //                   id={c.id}
            //                   value={c.id}
            //                   key={index}
            //                   image= {lonely}
            //                   timeToRead={c.timeToRead}
            //                   numberOfReads={c.numberOfReads}
                             
            //                   author={c.author}
            //                   isFinished={!c.status.isFinished}
            //                   title={c.title}
            //                   //readAgain={c.status.isFinished}
           
            //                 />
            //               )}
            //               if(img2==='./dropshipping.svg'){
            //                 return (
            //                   <BookCard 
            //                     id={c.id}
            //                     value={c.id}
            //                     key={index}
            //                     image= {drop}
            //                     timeToRead={c.timeToRead}
            //                     numberOfReads={c.numberOfReads}
                               
            //                     author={c.author}
            //                     isFinished={!c.status.isFinished}
            //                     title={c.title}
            //                     //readAgain={c.status.isFinished}
             
            //                   />
            //                 )}
            //                 if(img2==='./eatBetterFeelBetter.svg'){
            //                   return (
            //                     <BookCard 
            //                       id={c.id}
            //                       value={c.id}
            //                       key={index}
            //                       image= {eat}
            //                       timeToRead={c.timeToRead}
            //                       numberOfReads={c.numberOfReads}
                                 
            //                       author={c.author}
            //                       isFinished={!c.status.isFinished}
            //                       title={c.title}
            //                       //readAgain={c.status.isFinished}
               
            //                     />
            //                   )}
            //                   if(img2==='./employee.svg'){
            //                     return (
            //                       <BookCard 
            //                         id={c.id}
            //                         value={c.id}
            //                         key={index}
            //                         image= {emp}
            //                         timeToRead={c.timeToRead}
            //                         numberOfReads={c.numberOfReads}
                                   
            //                         author={c.author}
            //                         isFinished={!c.status.isFinished}
            //                         title={c.title}
            //                         readAgain={c.status.isFinished}
                 
            //                       />
            //                     )}
            //                     if(img2==='./doesntHurtToAsk.svg'){
            //                       return (
            //                         <BookCard 
            //                           id={c.id}
            //                           value={c.id}
            //                           key={index}
            //                           image= {does}
            //                           timeToRead={c.timeToRead}
            //                           numberOfReads={c.numberOfReads}
                                      
            //                           author={c.author}
            //                           isFinished={!c.status.isFinished}
            //                           title={c.title}
            //                           //readAgain={!c.status.isFinished}
                   
            //                         />
            //                       )}
                              
            //  }
            )}
            </Panel>
          </TabPanel>
          <TabPanel value="2">
          
            <Panel>
              
             {books.filter((b)=> b.status.isFinished)
             .map((c,index)=>{
              return (
                <BookCard setPageStatus={setPageStatus}
                       id={c.id}
                       value={c.id}
                       key={index}
                       image= {c.image}
                       timeToRead={c.timeToRead}
                       numberOfReads={c.numberOfReads}
                       author={c.author}
                       //isFinished={!c.status.isFinished}
                       title={c.title}
                       readAgain={c.status.isFinished}

                     />
               )
              //  console.log(c.image)
              //  let img1 = c.image
              //  if(img1==='./humanWork.svg'){
              //  return (
              //    <BookCard 
              //      id={c.id}
              //      value={c.id}
              //      key={index}
              //      image= {humanWork}
              //      timeToRead={c.timeToRead}
              //      numberOfReads={c.numberOfReads}
                  
              //      author={c.author}
              //      //isFinished={c.status.isFinished}
              //      title={c.title}
              //      readAgain={c.status.isFinished}

              //    />
              //  )}
              //  if(img1==='./beingBoss.svg'){
              //   return (
              //     <BookCard 
              //       id={c.id}
              //       value={c.id}
              //       key={index}
              //       image= {beingBoss}
              //       timeToRead={c.timeToRead}
              //       numberOfReads={c.numberOfReads}
                   
              //       author={c.author}
              //       //isFinished={c.status.isFinished}
              //       title={c.title}
              //       readAgain={c.status.isFinished}
 
              //     />
              //   )}
              //   if(img1==='./beyondEntrepreneurship.svg'){
              //     return (
              //       <BookCard 
              //         id={c.id}
              //         value={c.id}
              //         key={index}
              //         image= {be}
              //         timeToRead={c.timeToRead}
              //         numberOfReads={c.numberOfReads}
                     
              //         author={c.author}
              //         //isFinished={c.status.isFinished}
              //         title={c.title}
              //         readAgain={c.status.isFinished}
   
              //       />
              //     )}
              //     if(img1==='./employee.svg'){
              //       return (
              //         <BookCard 
              //           id={c.id}
              //           value={c.id}
              //           key={index}
              //           image= {emp}
              //           timeToRead={c.timeToRead}
              //           numberOfReads={c.numberOfReads}
                       
              //           author={c.author}
              //           //isFinished={c.status.isFinished}
              //           title={c.title}
              //           readAgain={c.status.isFinished}
     
              //         />
              //       )}
              //       if(img1==='./theFateOfFood.svg'){
              //         return (
              //           <BookCard 
              //             id={c.id}
              //             value={c.id}
              //             key={index}
              //             image= {ff}
              //             timeToRead={c.timeToRead}
              //             numberOfReads={c.numberOfReads}
                         
              //             author={c.author}
              //             //isFinished={c.status.isFinished}
              //             title={c.title}
              //             readAgain={c.status.isFinished}
       
              //           />
              //         )}
              //         if(img1==='./livesOfStoics.svg'){
              //           return (
              //             <BookCard 
              //               id={c.id}
              //               value={c.id}
              //               key={index}
              //               image= {lvs}
              //               timeToRead={c.timeToRead}
              //               numberOfReads={c.numberOfReads}
                           
              //               author={c.author}
              //               //isFinished={c.status.isFinished}
              //               title={c.title}
              //               readAgain={c.status.isFinished}
         
              //             />
              //           )}
              //           if(img1==='./lovingYourBusiness.svg'){
              //             return (
              //               <BookCard 
              //                 id={c.id}
              //                 value={c.id}
              //                 key={index}
              //                 image= {love}
              //                 timeToRead={c.timeToRead}
              //                 numberOfReads={c.numberOfReads}
                             
              //                 author={c.author}
              //                 //isFinished={c.status.isFinished}
              //                 title={c.title}
              //                 readAgain={c.status.isFinished}
           
              //               />
              //             )}
              //             if(img1==='./theLonelyCentury.svg'){
              //               return (
              //                 <BookCard 
              //                   id={c.id}
              //                   value={c.id}
              //                   key={index}
              //                   image= {lonely}
              //                   timeToRead={c.timeToRead}
              //                   numberOfReads={c.numberOfReads}
                               
              //                   author={c.author}
              //                   //isFinished={c.status.isFinished}
              //                   title={c.title}
              //                   readAgain={c.status.isFinished}
             
              //                 />
              //               )}
              //               if(img1==='./dropshipping.svg'){
              //                 return (
              //                   <BookCard 
              //                     id={c.id}
              //                     value={c.id}
              //                     key={index}
              //                     image= {drop}
              //                     timeToRead={c.timeToRead}
              //                     numberOfReads={c.numberOfReads}
                                 
              //                     author={c.author}
              //                     //isFinished={c.status.isFinished}
              //                     title={c.title}
              //                     readAgain={c.status.isFinished}
               
              //                   />
              //                 )}
              //                 if(img1==='./eatBetterFeelBetter.svg'){
              //                   return (
              //                     <BookCard 
              //                       id={c.id}
              //                       value={c.id}
              //                       key={index}
              //                       image= {eat}
              //                       timeToRead={c.timeToRead}
              //                       numberOfReads={c.numberOfReads}
                                   
              //                       author={c.author}
              //                       //isFinished={c.status.isFinished}
              //                       title={c.title}
              //                       readAgain={c.status.isFinished}
                 
              //                     />
              //                   )}
              //                   if(img1==='./doesntHurtToAsk.svg'){
              //                     return (
              //                       <BookCard 
              //                         id={c.id}
              //                         value={c.id}
              //                         key={index}
              //                         image= {does}
              //                         timeToRead={c.timeToRead}
              //                         numberOfReads={c.numberOfReads}
                                     
              //                         author={c.author}
              //                         //isFinished={c.status.isFinished}
              //                         title={c.title}
              //                         readAgain={c.status.isFinished}
                   
              //                       />
              //                     )}
                                  
                                  
             })}
            </Panel>
          </TabPanel>
         </TabContext>
         

    )
}