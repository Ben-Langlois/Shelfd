import './App.scss';
import $, { event } from 'jquery';
import Header from './header.js';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const hideCTA = (e) => {
console.log(e)
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
      <div id='action-container' className='w-2/4 content-center text-left p-6 m-6 border-400 border-l'> {/* login/register buttons (that lead to form) */}
        <div id='calltoaction' className=''>
          <h1 className='text-5xl font-semibold font-display'>Discover, Discuss, and Track your next reads along tens of other users</h1>
          <div id='form-selector' className='flex flex-row gap-4 pt-6'>
            <Button size='large' onClick={() => hideCTA(event.target)}>Login</Button>          
            <Button size='large' variant="outlined" onClick={{}}>Sign Up</Button>        
          </div>
        </div>
        <div id='login' className='hidden'> {/* login form to display */}
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button size='large' variant="outlined" onClick={{}}>Login</Button>        
        </div>
        <div id='signup' className='hidden'> {/* signup form to display */}

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