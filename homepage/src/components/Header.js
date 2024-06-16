import '../assets/styles/header.css'

function Header() {
    return(
        <header>
            <div className="header_picture"></div>
            <div className="title_container">
                <h1>Matheus Weisheimer</h1>
                <span>Computer Science Student</span>
            </div>
        </header>
    );
}

export default Header;