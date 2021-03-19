function Nav(props) {
    const {
        focus=[],
        currentFocus,
        setCurrentFocus
    }= props;

    return(
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${currentFocus === focus[0] && 'navActive'}`}>
                    <span onClick={() => setCurrentFocus(focus[0])}>
                        About Me
                    </span>
                </li>
                <li className={`mx-2 ${currentFocus === focus[1] && 'navActive'}`}>
                   <span onClick={() => setCurrentFocus(focus[1])}> Portfolio </span>
                </li>
                <li className={`mx-2 ${currentFocus === focus[2] && 'navActive'}`}>
                <span onClick={() => setCurrentFocus(focus[2])}>Contact </span>
                </li>
                <li className={`mx-2 ${currentFocus === focus[3] && 'navActive'}`}>
                   <span onClick={() => setCurrentFocus(focus[3])}> Résumé </span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;