function Nav(props) {
    const {
        focus=[],
        // currentFocus,
        setCurrentFocus
    }= props;

    return(
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <span onClick={() => setCurrentFocus(focus[0])}>
                        About Me
                    </span>
                </li>
                <li >
                   <span onClick={() => setCurrentFocus(focus[1])}> Projects </span>
                </li>
                <li className={`mx-2`}>
                <span onClick={() => setCurrentFocus(focus[2])}>Contact </span>
                </li>
                <li>
                   <span onClick={() => setCurrentFocus(focus[3])}> Resume </span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;