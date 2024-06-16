import '../assets/styles/header.css'

function Header({languageOption, changeLanguageOption}) {
    return(
        <header>
            <div className="header_picture"></div>
            <div className="title_container">
                <h1>Matheus Weisheimer</h1>
                <span>
                    {languageOption === "en_uk" ? "Computer Science Student"
                    : "Estudante de ciência da computação"}
                </span>
            </div>
            <div className="language_options">
                <button className="language_btn pt_br" onClick={() => changeLanguageOption("pt_br")}></button>
                <button className="language_btn en_uk" onClick={() => changeLanguageOption("en_uk")}></button>
            </div>
        </header>
    );
}

export default Header;