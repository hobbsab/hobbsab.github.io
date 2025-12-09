import profileImg from '../assets/me.jpg';

export default function Home() {
  return (
    <div className="maindiv">
      <h1 className="almendra-regular">Hi, I'm Anna!</h1>
      <h3 className="almendra-regular">Full-Stack Web Developer</h3>
      <img className="rounded-circle mx-auto mainphoto" alt="avatar" src={profileImg} width="200" height="auto" />
      <p>I’m a full-stack web developer who loves turning ideas into interactive digital experiences. With German roots and a background in German philology, linguistics, software, psychology, and global travel, I bring both technical skill and a multicultural perspective to everything I build. I’m currently exploring the world at JGU Mainz through an exchange program. I love building digital experiences that blend technology, creativity, and user-focused design, and I’m always looking for ways to turn ideas into interactive, meaningful projects.</p>
      <div>
        <a className="social-link github" href="https://github.com/hobbsab" aria-label="GitHub">
          <img className="footerImg" src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="GitHub" />
        </a>

        <a className="social-link linkedin" href="https://www.linkedin.com/in/anna-b-hobbs/" aria-label="LinkedIn">
          <img className="footerImg" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
        </a>

        <a className="social-link email" href="mailto:abhobbs2@yahoo.com" aria-label="Email">
          <img className="footerImg" src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png" alt="Email" />
        </a>
      </div>
    </div>
  );
}
