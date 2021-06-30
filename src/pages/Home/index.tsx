import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <div className="col-6">
                <h1 className="text-title">Desafio do Capíulo 3, <br /> Bootcamp DevSuperior</h1>
                <p className="text-subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                    Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /><br />
                    Este design foi adaptado a partir de Ant Design System for Figma,
                    de Mateusz Wierzbicki: antforfigma@gmail.com
                </p>
                <Link to="/search">
                    <ButtonIcon text="Começar" />
                </Link>
            </div>
        </div>
    </div>
);

export default Home;