import React from 'react';

import { Container } from './styles';
import { MdMoveToInbox } from 'react-icons/md';


function Main() {
  return (
    <>
    <Container>
        <form>
            <MdMoveToInbox />
            <input placeholder="Criar um box"/>
            <button>Criar!</button>
        </form>
    </Container>
    </>
    );
}

export default Main;