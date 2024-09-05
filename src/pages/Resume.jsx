import htmlcssjs from '../assets/htmlcssjs-details.png';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function Resume() {
  return (
    <div className="maindiv mx-auto">
      <h1 className="almendra-regular">Resume / stack skillset</h1>
      <div>
            <a href="https://ahresume.tiiny.site/" class="btn btn-primary">View Resume</a>
      </div>
      <img className= "errorImg mx-auto p-3" src={htmlcssjs} />
      </div>
  );
}
