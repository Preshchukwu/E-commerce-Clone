import "./Nav.css"

const Nav = ()=>{
    return(
        <div className="navMainContainer">
            <div className="menuAndCompanyNameContainer">
                <div className="menuContainer">
                    <img className="icon" src="src\assets\menu.svg" alt="" />
                </div>

                <div className="companyNameContainer">
                    
                    <img  src="src\assets\star.svg" alt="" />
                    <h2>Bend Down Select</h2>
                </div>
            </div>

            <div className="searchAndButtonContainer">
                <div className="searchContainer">
                    <img className="icon2" src="src\assets\search.svg" alt="" />
                    <img className="icon2" src="src\assets\close.svg" alt="" />
                </div>

                <button>Search</button>
            </div>

            <div className="navLinksContainer">
                <div className="linkContainer">
                    <img className="icon" src="src\assets\person.svg" alt="" />
                    <a href=""> Account</a>
                </div>

                <div className="linkContainer">
                    <img className="icon" src="src\assets\help.svg" alt="" />
                    <a href=""> Help</a>
                </div>

                <div className="linkContainer">
                    <img className="icon" src="src\assets\cart.svg" alt="" />
                    <a href=""> Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Nav