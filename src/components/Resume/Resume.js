import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Educación</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Universidad Alejandro de Humboldt</h3>
              <p className="info">Ingenieria en informatica <span>•</span> <em className="date">enero 2017- en curso</em></p>
              <p>
              Estudiante durante 3 años de la carrera.<br/>
              Aprendizaje autodidacta de programación, en lenguajes tales como JavaScript, HTML, CSS, PHP y C#.
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col exp-lab">
          <h1><span>Experiencia laboral</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Tranred</h3>
              <p className="info">Analista POS <span>•</span> <em className="date">Sept 2018 - Sept 2019</em></p>
              <p>
              Analista POS: instalación de aplicativos, gestión de
              inventariado y mantenimiento de equipos POS
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Soluciones LGSS</h3>
              <p className="info">Analista Web <span>•</span> <em className="date">julio 2019 - jun 2020</em></p>
              <p>
              Analista IT: instalación de equipos de oficina, gestión
              de inventariado y mantenimiento de equipos,
              mantenimiento de servidores y instalación de redes
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>My Softweb</h3>
              <p className="info">Desarrolo web <span>•</span> <em className="date">julio 2021 - jun 2022</em></p>
              <p>
              Analista web: desarrollo web front-end, Documentar el
              código fuente, Implementar aplicaciones web necesarios
              para mejorar, completar o migrar los sistemas existentes,
              de acuerdo a las necesidades funcionales de los usuarios
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Tecnologias</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>Desarrollador de aplicativos web.
            Resolución de problemas y control de
            calidad.
            Procesos Agiles.
            Desarrollo front-end y back-en
          </p>
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
              <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
              <li><span className="bar-expand wordpress" /><em>React</em></li>
              <li><span className="bar-expand css" /><em>CSS</em></li>
              <li><span className="bar-expand html5" /><em>HTML5</em></li>
              <li><span className="bar-expand jquery" /><em>jQuery</em></li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}