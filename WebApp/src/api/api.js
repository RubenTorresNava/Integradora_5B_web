import axios from 'axios';
 
const api = "http://localhost:7800/api/";

export const obtenerLibro= async (libro) =>axios.get(`${api}libro/obtenerLibros`, libro);
export const obtenerAlumnos = async (alumnos) => axios.get(`${api}alumno/obtenerAlumnos`, alumnos);
export const contarLibros = async (libros) => axios.get(`${api}libro/contarLibro`, libros);
export const contarAlumnos = async (alumnos) => axios.get(`${api}alumno/contarAlumnos`, alumnos);
export const contarPrestamos = async (prestamos) => axios.get(`${api}prestamo/contarPrestamos`, prestamos);
export const obtenerPrestamos = async (prestamos) => axios.get(`${api}prestamo/obtenerPrestamos`, prestamos);
export const crearAlumno = async (alumno) => axios.post(`${api}alumno/crear`, alumno);