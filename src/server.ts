import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const porta = process.env.PORT;

server.listen(porta,() => {
console.log(`O servidor está rodando na porta: ${porta}`);
})