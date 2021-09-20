import '../styles/footer.scss';
import { FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';

export function Footer(props){
  return (
    <div  className={props.isDarkTheme ? "footerOne-dark footerOne" : "footerOne-light footerOne"} >
      
      <a href="https://github.com/thiagoadssilva" target="_blank" rel="noopener noreferrer">
        <FaGithub className={props.isDarkTheme ? "footerOne-dark github" : "footerOne-light github"} />
      </a>
      <span className="name" >Feito com muito <FaHeart className="name" /> por Thiago Jose da Silva</span>
      <a href="https://www.linkedin.com/in/thiagojosedasilva/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  className={props.isDarkTheme ? "footerOne-dark linkedin" : "footerOne-light linkedin"}/>
      </a>
    </div>
  );
}