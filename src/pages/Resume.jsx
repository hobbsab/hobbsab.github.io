import htmlcssjs from '../assets/htmlcssjs-details.png';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function Resume() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Resume / stack skillset</h1>
      <img className= "errorImg mx-auto" src={htmlcssjs} />
      <p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgItDnVQWhFv3h4OhOws0iFmV0HAjQoD3jZg&s" className= "mx-auto"/>
      </p>
      </div>
  );
}
