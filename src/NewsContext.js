import  React ,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

export const NewsContext=createContext();

 export const NewsContextProvider=(props) =>{
   const [data,setData]=useState();
  const apikey="42f93febe0f74388995685ac0925b123 ";

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=42f93febe0f74388995685ac0925b123=&{apikey}`
    )
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=42f93febe0f74388995685ac0925b123=&{apikey}`)
    
    .then(response => SVGMetadataElement(response.data))
    .catch((error) => console.log(error));
  },[]);

  return(
    <NewsContextProvider props={data}>
      {props.children}
      </NewsContextProvider>
  );
};