import React, { Component } from 'react'
import { animateScroll } from 'react-scroll';

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
          <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">Sobre mi</a></li>
	         <li><a class="smoothscroll" href="#resume">Resumen</a></li>
            <li><a class="smoothscroll" href="#portfolio">Trabajos</a></li>
            <li><a class="smoothscroll" href="#testimonials">Testimonios</a></li>
            <li><a class="smoothscroll" href="#Contact">Contacto</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Yo soy Ramón Guzmán</h1>
            <h3>Vivo en Venezuela y soy <span>Frontend developer</span> creador de paginas y aplicaciones webs con  <span>React y React Native</span>. 
            Puede <a className="smoothscroll texto-hover" href="#about">hacer scrolling</a> y leer mas <a className="smoothscroll texto-hover" href="#about">sobre mi</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/ramon.gc.3"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/ramón-guzmán-043686206/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/maxbox01/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/ramon-coder"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}
function ScrollButton() {
  const handleScroll = () => {
    animateScroll.scrollTo(1000, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <button onClick={handleScroll}>
      Scroll hacia abajo
    </button>
  );
}

