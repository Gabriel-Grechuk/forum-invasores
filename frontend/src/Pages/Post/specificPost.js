import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


import StyledTable from '../../components/Table';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import HeaderPage from '../../components/HeaderPage';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SpecificPost() {  
  const [post, setPost] = useState({});
  const {id} = useParams();
  console.log('ID::::::::::::',id);


  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/posts/'+id);
      setPost(data);
      console.log('info do post:::::::::::', data);
    };
    fetch();
  }, []);

  return (
    <Layout>
      {!!post &&
        <Container container>
          <div 
            className='container-content'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <HeaderPage 
              title={post.id} 
              userName={post.userName} 
              dateFound={post.dateFound} 
            />
            <div 
              className='specimen-local'
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <div 
                className='specimen'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '50%',
                  backgroundColor: 'gray',
                }}
              >
                <Typography variant='h5' color='black'>
                  ESPÉCIME:
                </Typography>
                <img 
                  src={require('../../img/foto1.jpg')} 
                  alt='img'
                  style={{
                    maxWidth: '90%',
                    margin: '10px' 
                  }}
                />
                <Typography variant='h7' color='black'>
                  CLASSIFICAÇÃO CIENTÍFICA:
                </Typography>
                <StyledTable data={post} scientificTable />
              </div>
              <div 
                className='local'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '50%',
                  backgroundColor: 'blue',
                }}
              >
                <Typography variant='h5' color='black'>
                  LOCAL E DATA:
                </Typography>
                <img 
                  src={require('../../img/foto1.jpg')} 
                  alt='img'
                  style={{
                    maxWidth: '90%',
                    margin: '10px' 
                  }}
                />
                <Typography variant='h7' color='black'>
                  DETALHES:
                </Typography>
                <StyledTable data={post} detailsTable />
                
              </div>
            </div>
            <div 
              className='description'
              style={{
                backgroundColor: 'pink',
                margin: '10px 0',
              }}
            >
              <Typography variant='h5' color='black'>
                DESCRIÇÃO:
              </Typography>
              <Typography variant='h8' color='black'>
                {post.description}
              </Typography>

            </div>
            <div 
              className='community'
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'yellow',
              }}
            >
              <Typography variant='h5' color='black'>
                COMUNIDADE:
              </Typography>
              <Typography variant='h7' color='black'>
                COMENTARIO 1:
              </Typography>

              <Typography variant='h7' color='black'>
                CONTESTAÇÃO:
              </Typography>
              <Typography variant='h5' color='black'>
                ESCREVER COMENTÁRIO:
              </Typography>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <Button variant='contained' color='error'>CONTESTAR</Button>
                <Button variant='contained' color='primary'>COMENTAR</Button>
              </div>
            </div>
          </div>
        </Container>
      }
      {!!!post && 
        <h1>Pagina nao encontrada</h1>
      
      }
    </Layout>
  );
};
