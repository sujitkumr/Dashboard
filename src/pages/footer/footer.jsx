import React, { useState } from 'react';
import "./footer.css"




const Footer = () => {

    // const [copyText, setCopyText] = useState("acebitsindri@gmail.com ")
    // const setClipboard = (e) => {
    //     setCopyText(e.target.value)
    //     // copy(copyText);
    //     // alert(`You have copied "${copyText}"`);
    // }
    return (
        <>
            <div className='footer_elm my-3 footer_bg'>
                <div className='container-fluid footer'>
                    <div className='col-10 mx-auto row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='logo'>
                              
                                <section id="footer">
                                    <div className="footer">
                                        <p className="footer-head">
                                            We should connect!
                            {/* <img src={logo} width="40px" /> */}
                                        </p>

                                        <div className="socials">
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-dribbble"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-facebook"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-instagram"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-youtube"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-twitter"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-medium"
                                                aria-hidden="true"></i></a>
                                            <a href="#" target="_blank" rel="noopener noreferrer"> <i id="footer-icon" className="fa fa-linkedin"
                                                aria-hidden="true"></i> </a>
                                        </div>

                                        <div className="tooltips">
                                            <button  >
                                                <span className="tooltiptext" id="myTooltip"> click to copy</span>
                                                <p className="email">
                                                    email@gmail.com
                                                </p>
                                            </button>
                                        </div>
                                    </div>


                                </section>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6"></div>
                        

                    </div>
                    <p className='design my-3'>Designed By <a href="https://www.linkedin.com/in/dharm-veer-043743221/" target="blank" style={{ color: 'darkblue;', textDecoration: 'none' }}>Dharmveer Mahtha</a> </p>
                    <div>
                        <p className="dialogue">Crafted with 🖐 Moulded with 🎵</p>
                        <p className="copyright">Copyright © 2022💃!</p>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Footer;