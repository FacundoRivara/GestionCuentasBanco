import {cliente} from "./cliente.js";
import {cuenta} from "./cuenta.js"

export class cuentaCorriente extends cuenta
{
    static cantidadCuentas = 0;


    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0);
        cuentaCorriente.cantidadCuentas++;
    }
    
    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5);
    }
}