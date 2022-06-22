import { Box, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "../../../images/searchicon.svg";
import api from "../../../api/api";
import { useState, useEffect } from "react";
import {BookCard,BookInfo } from "../../molecules/BookCards/Bookcards";
import { Link } from "react-router-dom";

const useStyles=makeStyles({
    inputElement: {
        fontSize: "25px",
        border: "none",
        width: 300,
        height: 24,
        fontFamily: 'Cera Pro',
        marginLeft: "32px",
        "&:focus": {
          outline: "none",
        },
      },
      boxElement: {
        width: 598,
        height: 28,
        backgroundColor: "",
        borderBottom: "1.5px solid #BAC9CF",
        display: "flex",
        flexDirection: "row",
      },
      imageDiv: {
        marginLeft: "2.96px",
        marginTop: "2.96px",
        width: "18.39px",
        height: "18.39px",
      },
     
});

export const SearchBar =() =>{

  const [filteredData, setFilteredData] = useState<any>(null);
  const SearchFun = async(event: any)=>{
    let input_data= event.target.value
  
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

    setBooks(data);
  };
   useEffect(() => {
    getBooks();
  }, [books]);

   
  setFilteredData( 
    books.filter((book:any)=>{
      for(let prop in book)
      {
        console.log(book[prop])
        if(input_data.length>0 && book[prop].length>=input_data.length && book[prop].substr(0,input_data.length)===input_data) 
        {
          return true;
        }
      }
      return false;
    })
    .map((book:any)=>{
      return {
        id:book.id,
        name:book.title,
        authorName:book.author,
      }
    })
  )
}
    const styleClass = useStyles();
    return(
        <Box className={styleClass.boxElement}>
          <div className={styleClass.imageDiv}>
            <img src={Search} alt='SearchLogo' />
          </div>
          <input type="text" placeholder="Search by title or author"
          className={styleClass.inputElement}  id="serach" onKeyUp= {SearchFun}/>
          <Box
        sx={{
          backgroundColor: "white",
          height: "auto",
          width: "100%",
        }}
      >
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "absolute",
            top: "80px",
            fontFamily: "Cera",
          }}
        >
          {filteredData !== null &&
            filteredData.map((value: any) => (
              <Link
                to={`/book-info/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem
                  key={`${value.id}`}
                  sx={{ display: "flex" }}
                  data-testid="result"
                >
                  <Typography sx={{ fontWeight: "bold", fontFamily: "Cera" }}>
                    {value.name}
                  </Typography>
                  <Typography sx={{ color: "gray", marginLeft: "10px" }}>
                    by {value.authorName}
                  </Typography>
                </ListItem>
              </Link>
            ))}
        </List>
      </Box>
             
        </Box>
    );
};

// const SearchFun = async(event: any)=>{
//     let input_data= event.target.value
  
//   const [books, setBooks] = useState<BookInfo[]>([
//     {
//       id: 0,
//       title: "",
//       author: "",
//       timeToRead: "",
//       numberOfReads: "",
//       image: "",
//       status: {
//         isFinished: false,
//         isFeatured: false,
//         isTrending: false,
//         justAdded: false,
//       },
//     },
//   ]);

//   const getBooks = async () => {
//     const response = await api.get("/booksStore/");
//     const data = response.data;

//     setBooks(data);
//   };
//    useEffect(() => {
//     getBooks();
//   }, []);

//   console.log(books[0].author);


// }
