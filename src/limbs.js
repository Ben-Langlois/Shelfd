import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    return(
        <header id='header' className='flex flex-initial  my-6 justify-center items-center gap-x-6'> {/*border-slate-400 border-b on scroll down */}
            <h1 className='text-3xl flex-1 font-display font-medium ml-auto text-right'>Shelfd</h1>
            <input type="text" name="search" className='w-[55rem] rounded outline outline-slate-300 p-1 text-center' placeholder='Search Books, Authors, Genres etc'/>
            <div className='flex flex-1 mr-auto gap-6'>
                <Avatar className='hover:scale-110'>U</Avatar>
                <PersonOutlineIcon className='hover:scale-110 transform transition duration-50 cursor-pointer'/>
                {/* <PeopleOutlineIcon className='hover:scale-110 h-8 transform transition duration-50 cursor-not-allowed'/> will change cursor once functional */}
            </div>
        </header>
    )
}

export const Footer = () => {
    return(
        <footer className='flex flex-initial opacity-70 my-6 gap-6 justify-center'>
            <a href='https://github.com/Ben-Langlois/Shelfd'><GitHubIcon className='hover:scale-110' fontSize='large'/></a>
            <h1 className='self-center'>Shelfd 2024</h1>
            <a href='https://www.linkedin.com/in/benjaminlanglois/'><LinkedInIcon className='hover:scale-110' fontSize='large'/></a>
        </footer>
    )
}

