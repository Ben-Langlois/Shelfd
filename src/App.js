import './App.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Header = () => {
  return(
    <header id='header' className='flex justify-center items-center h-20 gap-x-6 border-slate-400 border-b'>
      <h1 className='text-3xl font-display font-medium'>Shelfd</h1>
      <input type="text" name="search" className='w-3/6 rounded outline outline-slate-400 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
      <PersonOutlineIcon className='hover:scale-110 h-8 transform transition duration-50 cursor-pointer'/>
      <PeopleOutlineIcon className='hover:scale-110 h-8 transform transition duration-50 cursor-not-allowed'/> {/* will change cursor once functional */}
    </header>
  )
}

const Landing = () => {
  return(
    <div id='landing' className='flex flex-auto justify-center items-center'>
      <div className='grid grid-cols-5 gap-6 w-2/4'> {/* grid of books, maybe 'featured' books? */}
        <div className='outline outline-red-400 rounded'>asdas</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>asdas</div>
        <div className='outline outline-red-400 rounded'>asdas</div>
        <div className='outline outline-red-400 rounded'>asdas</div>
        <div className='outline outline-red-400 rounded'>asdas</div>
        <div className='outline outline-red-400 rounded'>asdas</div>
        <div className='outline outline-red-400 rounded'>asdas</div>
      </div>
      <div> {/* login/register buttons (that lead to form) */}
        Login form will go here
      </div>
    </div>
  )
} 


function App() {
  return (
    <div className="App font-sans flex flex-col">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
