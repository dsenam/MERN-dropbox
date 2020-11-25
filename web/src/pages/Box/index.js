import React, {useEffect, useState} from 'react';
import {MdInsertDriveFile} from 'react-icons/md'
import { Container } from './styles';
import moment from 'moment'
import api from '../../services/api'
import {useParams} from 'react-router-dom'


function Box() {
    //recuperar dados dos parametros (id)
    let {id} = useParams()
    const [box, setBox] = useState([])

    useEffect(()=> {
        async function loadBox() {
            
            console.log(id)        
            const response = await api.get(`boxes/${id}`)

            setBox(response.data)
        }
        loadBox()
        
    }, [id, box])

  return (
    <Container>
        <header>
        <h1>{box.title}</h1>
        </header>

        <ul>
            {box.files && box.files.map(file => (
                <li>
                <a href={file.url} target="blank"> 
                    <MdInsertDriveFile />
                    <strong>{file.title}</strong>
                </a>
            <span>há {" "}{moment(file.createdAt).fromNow()}</span>     
            </li>
            ))}
        </ul>
    </Container>
  );
}

export default Box;