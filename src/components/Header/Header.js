import './Header.scss';
import Container from '../Container/Container';
const Header = ({ title }) => {
    return (
        <Container>
            <h1 className="header">{title}</h1>
        </Container>
    );
};

export default Header;
