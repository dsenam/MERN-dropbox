import React, {useState} from 'react';
import api from '../../services/api'
import { Container } from './styles';
import { MdMoveToInbox } from 'react-icons/md';


function Main() {
    const [box, setBox] = useState('')

   async function handleSubmit(e) {
        e.preventDefault()
        const response = await api.post('boxes', {
            title: box
        })

        console.log(response.data)

    }
  return (
    <>
    <Container>
        <form onSubmit={handleSubmit}>
            <MdMoveToInbox />
            <input placeholder="Criar um box" onChange={(e => setBox(e.target.value))}/>
            <button type="submit">Criar!</button>
        </form>
    </Container>
    </>
    );
}

export default Main;