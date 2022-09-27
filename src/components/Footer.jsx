import amazon from 'assets/pictures/Amazon Pay.png';
import logo from 'assets/pictures/beaute-india-footer.png';
import fb from 'assets/pictures/fb-ft.png';
import insta from 'assets/pictures/insta-ft.png';
import master from 'assets/pictures/Mastercard.png';
import netbanking from 'assets/pictures/Netbanking.png';
import upi from 'assets/pictures/UPI.png';
import visa from 'assets/pictures/Visa.png';
import wh from 'assets/pictures/wh-ft.png';
import { Fragment } from "react";

function Footer() {
	return (
		<Fragment>
			<div className="container-fluid footsection ">
				<div className="main-footer-section">
					<div className="row  pt-5 pb-5 ">
						<div className="col-lg-6 col-md-5">
							<div className='footer-logo-section mt-3'>
								<img src={logo} alt="" />
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
							</div>

						</div>
						<div className="col-lg-4 col-md-4">
							<div className="footdata">
								<ul>
									<li>
										<div className="foothead mb-3">
											BEAUT INDIA
										</div>
									</li>
									<li>Who we are ?</li>
									<li>Terms & Conditions</li>
									<li>We respect your privacy </li>
									<li>Contact Us</li>
									<li>Shipping & Returns</li>
									<li>Authentication Certificate </li>
									<li>FAQs</li>
								</ul>
							</div>
							<div className="child-foot">
								<p className="mt-4">Sign up for our Newsletter</p>
								<div className="foot-email-block mt-3">
									<label className="f-email">
										<input type="email" className="foot-email" placeholder="Your email address" />
									</label>
								</div>
								<div className="cards-img mt-3">
									<img src={visa} alt="" />
									<img src={master} alt="" />
									<img src={upi} alt="" />
									<img src={netbanking} alt="" />
									<img src={amazon} alt="" />
								</div>
							</div>

						</div>
						<div className="col-lg-2 col-md-3">


							<div className="footdata">
								<ul>
									<li>
										<div className="foothead mb-3">
											SHOP BY
										</div>
									</li>
									<li>Fragrance For Him</li>
									<li>Fragrance For Her</li>
									<li>Makeup</li>
									<li>Body Care</li>
									<li>Home Fragrance</li>
									<li>Luggage</li>
								</ul>
							</div>
							<div className="footdata">
								<ul className="quick-links">
									<li>
										<div className="foothead mb-3 mt-5">
											QUICK LINKS:
										</div>
									</li>
									<img src={fb} alt="" />&nbsp;&nbsp;&nbsp;
									<img src={wh} alt="" />&nbsp;&nbsp;
									<img src={insta} alt="" />
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>
		</Fragment>
	)
}

export default Footer;