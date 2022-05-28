import express from "express";

//importo el controlador de habitaciones
import { ControladorReserva  } from "../Controllers/ControladorReserva.js";
//creo un objeto de la clase controladorHabitacion
let controladorReserva = new ControladorReserva()

//Utlizo el metodo router() de express

export let rutasReservas = express.Router()

// Lista de servicios que ofrece el api

rutasReservas.get('/api/v2/reservas', controladorReserva.buscarTodas)

rutasReservas.get('/api/v2/reservas/:id', controladorReserva.buscarPorId)

rutasReservas.post('/api/v2/reservas', controladorReserva.registrar)

rutasReservas.put('/api/v2/reservas/:id', controladorReserva.editar)

rutasReservas.delete('/api/v2/reservas/:id', controladorReserva.eliminar )