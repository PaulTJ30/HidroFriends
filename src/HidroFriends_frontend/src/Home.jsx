import React, { useEffect, useState } from 'react';
import './App.css';
import { HidroFriends_backend } from '../../declarations/HidroFriends_backend';
import { AuthButton } from '@bundly/ic-react';



const Home = () => {
    // useEffect(() => {
    //     getUsuarios();
    // }, []);

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch('http://localhost:3000/users');
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // function getUsuarios() {
    //     try {
    //         const Usuarios_typescript = HidroFriends_backend.getUsuarios();
    //         setUsuarios(Usuarios_typescript);
    //     }
    //     catch (error) {
    //         console.log("Hubo un error al traer a los usuarios!", error)
    //     }
    //     HidroFriends_backend.greet(name).then((greeting) => {
    //         setGreeting(greeting);
    //     });
    //     return false
    // }

    return (
        <>
            <header>
                <h1>Bienvenidos a HidroFriends</h1>
            </header>
            <div className="container">
                <section className="welcome-section">
                    <h1>¡Bienvenido!</h1>
                    <p>En HidroFriends nos preocupamos por tu salud, seguridad y calidad del agua.</p>
                </section>
                <section className="about-section">
                    <h2>¿Quiénes somos?</h2>
                    <p>Somos HidroFriends, encargados de un filtro para agua que elimina metales pesados. Trabajamos para asegurar la salud y seguridad de nuestros clientes en colaboración con la agencia de agua MIAA de Aguascalientes.</p>
                </section>

                <AuthButton>

                </AuthButton>
                <br /><br /><br /><br /><br />
                <section>
                    <h2>Usuarios</h2>
                    <ul className="user-list">

                        <ul>
                            <table>
                                <thead>
                                    <tr>
                                        <th rowspan="2">Usuarios</th>
                                        <th colspan="2" class="group-header">Antes</th>
                                        <th colspan="2" class="group-header">Después</th>
                                        <th rowspan="2">Estado Del Filtro</th>
                                        <th rowspan="2">Direccion</th>
                                    </tr>
                                    <tr>
                                        <th>Fluor</th>
                                        <th>Arsenico</th>
                                        <th>Fluor</th>
                                        <th>Arsenico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Juan Perez Gonzalez</td>
                                        <td>1.5</td>
                                        <td>0.01</td>
                                        <td>0.3</td>
                                        <td>0.001</td>
                                        <td>En Buen Esatdo </td>
                                        <td>Calle Morelos #321, Zona Centro</td>
                                    </tr>
                                    <tr>
                                        <td>Maria de Lourdes Gutierrez</td>
                                        <td>2.0</td>
                                        <td>0.02</td>
                                        <td>0.5</td>
                                        <td>0.005</td>
                                        <td>Algo Saturado</td>
                                        <td>Avenida Aguascalientes Sur #654, Colonia México</td>
                                    </tr>
                                    <tr>
                                        <td>Daniel Antonio Arellano Gonzalez</td>
                                        <td>3.0</td>
                                        <td>0.03</td>
                                        <td>0.8</td>
                                        <td>0.008</td>
                                        <td>Necesita Cambio Urgente</td>
                                        <td>Calle Juan de Montoro #987, Barrio de la Purísima</td>
                                    </tr>
                                    <tr>
                                        <td>Jorge Vera Dominguez</td>
                                        <td>0.0</td>
                                        <td>0.0</td>
                                        <td>0.0</td>
                                        <td>0.0</td>
                                        <td>En Reparacion...</td>
                                        <td>Calle Fresno #111, Fraccionamiento Campestre</td>
                                    </tr>
                                    <tr>
                                        <td>Carlos Esparza De Luna</td>
                                        <td>2.5</td>
                                        <td>0.025</td>
                                        <td>0.7</td>
                                        <td>0.007</td>
                                        <td>En Excelente Estado</td>
                                        <td>Calle Loreto #222, Colonia El Plateado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>
                    </ul>
                </section>
            </div>
            <footer className="footer">
                <p>&copy; 2024 HidroFriends. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}



export default Home;
