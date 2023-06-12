import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="../images/Ramon photo.jpg" alt="Ramon" />
          </div>
          <div className="nine columns main-col">
            <h2>Sobre mi</h2>
            <p>Hola, mi nombre es <span>Ramón Andrés Guzmán</span> y soy
                Desarrollador Web Front-End. Actualmente vivo y me desarrollo
                profesionalmente en la Ciudad de Caracas.

                Me apasiona la programación y el desarrollo de páginas web,
                en especial todo lo relacionado con el resultado que
                las personas ven en pantalla: animaciones, transiciones, colores,
                tamaños, fuentes, etc.

                <br/>
                Actualmente me sigo preparando y sigo aprendiendo
                tecnologías y lenguajes de programación para poder crear
                los proyectos más allá de lo que el cliente requiera, y así poder
                dar un valor agregado a mi trabajo.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contacto</h2>
                <p className="address">
                  <span>Ramón Guzmán</span><br />
                  <span>Venezuela, Caracas<br />
                    calle 2, sector los aguacaticos
                  </span><br />
                  <span>(+58-412)204-0343</span><br />
                  <span>*insert website*</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1XVgKwBzIF7MLCmzVHyN4t3mvvk6YmEJI/view?usp=sharing" target='_blank' 
                    className="button"><i className="fa fa-download" />Descargar CV</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}