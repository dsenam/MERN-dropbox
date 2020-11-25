import React, {useEffect, useState} from 'react';
import {MdInsertDriveFile} from 'react-icons/md'
import moment from 'moment'
import api from '../../services/api'
import Dropzone from 'react-dropzone'
import {useParams} from 'react-router-dom'
import socket from 'socket.io-client'

import { Container, Upload } from './styles';


function Box() {
    //recuperar dados dos parametros (id)
    let {id} = useParams()
    const [box, setBox] = useState([])

    useEffect(()=> {
        //Notificação em tempo real
        async function subscribeToNewFiles() {
            const io = socket('http://localhost:3333')

            io.emit('connectRoom', id)

            io.on('file', data => {
                setBox({box: {...setBox, file: [data, ...box.files, ]}})
            })
        }
        //Requisição api GET
        async function loadBox() {
            
            console.log(id)        
            const response = await api.get(`boxes/${id}`)

            setBox(response.data)
        }
        loadBox()
        subscribeToNewFiles()
        
    }, [id, box])

    function handleUpload(files) {
        files.forEach(file => {
            const data = new FormData()

            data.append('file', file)

            api.post(`boxes/${id}/files`, data)
        });
    }

  return (
    <Container>
        <header>
        <h1>{box.title}</h1>
        </header>
        <Dropzone onDropAccepted={handleUpload}>
            {({getRootProps, getInputProps}) => (
                <Upload {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <p>Arraste arquivos ou clique aqui</p>
                </Upload>
            )}
        </Dropzone>
        <ul>
            {box.files && box.files.map(file => (
                <li key={file._id}>
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