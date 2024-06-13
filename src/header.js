import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

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

export default Header;