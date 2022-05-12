import {FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import { useState } from 'react'

export default function Home(){
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function handleShortLink(){
      setShowModal(true);
    }

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
                <input placeholder='Cole seu link aqui...'
                value={link}
                onChange={ (e) => setLink(e.target.value) }/>
            </div>

            <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu/>
        { showModal && (
          <LinkItem 
          closeModal= { () => setShowModal(false)} 
          />
        )}

      </div>
    )
  }