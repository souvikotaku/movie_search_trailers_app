import './App.css';
import MovieList from './components/MovieList';
import {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const[moviedata,setMoviedata] = useState([]);
  const[moviesearch,setMoviesearch] = useState('');





  useEffect(()=>{
       
    
    async function fetchnow(){

      
      const url = `https://www.omdbapi.com/?s=${moviesearch}&apikey=b985f37b`;
      const response = await fetch (url);
      const responseJson = await response.json();
      console.log(responseJson);

      if(responseJson.Search){
        setMoviedata(responseJson.Search);

      }

     

     
  
      // const req = await axios.get(
      //   "http://localhost:5000/exercises/"
      // );
    // console.log(req.data)
      // setUsername(req.data[0].username);
      // setDesc(req.data[0].description);

    }
    fetchnow();

  },[moviesearch])


  // async function searchMovie(){
  //   const url = `http://www.omdbapi.com/?s=${moviesearch}&apikey=b985f37b`;
  //     const response = await fetch (url);
  //     const responseJson = await response.json();
  //     console.log(responseJson);

  //     setMoviedata(responseJson.Search);

  // }

  return (
   <>

<video src='/videos/nightvid.mp4' autoPlay loop muted style={{width:'100%',height:'auto'}}/>

   

   <div className='container-fluid mainBox'>

     <br/>
     <input
     
      className='form-control col col-sm-4'
     defaultValue={moviesearch}
     placeholder='Enter movie name'
      onChange={(event)=>{
        setMoviesearch(event.target.value);
        document.querySelector('.shapeBox').style.opacity = '100%';
        document.querySelector('.header').style.display = 'block';
        document.querySelector('.hero-container').style.display = 'none';
      }}
     />
     <br/>
     <div className='hero-container'>
   <h1>Souvik's movie app</h1>
   </div>
     {/* <div><button className='btn btn-success btn-md'onClick={searchMovie}>Search</button></div> */}
     <br/>
     <h1 style={{color:'white',display:'none'}} className='header'>Movies</h1>
     <div className='shapeBox row' >
     <MovieList
       moviedata = {moviedata} 
     />
     </div>
     
   </div>
    
   </>
  );
}

export default App;
