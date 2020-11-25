import React from 'react';
import {MdInsertDriveFile} from 'react-icons/md'
import { Container } from './styles';

function Box() {
  return (
    <Container>
        <header>
            <h1>Titulo</h1>
        </header>

        <ul>
            <li>
                <a href=""> 
                    <MdInsertDriveFile />
                    <strong>Desafio.pdf</strong>
                </a>
                <span>há 3 minutos atrás</span>     
            </li>

            <li>
                <a href=""> 
                    <MdInsertDriveFile />
                    <strong>Desafio.pdf</strong>
                </a>
                <span>há 3 minutos atrás</span>     
            </li>

            <li>
                <a href=""> 
                    <MdInsertDriveFile />
                    <strong>Desafio.pdf</strong>
                </a>
                <span>há 3 minutos atrás</span>     
            </li>
        </ul>
    </Container>
  );
}

export default Box;