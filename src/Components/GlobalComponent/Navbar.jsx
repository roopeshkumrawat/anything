import './Navbar.css';
import logo from '../../images/mainLogo.png';
import TryitBtnArrow from '../../images/navbarNextAerrow.png';

function Navbar() {
    return (
        // <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"><img className='mainLogo' src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column align-items-start flex-md-row justify-content-md-end" id="navbarSupportedContent">
                    <ul className="navbar-nav navNavigations  mb-0 mb-md-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Tools</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>Pricing</a>
                        </li>
                    </ul>
                    <form className="d-flex flex-column flex-md-row navButtons">
                        <button className="btn btn-outline-dark rounded-5 btnLogin" type="submit">Login</button>
                        <button className="btn btn-danger rounded-5 btnTryFree" type="submit"><img className='TryitBtnArrow' src={TryitBtnArrow} alt="nextArrow" />TryFreeIt</button>
                    </form>
                </div>
            </div>
        </nav>
        // </div>
    )
}
export default Navbar;