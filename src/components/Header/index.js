import Nav from '../Nav';
// import headerImage from '../../assets/images/desktop.jpg'

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    }= props;

    return(
        <section>
            <h1>
                <a href="/">
                    Nick Hill
                </a>
            </h1>
            <Nav contactSelected={contactSelected}
        setContactSelected={setContactSelected}/>
        </section>
    )
}

export default Header