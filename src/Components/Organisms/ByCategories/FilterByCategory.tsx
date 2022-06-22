import { makeStyles} from "@mui/styles"
import {BookCard,BookInfo } from "../../molecules/BookCards/Bookcards";
import { useState } from "react"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import {styled} from "@mui/styles"
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

let use = makeStyles({
  
    title:{
        fontFamily: 'Cera Pro',
        fontStyle : 'normal',
        fontWeight: 'bolder',
        fontSize: 24,
        lineHeight: 30,
        color: '#03314B'
        },
    })


let TitleStyle = styled("div")({
    position:'relative',
    left : 0,
    top: -25,

});

interface BookCardProps{
    id: number;
    title: string;
    author: string;
    timeToRead: string;
    numberOfReads: string;
    image: string;
    status: {
      isTrending: boolean;
      isFinished: boolean;
      isFeatured: boolean;
      justAdded: boolean;
    };
  } 

  let DivStyle = styled("div")({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "30px 30px",
    width: 1200,
   
   
  });


interface Props{
    books?:Array<BookCardProps>;
    booksStatus?:string;
}

export const FilterByCategory=(props:Props) =>{
     
    const [books, setBooks] = useState<BookInfo[]>([
        {
          id: 0,
          title: "",
          author: "",
          timeToRead: "",
          numberOfReads: "",
          image: "",
          status: {
            isFinished: false,
            isFeatured: false,
            isTrending: false,
            justAdded: false,
          },
        },
      ]);
      const getBooks = async () => {
        const response = await api.get("/booksStore/");
        const data = response.data;
        console.log(data)
    
        setBooks(data);
      };
    getBooks();
     
      const [pageStatus, setPageStatus] = useState(0)
  
     
    
      //useEffect(() => {
       // getBooks();
      // }, [pageStatus]);
  

     


    
   
     let styles = use();
     const [title,setTitle] = useState("");
     let booksCategory =(titleStatus: string) =>{
         if(titleStatus === "TrendingBlinks"){
              setBooks(books.filter((book)=> book.status.isTrending))
              setTitle("Trending Blinks")
         } else if(titleStatus === "JustAdded"){
             setBooks(books.filter((book) => book.status.justAdded))
             setTitle("Just Added")
         }
         else if(titleStatus === "FeaturedBlinks"){
             setBooks(books.filter((book)=> book.status.isFeatured))
             setTitle("Featured Audio Blinks")
         }
     };
     useEffect(()=>{
       console.log(props.booksStatus)
         if(props.booksStatus !== undefined) booksCategory(props.booksStatus)
     })
     return(
         <>
         <TitleStyle>
         <Typography variant="h5" fontWeight='bold' textAlign="start" className={styles.title} >{title}</Typography>
         </TitleStyle>
          <DivStyle>
            {books.map((c,index)=>{
              return (
                <BookCard setPageStatus={setPageStatus}
                  id={c.id}
                  value={c.id}
                  key={index}
                  image= {c.image}
                  timeToRead={c.timeToRead}
                  numberOfReads={c.numberOfReads}
                  author={c.author}
                  isFinished={c.status.isFinished}
                  title={c.title}
                  addToLibrary={true}
                  />
              )
                  //readAgain={c.status.isFinished}
              // )
              //    let img2 = c.image
              //    if(img2==='./humanWork.svg'){
                  
              //     return (
              //       <BookCard setPageStatus={setPageStatus}
              //         id={c.id}
              //         value={c.id}
              //         key={index}
              //         image= {humanWork}
              //         timeToRead={c.timeToRead}
              //         numberOfReads={c.numberOfReads}
              //         author={c.author}
              //         isFinished={c.status.isFinished}
              //         title={c.title}
              //         addToLibrary={true}
              //         //readAgain={c.status.isFinished}
              //       />
              //     )}
              //     if(img2==='./beingBoss.svg'){
              //      return (
              //        <BookCard 
              //          id={c.id}
              //          value={c.id}
              //          key={index}
              //          image= {beingBoss}
              //          timeToRead={c.timeToRead}
              //          numberOfReads={c.numberOfReads}
              //          addToLibrary={true}
              //          author={c.author}
              //          isFinished={c.status.isFinished}
              //          title={c.title}
              //          //readAgain={c.status.isFinished}
    
              //        />
              //      )}
              //      if(img2==='./beyondEntrepreneurship.svg'){
              //        return (
              //          <BookCard 
              //            id={c.id}
              //            value={c.id}
              //            key={index}
              //            image= {be}
              //            timeToRead={c.timeToRead}
              //            numberOfReads={c.numberOfReads}
              //            addToLibrary={true}
              //            author={c.author}
              //            isFinished={c.status.isFinished}
              //            title={c.title}
              //            //readAgain={c.status.isFinished}
      
              //          />
              //        )}
              //        if(img2==='./theFateOfFood.svg'){
              //          return (
              //            <BookCard 
              //              id={c.id}
              //              value={c.id}
              //              key={index}
              //              image= {ff}
              //              timeToRead={c.timeToRead}
              //              numberOfReads={c.numberOfReads}
              //              addToLibrary={true}
              //              author={c.author}
              //              isFinished={c.status.isFinished}
              //              title={c.title}
              //              //readAgain={c.status.isFinished}
        
              //            />
              //          )}
              //          if(img2==='./livesOfStoics.svg'){
              //            return (
              //              <BookCard 
              //                id={c.id}
              //                value={c.id}
              //                key={index}
              //                image= {lvs}
              //                timeToRead={c.timeToRead}
              //                numberOfReads={c.numberOfReads}
              //                addToLibrary={true}
              //                author={c.author}
              //                isFinished={c.status.isFinished}
              //                title={c.title}
              //                //readAgain={c.status.isFinished}
          
              //              />
              //            )}
              //            if(img2==='./lovingYourBusiness.svg'){
              //              return (
              //                <BookCard 
              //                  id={c.id}
              //                  value={c.id}
              //                  key={index}
              //                  image= {love}
              //                  timeToRead={c.timeToRead}
              //                  numberOfReads={c.numberOfReads}
              //                  addToLibrary={true}
              //                  author={c.author}
              //                  isFinished={c.status.isFinished}
              //                  title={c.title}
              //                  //readAgain={c.status.isFinished}
            
              //                />
              //              )}
              //              if(img2==='./theLonelyCentury.svg'){
              //                return (
              //                  <BookCard 
              //                    id={c.id}
              //                    value={c.id}
              //                    key={index}
              //                    image= {lonely}
              //                    timeToRead={c.timeToRead}
              //                    numberOfReads={c.numberOfReads}
              //                    addToLibrary={true}
              //                    author={c.author}
              //                    isFinished={c.status.isFinished}
              //                    title={c.title}
              //                    //readAgain={c.status.isFinished}
              
              //                  />
              //                )}
              //                if(img2==='./dropshipping.svg'){
              //                  return (
              //                    <BookCard 
              //                      id={c.id}
              //                      value={c.id}
              //                      key={index}
              //                      image= {drop}
              //                      timeToRead={c.timeToRead}
              //                      numberOfReads={c.numberOfReads}
              //                      addToLibrary={true}
              //                      author={c.author}
              //                      isFinished={c.status.isFinished}
              //                      title={c.title}
              //                      readAgain={c.status.isFinished}
                
              //                    />
              //                  )}
              //                  if(img2==='./eatBetterFeelBetter.svg'){
              //                    return (
              //                      <BookCard 
              //                        id={c.id}
              //                        value={c.id}
              //                        key={index}
              //                        image= {eat}
              //                        timeToRead={c.timeToRead}
              //                        numberOfReads={c.numberOfReads}
              //                        addToLibrary={true}
              //                        author={c.author}
              //                        isFinished={c.status.isFinished}
              //                        title={c.title}
              //                        readAgain={c.status.isFinished}
                  
              //                      />
              //                    )}
              //                    if(img2==='./employee.svg'){
              //                      return (
              //                        <BookCard 
              //                          id={c.id}
              //                          value={c.id}
              //                          key={index}
              //                          image= {emp}
              //                          timeToRead={c.timeToRead}
              //                          numberOfReads={c.numberOfReads}
              //                          addToLibrary={true}
              //                          author={c.author}
              //                          isFinished={c.status.isFinished}
              //                          title={c.title}
              //                          readAgain={!c.status.isFinished}
                    
              //                        />
              //                      )}
              //                      if(img2==='./doesntHurtToAsk.svg'){
              //                        return (
              //                          <BookCard 
              //                            id={c.id}
              //                            value={c.id}
              //                            key={index}
              //                            image= {does}
              //                            timeToRead={c.timeToRead}
              //                            numberOfReads={c.numberOfReads}
              //                            addToLibrary={true}
              //                            author={c.author}
              //                            isFinished={c.status.isFinished}
              //                            title={c.title}
              //                            readAgain={!c.status.isFinished}
                      
              //                          />
              //                        )}
                

            })}
            
         </DivStyle>
         </>
     )
     



}

