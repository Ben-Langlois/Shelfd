import './App.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Button from '@mui/material/Button';


const Header = () => {
  return(
    <header id='header' className='flex justify-center items-center h-20 gap-x-6'> {/*border-slate-400 border-b on scroll down */}
      <h1 className='text-3xl font-display font-medium'>Shelfd</h1>
      <input type="text" name="search" className='w-3/6 rounded outline outline-slate-400 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
      <PersonOutlineIcon className='hover:scale-110 h-8 transform transition duration-50 cursor-pointer'/>
      <PeopleOutlineIcon className='hover:scale-110 h-8 transform transition duration-50 cursor-not-allowed'/> {/* will change cursor once functional */}
    </header>
  )
}

const Landing = () => {
  return(
    <div id='landing' className='flex flex-auto p-6 '>
      <div className='grid grid-cols-5 grid-rows-5 gap-6 w-2/4 float-left'> {/* grid of books, maybe 'featured' books? */}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
      
      </div>
      <div className='float-right w-2/4 content-center text-left p-3 m-6 border-400 border-l'> {/* login/register buttons (that lead to form) */}
        <h1 className='text-5xl font-semibold font-display'>Join the tens of other readers sharing and discussing their favourite books</h1>
        <div id='form-selector' className='flex flex-row gap-4 pt-4'>
          <Button size='large'>Login</Button>          
          <Button size='large' variant="outlined">Sign Up</Button>        
        </div>

      </div>
    </div>
  )
} 


function App() {
  return (
    <div className="App font-sans flex flex-col h-screen">
      <Header />
      <Landing />
    </div>
  );
}

export default App;