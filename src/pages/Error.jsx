import { useRouteError } from 'react-router-dom';
import errorImg from '../assets/error.jpg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="almendra-regular">Oops!</h1>
      <img className= "errorImg" src={errorImg} />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
