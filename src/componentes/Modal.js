import React, { useState } from "react";

import * as toasts from '../utils/toasts';

import api from '../services/api';

import { Modal} from 'react-bootstrap';
import { Button } from "reactstrap";

export function Answer({ candidato }) {
  const [show, setShow] = useState(false);
    
  const [descricao, setDescricao] = useState('');

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   const sendVoto = async (e) => {
     e.preventDefault();
     
     try {
      const voto = {
       descricao,
       candidato,
      }
 
      if (!validarVoto()) {
        return;
      }
 
      await api.post(`/votos`, voto);
      
      setShow(false);
 
      toasts.notifySuccess('Voto encaminhado com sucesso');
     } catch(error) {
      toasts.notifyError(error.message);
     }
   }
   
   const modalCandidato = () => {
   handleShow();
   }

   const validarVoto = () => {     
     if (!descricao) {
      toasts.notifyError('Campo descrição obrigatório');
      return;
     }

     if (!candidato) {
       toasts.notifyError('Campo candidato obrigatório');
     return false
     }

     return true;
   }

    return (
        <>
          <div className="d-grid gap-2 text-center">
            <Button variant="primary" size="xs" onClick={modalCandidato}>
              Votar
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <form onSubmit={sendVoto}>
              <Modal.Header closeButton>
              <Modal.Title>Confirme seu voto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                <div className="col-lg-12 mb-2">
                  <span>Você está votando em <strong>{candidato}</strong></span>
                </div>
                </div>
                  <div className="form-group app-label">
                  <label>Justifique seu voto: <span class="text-danger">*</span></label>
                  <div className="row">
                    <div className="col-lg-12">
                    <textarea
                      type="text"
                      id="descricao"
                      placeholder="Exemplo: Através das aulas desse professor..."
                      className="form-control resume"
                      onInput={e => setDescricao(e.target.value)} />
                    </div>
                  </div>
                </div>                 
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                  <Button submit="submit" variant="primary">
                    Enviar
                  </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>
    )
}