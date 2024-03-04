import React from 'react';
import './App.css';
import logo from './assets/media/logo.png';


function App() {
  return (
    <div className="App">
      <header className="menuHeader">
        <div className="contenedorTitulo">
        <img className="imgLogo grow" src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1" alt="logo"/>
        <h1 className="grow">Let It Code</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#mision">Misión</a></li>
            <li><a href="#vision">Visión</a></li>
            <li><a href="#objetivos">Objetivos</a></li>
            <li><a href="#info">Información</a></li>

          </ul>
        </nav>
      </header>
      <div className="eslogan">
        <div className="textoEslogan transUp">
        <h3>Construyendo experiencias digitales, transformando ideas en realidad.</h3>
        </div>
      </div>
      <section className="content">
        <div id="acerca">
          <div className="acercaTitulo">
            <h2>Antecedentes</h2>
          </div>
          <div className="acercaParrafo">
            <p>Fundada en 2023, nuestra empresa de desarrollo web se ha convertido en un referente en la creación de soluciones digitales. Desde nuestros inicios, hemos estado comprometidos con la excelencia en el diseño y desarrollo web y nos hemos adaptado continuamente a las necesidades cambiantes del mercado digital. Nuestro equipo tiene una sólida experiencia en la industria y acumula años de conocimiento técnico y creativo.</p>
            <img className="imgAcerca" src={logo} alt="logo" />
          </div>
          
        </div>
        <hr></hr>
        <div id="mision">
          <h2>Misión</h2>
          <p>
            En Let It Code nos comprometemos a esarrollar software y soluciones web innovadoras y de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes y contribuyan al éxito de sus empresas.
          </p>
        </div>
        <hr></hr>
        <div id="vision">
          <h2>Visión</h2>
          <p>
          Ser líderes reconocidos en la industria del software y el desarrollo web que demuestren excelencia técnica, compromiso con la innovación y entrega de soluciones que transformen positivamente los negocios de nuestros clientes
          </p>
        </div>
        <hr></hr>
        <div id="objetivos">
          <h2>Objetivos</h2>
          <p>
            <ul>
              <li>Entrega de productos de calidad</li>
              <ol>Desarrollar software y sitios web libres de errores y con un rendimiento óptimo</ol>
              <li>Satisfacer las necesidades del cliente</li>
              <ol>Entender y cumplir con los requisitos del cliente para lograr la satisfacción del usuario final</ol>
              <li>Cumplimiento de los plazos de entrega</li>
              <ol>Desarrollar un software y sitios web dentro de los plazos acordados para garantizar la puntualidad y la satisfacción del cliente.</ol>
              <li>Innovacion y tecnologia</li>
              <ol>Mantenerse al tanto de las últimas tendencias tecnológicas para ofrecer soluciones innovadoras y actualizadas</ol>
              <li>Rentabilidad y Eficiencia</li>
              <ol>Desarrollar de manera eficiente para maximizar la rentabilidad y minimizar los costos</ol>
            </ul>
          </p>
        </div>
      </section>
      <div className="info" id="info">
        <h2>Información de Contacto</h2>
        <p>Para más información sobre nuestros servicios, por favor contáctenos a través de los siguientes medios:</p>
        <ul>
          <li>Teléfono: 1234567890</li>
          <li>Correo:</li>
        </ul>
      </div>
      <footer className="footer">
        <h4>Contacto</h4>

      </footer> 
    </div>
  );
}


export default App;
