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