/*Importación de clases*/
import {cliente} from './cliente.js'
import {cuentaCorriente} from './cuentaCorriente.js';
import {cuentaAhorro } from './cuentaAhorro.js';


const cliente1 = new cliente('Leonardo','13804050','123224');
const cliente2 = new cliente('María','16979808','8989');

const cuentaDeLeonardo = new cuentaCorriente(cliente1, '1', '001');
const cuentaDeMaria = new cuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new cuentaAhorro(cliente, '9985', '001', 0);


console.log(cuentaAhorroLeonardo);
console.log(cuentaDeLeonardo);
