import './App.scss';
import $, { event } from 'jquery';
import Header from './header.js';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const toggleForm = (form) => {
  $('#login').toggleClass('hidden');
  $('#signup').toggleClass('hidden');
}

const Landing = () => {
  return(
    <div id='landing' className='flex flex-auto p-6 '>
      <div className='grid grid-cols-6 grid-rows-5 gap-6 w-2/4 float-left'> {/* grid of books, maybe 'featured' books? */}
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
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
        <div className='outline outline-red-400 rounded'>&nbsp;</div>  {/* Will replace will API or something, just divs to figure out css*/}
      
      </div>
      <div id='action-container' className='w-2/4 content-center text-left p-6 m-6 border-400 border-l transition-opacity duration-1000'> {/* login/register buttons (that lead to form) */}
        <div id='calltoaction' className='opacity-100 mb-6'>
          <h1 className='text-5xl font-semibold font-display'>Discover, Discuss, and Track your next reads along tens of other users</h1>
        </div>
        <div id='login' className='flex flex-col flex-wrap gap-6'> {/* login form to display */}
          <TextField id="outlined-basic" required label="Email" variant="outlined" />
          <TextField id="outlined-basic" required label="Password" variant="outlined" />
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={{}}>Login</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm()}>Dont have an account?</Button>            
          </div>
        </div>
        <div id='signup' className='hidden flex flex-col flex-wrap gap-6'> {/* signup form to display */}
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" required label="Email" variant="outlined" />
          <TextField id="outlined-basic" required label="Password" variant="outlined" />
          <div id='buttons' className='flex gap-6 items-center'>
            <Button size='large' className='h-1/4 w-1/4' variant="outlined" onClick={{}}>Sign Up</Button> 
            <Button className='h-1/4' variant="text" onClick={() => toggleForm()}>Back</Button>            
          </div>
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