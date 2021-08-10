// import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';
import { NewsContextProvider } from './NewsContext';
import News from "./components/News";
import "./App.css";

// import { Search } from 'semantic-ui-react';

// const [news,setNews]=const context = useContext(contextValue)
const App=()=>{
  return(
    
       <NewsContextProvider>
         <>
     <ul>
    <h1>  List Top Headlines  </h1> 
    
     <h2> Filter Top Headlines: </h2>
     <li> By country </li>
    <li> By category</li>
    </ul>
   <input type="text/jsavascript"> input search keyword </input>
    </>
          <News/>
       </NewsContextProvider>
  );

}
export default App;