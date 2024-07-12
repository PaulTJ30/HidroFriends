import { Server, Record, text, Vec, Principal, query, StableBTreeMap, float32 } from 'azle';
import express from "express";
import { HidroFriends_backend } from '../../declarations/HidroFriends_backend';

const Usuario = Record({
    idUsuario: Principal,
    nombre: text,
    apepat: text,
    apeMat: text,
    fluorBefore: float32,
    arsenicoBefore: float32,
    fluorAfter: float32,
    arsenicoAfter: float32,
    statusSensor: text,
    addres: text
});

type Usuario = typeof Usuario.tsType;

let Usuarios = StableBTreeMap<Principal, Usuario>(0);

function generateId(): Principal {
    const randomBytes = new Array(29)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 256))
    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}


export default Server(() => {
    const app = express();
    app.use(express.json())
    app.get('/obtener-usuarios', () => {
        const idUsuario = generateId();
        const Usuario: Usuario = {
            idUsuario: idUsuario,
            nombre: "Juan",
            apepat: "Perez",
            apeMat: "Gonzalez",
            fluorBefore: 1.5,
            arsenicoBefore: 0.01,
            fluorAfter: 0.3,
            arsenicoAfter: 0.001,
            statusSensor: "En Buen Estado",
            addres: "Calle Morelos #321, Zona Centro"
        };
        const idUsuario2 = generateId();
        const Usuario2: Usuario = {
            idUsuario: idUsuario2,
            nombre: "Maria",
            apepat: "de Lourdes",
            apeMat: "Guitierrez",
            fluorBefore: 2.0,
            arsenicoBefore: 0.02,
            fluorAfter: 0.5,
            arsenicoAfter: 0.005,
            statusSensor: "Algo Saturado",
            addres: "Avenida Aguascalientes Sur #654, Colonia México"
        }
        const idUsuario3 = generateId();
        const Usuario3: Usuario = {
            idUsuario: idUsuario3,
            nombre: "Carlos",
            apepat: "Esparza",
            apeMat: "De Luna",
            fluorBefore: 3.0,
            arsenicoBefore: 0.03,
            fluorAfter: 0.8,
            arsenicoAfter: 0.008,
            statusSensor: "Necesita Cambio Urgente",
            addres: "Calle Juan de Montoro #987, Barrio de la Purísima"
        }

        const idUsuario4 = generateId();
        const Usuario4: Usuario = {
            idUsuario: idUsuario4,
            nombre: "Daniel Antonio",
            apepat: "Arellano",
            apeMat: "Gonzalez",
            fluorBefore: 0.0,
            arsenicoBefore: 0.0,
            fluorAfter: 0.0,
            arsenicoAfter: 0.0,
            statusSensor: "En Reparacion",
            addres: "Calle Fresno #111, Fraccionamiento Campestre"
        }
        const idUsuario5 = generateId();
        const Usuario5: Usuario = {
            idUsuario: idUsuario5,
            nombre: "Jorge",
            apepat: "Vera",
            apeMat: "Dominguez",
            fluorBefore: 2.5,
            arsenicoBefore: 0.025,
            fluorAfter: 0.7,
            arsenicoAfter: 0.007,
            statusSensor: "En Excelente Estado",
            addres: "Calle Loreto #222, Colonia El Plateado"
        }
        return "Usuarios Obtenidos"
    })

    // app.delete('/borrar-usuario', () => {
    //     const Usuario = Usuarios.get(Usuario);
    //     if ('None' in Usuario) {
    //         return "Error... Usuario No Encontrado"
    //     }
    //     const usuarioX = Usuario.Some;
    //     Usuarios.remove(Usuario);
    //     console.log(Usuarios.values())
    //     return "ok"
    // })

    return app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

