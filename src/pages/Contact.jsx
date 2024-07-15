import phoneImg from '../assets/phone.png';
export default function Contact() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Contact Page</h1>

      <a href="https://www.linkedin.com/in/anna-b-hobbs/">
        <img className="footerImg mx-auto" src={phoneImg} />
      </a>

      <form className="w-50 mx-auto">
        <div className="form-group col">
          <label for="exampleInputEmail1">Name:</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" required/>
        </div>
        <div className="form-group col">
          <label for="exampleInputPassword1">Email:</label>
          <input type="email" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Email" required/>
        </div>

        <div className="form-group col">
          <label for="message">Message:</label>
          <textarea id="message" className="form-control" rows="7" cols="30" required></textarea><br />
          <span id="message_validation" class="error_message" placeholder="Message"></span>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
