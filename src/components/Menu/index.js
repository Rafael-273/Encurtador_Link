import './menu.css'
import { BsInstagram, BsYoutube} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://www.youtube.com/watch?v=vVbHZyHgt7o&t=1713s">
                <BsYoutube color='#808080' size={24} />
            </a>
            <a className='social' href='https://www.instagram.com/'>
                <BsInstagram color='#808080' size={24} />
            </a>
            <Link className='menu-item' to={'/links'}>
                Meus Links
            </Link>
        </div>
    )
}