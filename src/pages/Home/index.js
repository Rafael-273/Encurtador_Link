import {FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';

export default function Home(){
    return(
      <div className="container-home">
        <div className="logo">
            <img src="/logo.png" alt="Logo encurtador" />
            <h1>Encurtador de Links</h1>
            <span>Cole seu Link aqui...</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color='#808080'/>
                <input placeholder='Cole seu link aqui...' />
            </div>

            <button>Gerar Link</button>
        </div>

        <Menu/>

      </div>
    )
  }