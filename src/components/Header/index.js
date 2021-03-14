import Nav from '../Nav';
import headerImage from '../../assets/images/desktop.jpg'

function Header() {
    return(
        <section>
            <img src={headerImage} className="my-2" style={{width: "100%"}} alt="Nick's Desk" />
            <h1>
                <a href="/">
                    Nick Hill
                </a>
            </h1>
            <Nav />
        </section>
    )
}

export default Header