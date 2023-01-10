import MovieCarousel from './components/MovieCarousel';
import posterImg from './resources/pulpfiction.jpg';
import './css/App.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {
  let movies = [
    {poster:posterImg, title:"title1", summary:"summary"},
    {poster:posterImg, title:"title12", summary:"summary2"},
    {poster:posterImg, title:"title3", summary:"summary3"},
    {poster:posterImg, title:"title4", summary:"summary4"},
    {poster:posterImg, title:"title5", summary:"summary5"}
  ]
  return (
    <div className="App">
      <MovieCarousel movies={movies}/>
    </div>
  );
}

export default App;
