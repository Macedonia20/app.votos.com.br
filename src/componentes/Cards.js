import React from "react";
import { CardBody, CardImg } from "reactstrap";
import { Card, Row, Col } from "react-bootstrap";
import { Answer } from './Modal';
import { Perfil } from './Footer';
import marciaImg from "../bg/marcia.jpeg";
import adrianoImg from "../bg/adriano.jpg";
import diogoImg from "../bg/pr-diogo.jpg";
import betoImg from "../bg/beto.jpeg";
import anaImg from "../bg/anaa.jpg";
import amandaImg from "../bg/amandaa.jpg";
import biaImg from "../bg/bia.jpeg";
import daniImg from "../bg/dani.jpg";
import flaviaImg from "../bg/flavia.jpg";
import ingridImg from "../bg/ingrid.jpg";
import kokuraImg from "../bg/kokura.jpg";
import julianaImg from "../bg/juliana.jpg";
import luanaImg from "../bg/luana.jpg";
import reneImg from "../bg/rene.jpeg";
import sheylaImg from "../bg/sheyla.jpeg";
import taciImg from "../bg/taci.jpeg";
import crisImg from "../bg/cris.jpg";
import cleitonImg from "../bg/cleiton.jpg";
import dedeImg from "../bg/dede.jpg";
import diegoImg from "../bg/diego.jpg";
import macedoImg from "../bg/macedo.png";
import tchescoImg from "../bg/tchesco.jpeg";

const professores = [
  {
    nome: 'Beto Santos',
    image: betoImg,
    id: 1
  },
  {
    nome: 'Marcia Regina',
    image: marciaImg,
    id: 2
  },
  {
    nome: 'Pr Diogo Magnea',
    image: diogoImg,
    id: 3
  },
  {
    nome: 'Ana Victoria',
    image: anaImg,
    id: 4
  },
  {
    nome: 'Amanda Chagas',
    image: amandaImg,
    id: 5
  },
  {
    nome: 'Thiago Leal',
    image: dedeImg,
    id: 6
  },
  {
    nome: 'Ingrid Beatriz',
    image: biaImg,
    id: 7
  },  {
    nome: 'Daniela Magnea',
    image: daniImg,
    id: 8
  },  {
    nome: 'Flavia Oliveira',
    image: flaviaImg,
    id: 9
  },  {
    nome: 'Ingrid Lucatto',
    image: ingridImg,
    id: 10
  },  {
    nome: 'Juliana Lima',
    image: julianaImg,
    id: 11
  },  {
    nome: 'Luana Ferreira',
    image: luanaImg,
    id: 12
  },
  {
  nome: 'Sheyla Araujo',
  image: sheylaImg,
  id: 13
},  {
  nome: 'Rene Geribola',
  image: reneImg,
  id: 14
},  {
  nome: 'Taciana Andrade',
  image: taciImg,
  id: 15
},  {
  nome: 'Cristina Moreira',
  image: crisImg,
  id: 16
},  {
  nome: 'Cleiton Oliveira',
  image: cleitonImg,
  id: 17
},{
  nome: 'Diego Motta',
  image: diegoImg,
  id: 18
},{
  nome: 'Matheus Macedo',
  image: macedoImg,
  id: 19
},{
  nome: 'Tchesco Lu',
  image: tchescoImg,
  id: 20
},{
  nome: 'Adriano Ramos',
  image: adrianoImg,
  id: 21
},{
  nome: 'Ana Kokura ',
  image: kokuraImg,
  id: 22
}];

const Enquente = () => {
  return (
    <div className="m-content">
      <h1 className="mt-3 text-light text-center">Votação Capacitação Destino</h1>
      <Row md={5}>
        {professores.map((professor) => (
          <Col className="p-4 d-flex flex-column justify-content-center align-items-center" key={professor.id}>
            <Card className="card-hover" style={{ width: 200 }}>
              <CardBody className="d-flex flex-column justify-content-center align-items-center" style={{ height: 240 }}>
                <CardImg
                  top className="img-fluid"
                  src={professor.image}
                  style={{ borderRadius: 10, width: 95, height: 95 }}
                />
                  <h6 className="text-center mt-2">
                    {professor.nome}
                  </h6>
                  <Answer candidato={professor.nome} />
              </CardBody>
            </Card>       
          </Col>
        ))}
      </Row>
      <Perfil />
    </div>
  );
};

export default Enquente;