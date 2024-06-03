import './App.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Header = () => {
  return(
    <header className='flex justify-center items-center h-16 gap-x-6'>
      <h1 class='font-bold text-2xl'>Shelfd</h1>
      <input type="text" name="search" class='w-3/6 rounded outline outline-slate-400 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
      <PersonOutlineIcon />
      <PeopleOutlineIcon />
    </header>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
