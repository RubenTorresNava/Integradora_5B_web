import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import Swal from 'sweetalert2';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        login({ usuario, password })
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate('/admin/inicio');
                }, 1500);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contraseña incorrectos',
                });
            });
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <div className="text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWhythVZp0TMHYz3yUUxnwy4-b435Hphl28hQbVwKvUdQ-nPxZyRvmYJDYDkqUT83rAQ&usqp=CAU" alt="logo" />
                </div>
                <h2 className="titulo text-center"><b>Inicio de sesión</b></h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usuario">Usuario</label>
                        <input required type="text" id="usuario" className="form-control" placeholder="Ingrese su usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input required type="password" id="password" className="form-control" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" disabled={!usuario || !password}>Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
