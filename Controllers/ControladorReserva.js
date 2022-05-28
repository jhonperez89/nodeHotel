
import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReserva {
    
    constructor(){}

    async buscarTodas(request, response){

        let servicioReserva = new ServicioReserva()

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos de reserva',
                data: await servicioReserva.buscarTodas(),
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos de reserva'+ error,
                data: [],
                estado:false
            })
        }
            
    }


    async buscarPorId(request, response){

        let servicioReserva = new ServicioReserva()

        
        let id = request.params.id
        console.log(id)

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos de reserva'+ id,
                data: await servicioReserva.buscarPorId(id),
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos de reserva'+ error,
                data: [],
                estado:false
            })
        }
    }

   async registrar(request, response){

        let servicioReserva = new ServicioReserva()

        let datosPeticion=request.body

        try {

            
            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "exito agregando la reservacion",
                data: null,
                estado : true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "fallamos agregando la reserva", error,
                data: [],
                estado : false
            })   
        }
    }

    async editar(request, response){
        let servicioReserva = new ServicioReserva()
        let id = request.params.id
        let datosPeticion = request.body

        try {
            await servicioReserva.editar(id, datosPeticion)

            response.status(200).json({
                mensaje: "exito editando datos de reserva",
                data: null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos editando reserva",
                data: [],
                estado : false

            })

        }
    }

    async eliminar(request, response){

        let servicioReserva = new ServicioReserva()

        let id = request.params.id
        
        try {

            await servicioReserva.eliminar(id)

            response.status(200).json({
                mensaje: "exito eliminando reserva",
                data:null,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos eliminando reservacion ",
                data: [],
                estado : false

            })

        }

    }

}