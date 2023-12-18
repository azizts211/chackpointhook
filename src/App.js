import{useState} from "react"
import './App.css';
import {films} from "./data"
import MovieList from "./MovieList"
import AddMovies from "./AddMovies";
import FilterMovie from "./FilterMovie";
import { Routes,Route } from "react-router-dom";
import Profile from "./Profile";
function App() {
  let [movies,setMovies]=useState(films)
  let [text,setText]=useState("")
  console.log(text,"hello")
  const addfilm=(newf)=>{
    setMovies([...movies,newf])
  }
  return (
    <div className="App">
       
   
    
<Routes>
<Route   path="/" element={  
  <>
     <FilterMovie setText={setText} />

   <MovieList movies={movies} text={text} />
   <AddMovies addfilm={addfilm}/>
   </>
   }/>


<Route   path="/Profile/:idfilm" element={   <Profile/>}/>
</Routes>

    </div>
  );
}

export default App;
