import  'dotenv/config'
import express from 'express'
import cors from 'cors'
import {dobro, somar, media, tabuada, febre, maior, corPrimaria, cinema, frequencia} from './Servicos/services.js'

const server = express();
server.use(cors());
server.use(express.json());

server.get('/dobro/:numero', (req, resp) => {
    const numero= Number(req.params.numero);
    const d = dobro(numero);
    resp.send({
        dobro:d
    });
})

server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    const x = somar(a,b);
    resp.send({soma:x})
})

server.post('/somar', (req, resp) => {
    const {a: num1, b:num2} = req.body;
    const soma = somar(num1, num2);
    resp.send({soma:soma})
})


server.get('/media', (req, resp) => {
    const {a, b, c} = req.body;
    const rtn = media(a, b, c);
    resp.send({Media:rtn})
})

server.post('/media', (req, resp) => {
    const {a, b, c} = req.body;
    const media = media(a, b, c);
    resp.send({soma:media})
})

server.post('/temp', (req, resp) => {
    let t = Number(req.body.t);
    const x = febre(t);

    resp.send({febril:x})
})

server.get('/tabuada', (req, resp) => {
    let a = Number(req.query.a);
    const array = tabuada(a);
    resp.send({tabuada:array})
})

server.post('/maiornumero', (req, resp) => {
    let a = Number(req.body.a);
    const array = maior(a);
    resp.send({maior:array})
})

server.get('/corPrimaria', (req, resp) => {
    let a = String(req.query.a);
    const x = corPrimaria(a);
    resp.send({cor:x})
})

server.post('/cinema', (req, resp) => {
    let a = Number(req.body.a);
    let b = Number(req.body.b);
    let c = String(req.body.c);
    let d = String(req.body.d);
    const x = cinema(a,b,c,d);
    resp.send({cor:x})
})

server.get('/frequencia', (req, resp) => {
    const {a,b} = req.query;
    const x = frequencia(a,b);
    resp.send({quantity:x})
})



server.listen(process.env.PORT,() => 
                               console.log(`API online na porta ${process.env.PORT}`));