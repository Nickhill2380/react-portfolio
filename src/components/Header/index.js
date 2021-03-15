import Nav from '../Nav';
// import headerImage from '../../assets/images/desktop.jpg'

function Header(props) {
    const {
        focus=[],
        currentFocus,
        setCurrentFocus
    }= props;

    return(
        <section>
            <h1>
                <a href="/">
                    Nick Hill
                </a>
            </h1>
            <Nav 
            focus={focus}
            currentFocus={currentFocus}
            setCurrentFocus={setCurrentFocus}
            />
        </section>
    )
}

export default Header