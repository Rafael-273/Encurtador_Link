import {FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import { useState } from 'react';
import api from '../../components/LinkItem';

export default function Home(){
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink(){
      try{
        const response = await api.post('/shorten', {
          long_url: link
        })
        setData(response.data);
        console.log(data)
        setShowModal(true);
        setLink('')
      }catch{
        console.log('ffgs')
        alert('Ops... Parece que algo deu errado!');
        setLink('');
      }
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
          content= {data}
          />
        )}

      </div>
    )
  }