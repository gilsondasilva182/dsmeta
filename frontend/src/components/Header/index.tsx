import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header(){
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="oveRLoadMeta" />
            <h1>oveRLoad</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/gilsondasilva182">@gilsondasilva</a>
            </p>
        </div>
    </header>

    )
}
export default Header