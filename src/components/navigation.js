function Navbar({navValue}) {
    return (
        <nav>
            <ul>
                <li><a href="" to="/">Home</a></li>
                <li>
                    <a href="" to="/about">
                    {navValue ? navValue : "About"}
                    </a></li>
                <li><a href="" to="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;