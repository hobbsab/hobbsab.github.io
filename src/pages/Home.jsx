import profileImg from '../assets/me.jpg';

export default function Home() {
  return (
    <div className= 'maindiv'>
      <h1>Anna Hobbs</h1>
      <h4>Full-Stack Web Development</h4>
      <img className="rounded-circle mainphoto" alt="avatar" src={profileImg} width="200" height="auto"/>
      <p>
      I'm Anna Hobbs and I'm a full-stack web developer based in North Carolina. 
      With a passion for creating and designing beautiful and functional web applications, I'm dedicated to creating responsive and user-friendly web solutions that meet your needs.
      </p>
    </div>
  );
}

