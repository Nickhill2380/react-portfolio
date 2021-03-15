function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    }= props;

    return(
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false)}>
                        About Me
                    </a>
                </li>
                <li >
                   <span onClick={() => setContactSelected(false)}> Projects </span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact </span>
                </li>
                <li>
                   <span onClick={() => setContactSelected(false)}> Resume </span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;