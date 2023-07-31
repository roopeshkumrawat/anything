import './Footer.css';

function Footer() {
    return (
        <div className="footer-main bg-warning">
            <div className="container">
                <div className="row d-flex align-items-center footer-inner">
                    <div className="col-md-6 col-sm-12 text-md-start text-center"><a className="text-dark text-decoration-none" href="/">Copyright 2023</a> | <a className="text-dark text-decoration-none" href="/">All Rights Reserved</a></div>
                    <div className="col-md-6 col-sm-12 text-md-end text-center"><a className="text-dark text-decoration-none" href="/">Privacy Policy</a> | <a className="text-dark text-decoration-none" href="/">Terms Of Service</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;