import './App.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Header = () => {
  return(
    <header className='flex justify-center items-center h-16 gap-x-6 border-gray-500 border-b'>
      <h1 class='text-3xl font-display font-medium'>Shelfd</h1>
      <input type="text" name="search" class='w-3/6 rounded outline outline-slate-400 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
      <PersonOutlineIcon class='hover:scale-110 h-8 transform transition duration-50 cursor-pointer'/>
      <PeopleOutlineIcon class='hover:scale-110 h-8 transform transition duration-50 cursor-not-allowed'/> {/* will change cursor once functional */}
    </header>
  )
}


function App() {
  return (
    <div className="App font-sans">
      <Header/>
      asdasdas
    </div>
  );
}

export default App;
