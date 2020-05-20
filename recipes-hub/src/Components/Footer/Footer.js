import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <MDBFooter color="cyan" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/nancy.minyoi/">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
			  <a 
                                className="connect-list__link"                          
                                href="https://github.com/nanrisa27"
                                target="newwindow"
                            >
                                <i className="fab fa-github-alt white-text mr-5 mr-3 fa2x" />
                            </a>

              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              
              <a className="li-ic"href="https://www.linkedin.com/in/nancy-minyoi-mulozi/"
                target="newwindow">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              
              
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Nancy Mulozi{" "}
         
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}





export default Footer;