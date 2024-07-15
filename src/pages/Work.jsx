import demoImg from '../assets/demo.jpg';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button } from '@chakra-ui/react'

export default function Work() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Projects</h1>
      <p>
      A variety of web projects I've worked on.
      </p>
      <div className='maincontainer'>

      {/* <div className="card" style="width: 18rem;">*/}

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Weather App</h3>
              <p className="caption container-sm">A simple web application with a city search bar that shows the weather for today and a 5-day forecast.</p>
            </div>
            <a href="https://hobbsab.github.io/WeatherReport/" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Random Video Generator</h3>
              <p className="caption container-sm">Want to watch a random video about animals? Or maybe a music video? Try it out.</p>
            </div>
            <a href="https://randomvideogen.netlify.app/" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Horiseon Website</h3>
              <p className="caption container-sm">This is a demo website. Its code has been revised to be more accessible and organized, alt text was given to the images and a broken link was fixed.</p>
            </div>
            <a href="https://hobbsab.github.io/AccessibleWebsite/" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Password Generator</h3>
              <p className="caption container-sm">A simple web application with a city search bar that shows the weather for today and a 5-day forecast.</p>
            </div>
            <a href="https://hobbsab.github.io/PasswordGen/" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Indian Restaurant</h3>
              <p className="caption container-sm">Yum, chana masala...</p>
            </div>
            <a href="https://hobbsab.github.io/Restaurant/public/index.html" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Work Scheduler</h3>
              <p className="caption container-sm">For your 9-5 shenanigans</p>
            </div>
            <a href="https://hobbsab.github.io/WorkSchedule/Develop/index.html" class="btn btn-primary">View</a>
          </div>
        </div>

        <div className="imgcontainer card mx-auto">
          <div className="exampleimg card-img-top">
              <img className="portfolioImg img-thumbnail mx-auto" src={demoImg} alt="Weather app" />
            <div className="container">
              <h3 className="workheader">Coding Quiz</h3>
              <p className="caption container-sm">Work in progress. A simple quiz application to test your knowledge on coding.</p>
            </div>
            <a href="https://hobbsab.github.io/" class="btn btn-primary">View</a>
          </div>
        </div>


      </div>
    </div>
  );
}
