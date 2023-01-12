import MovieCarousel from './components/MovieCarousel';
import posterImg from './resources/pulpfiction.jpg';
import './css/App.css';

function App() {
  let movies = [
    {poster:posterImg, title:"title1", summary:"summary"},
    {poster:posterImg, title:"title12", summary:"summary2"},
    {poster:posterImg, title:"title3", summary:"summary3"},
    {poster:posterImg, title:"title4", summary:"summary4"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"},
    {poster:posterImg, title:"title5", summary:"summary5"}
  ]
  return (
    <MovieCarousel movies={movies}/>
  );
}

export default App;
