import demoImg from '../assets/demo2.png';
import grumpyGremlin from '../assets/lunasit.png';

export default function Work() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Projects</h1>
      <p>
        A variety of web projects I've worked on.
      </p>
      <div className='maincontainer'>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Weather App</h3>
            <p className="card-text caption">A web application with a city search bar that shows the weather for today and a 5-day forecast.</p>
          </div>
          <div className="mt-auto">
            <a href="https://hobbsab.github.io/WeatherReport/" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Random Video Generator</h3>
            <p className="card-text caption">Want to watch a random video about animals? Or maybe a music video? Try it out. This is a project built in React utilizing the YouTube API.</p>
          </div>
          <div className="mt-auto">
            <a href="https://randomvideogen.netlify.app/" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Horiseon Website</h3>
            <p className="card-text caption">A simple website for an SEO company. It has accessible alt text.</p>
          </div>
          <div className="mt-auto">
            <a href="https://hobbsab.github.io/AccessibleWebsite/" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Password Generator</h3>
            <p className="card-text caption">A simple and secure password generator.</p>
          </div>
          <div className="mt-auto">
            <a href="https://hobbsab.github.io/PasswordGen/" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Indian Restaurant</h3>
            <p className="card-text caption">A demo web project for an Indian restaurant, featuring a menu and a reservation system using Express.js, Sequelize and PostgreSQL.</p>
          </div>
          <div className="mt-auto">
            <a href="https://hobbsab.github.io/Restaurant/public/index.html" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Work Scheduler</h3>
            <p className="card-text caption">For your 9-5 shenanigans.</p>
          </div>
          <div className="mt-auto">
            <a href="https://hobbsab.github.io/WorkSchedule/Develop/index.html" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>

        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <h3 className="card-title workheader">Note Taker</h3>
            <p className="card-text caption">A simple note taker app with an Express.js backend.</p>
          </div>
          <div className="mt-auto">
            <a href="https://note-taker3001-9ed4513fa6a4.herokuapp.com/" className="btn btn-primary viewbtn">
              View
            </a>
          </div>
        </div>



      </div>
      {/* <img className="mx-auto" alt="Weird Siamese" title='Luna (she bites)' src={grumpyGremlin} width="150" height="auto" /> */}
    </div>
  );
}
