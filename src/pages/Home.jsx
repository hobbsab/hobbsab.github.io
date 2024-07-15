import profileImg from '../assets/me.jpg';

export default function Home() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Anna Hobbs</h1>
      <h3 className="almendra-regular">Full-Stack Web Development</h3>
      <img className="rounded-circle mx-auto mainphoto" alt="avatar" src={profileImg} width="200" height="auto"/>
      <p>
      I'm a full-stack web developer based in North Carolina with a passion for creating and designing beautiful and functional web applications. I'm dedicated to creating responsive and user-friendly web solutions that meet your needs.
      </p>
    </div>
  );
}

