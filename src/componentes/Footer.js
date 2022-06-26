import React, { useState, useEffect } from "react";
import api from '../services/api';

import { Row, Col, Container, ProgressBar } from "react-bootstrap";

import Avatar from 'react-avatar';

export function Perfil() {
  
  const [resultado, setResultado] = useState([]);
  const getResultado = async () => {

    const { data } = await api.get(`/votos`);
    setResultado(data);
    }

    useEffect(() => {
      getResultado();
    }, []);

    return (
      <>  
        <div xs={1} sm={1} md={2} lg={3}>
          {/* <h3 className="tituloresultado" style={{display: 'flex', justifyContent: 'center', width: '100%' }}>
          <strong>RESULTADO PARCIAL</strong>
          </h3> */}
        </div>
        <br />
        {/* <Container style={{display: 'flex', justifyContent: 'center', width: '50%' }}>
          <Row xs={2} sm={2} md={3} lg={4} style={{marginRight: '-45px', marginLeft: '-31px'}}>
            {resultado.map((voto) => {
              return (
                <Col key={voto.candidato}>
                  < Avatar 
                    className="d-flex align-items-end flex-column bd-highlight "
                    round="20px" 
                    twitterHandle="sitebase" 
                    size="80" 
                    borderRadius='full'
                    src={`/images/candidatos/${voto.candidatofoto}`} 
                  />
                  {voto.candidato}
                  <ProgressBar style={{}} now={voto.porcentagem} label={`${voto.porcentagem}%`} className="justify-content-between bg-transparent"/>
                  <label style={{width:'100px'}}>{voto.Votos}</label>                    
                </Col>
            )})}
          </Row>
        </Container> */}
      </>
    )
    
}





