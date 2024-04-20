import axios from 'axios';
 
const api = "http://localhost:7800/api/";

export const obtenerLibro= async (libro) =>axios.get(`${api}libro/obtenerLibros`, libro);
export const obtenerAlumnos = async (alumnos) => axios.get(`${api}alumno/obtenerAlumnos`, alumnos);
export const contarLibros = async (libros) => axios.get(`${api}libro/contarLibro`, libros);
export const contarAlumnos = async (alumnos) => axios.get(`${api}alumno/contarAlumnos`, alumnos);
export const contarPrestamos = async (prestamos) => axios.get(`${api}prestamo/contarPrestamos`, prestamos);
export const obtenerPrestamos = async (prestamos) => axios.get(`${api}prestamo/obtenerPrestamos`, prestamos);
export const crearAlumno = async (alumno) => axios.post(`${api}alumno/crear`, alumno);
export const login = async (credenciales) => axios.post(`${api}empleado/login`, credenciales);
export const crearPrestamo = async (prestamo) => axios.post(`${api}prestamo/crear`, prestamo);
export const devolverPrestamo = async (prestamo) => axios.put(`${api}prestamo/devolver`, prestamo);
export const actualizarAlumno = async (id, alumno) => axios.put(`${api}alumno/actualizar/${id}`, alumno);
export const eliminarAlumno = async (id) => axios.delete(`${api}alumno/eliminar/${id}`);
export const obtenerAlumno = async (id) => axios.get(`${api}alumno/obtener/${id}`);
export const actualizarLibro = async (id, libro) => axios.put(`${api}libro/actualizarLibro/${id}`, libro);
export const eliminarLibro = async (id) => axios.delete(`${api}libro/eliminarLibro/${id}`);
export const actualizarPrestamo = async (id, prestamo) => axios.put(`${api}prestamo/editar`, prestamo);

export const agregarLibro = async (libro) => axios.post(`${api}libro/agregarLibro`, libro);
export const crearLibro = async (libro) => axios.post(`${api}libro/crear`, libro);