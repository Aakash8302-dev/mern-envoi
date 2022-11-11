import React from 'react'
import { Navber } from '../partials'
import LogoFooter from '../public/contact/logo-footer.png'

const Contact = () => {
  return(
    
    <div>
        
        <Navber />

    <div className='inner-page'>
        <div class="book_preload">
            <div class="loaderbookmain">
                <div class="col-lg-20 col-md-14" style="margin:auto ">
                <img src={LogoFooter} alt="Image" />
                
                </div>
            </div>
        </div>

        <div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
		    <div class="breadcrumbs-inner">
		        <div class="container">
		            <div class="row">
		                <div class="col-md-12 text-center">
		                    <h1 class="page-title">Contact Us</h1>
		                 
		                </div>
		            </div>
		        </div>
		    </div>
		</div>

        <div class="contact-page-section sec-spacer">
        	<div class="container">
        		<div class="map-responsive">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248844.8192825246!2d79.77159685847654!3d12.959031123650549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1667637675298!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    </div>
        		<div class="row contact-address-section">
    				<div class="col-md-4 pl-0">
    					<div class="contact-info contact-address">
    						<i class="fa fa-map-marker"></i>
    						<a href="https://goo.gl/maps/mBxcGXRXQStChJH79"><h4>Address</h4>
    						<p>ENVOI</p>
    						<p>Sri Venkateswara college of Engineering,</p>
                            <p>Pennalur, Sriperumbudur - 602117</p></a>
    					</div>
    				</div>
    				<div class="col-md-4">
    					<div class="contact-info contact-phone">
    						<i class="fa fa-phone"></i>
    						<h4>Phone Number</h4>
                            <a href="tel:+91 9080372115">+91 9080372115</a>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
    					</div>
    				</div>
    				<div class="col-md-4 pr-0">
    					<div class="contact-info contact-email">
    						<i class="fa fa-envelope"></i>
    						<h4>Email Address</h4>
    						<a href="mailto:envoi.online@gmail.com"><p>envoi.online@gmail.com</p></a>
    						<p>&nbsp;</p>
                            <p>&nbsp;</p>
        				</div>
        			</div>
        		</div>

        		<div class="contact-comment-section">
        			<h3>Leave Comment</h3>
                    <div id="form-messages"></div>
					<form id="contact-form" method="post" action="https://keenitsolutions.com/products/html/edulearn/edulearn-demo/mailer.php">
						<fieldset>
							<div class="row">                                      
								<div class="col-md-6 col-sm-12">
									<div class="form-group">
										<label>First Name*</label>
										<input name="fname" id="fname" class="form-control" type="text"/>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<div class="form-group">
										<label>Last Name*</label>
										<input name="lname" id="lname" class="form-control" type="text"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6 col-sm-12">
									<div class="form-group">
										<label>Email*</label>
										<input name="email" id="email" class="form-control" type="email"/>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<div class="form-group">
										<label>Phone Number *</label>
										<input name="number" id="number" class="form-control" type="number"/>
									</div>
								</div>
							</div>
							<div class="row"> 
								<div class="col-md-12 col-sm-12">    
									<div class="form-group">
										<label>Message *</label>
										<textarea cols="40" rows="10" id="message" name="message" class="textarea form-control"></textarea>
									</div>
								</div>
							</div>							        
							<div class="form-group mb-0">
								<input class="btn-send" type="submit" value="Submit Now"/>
							</div>
							   
						</fieldset>
					</form>						
        		</div>
        	</div>
        </div>
    </div>

    </div>
  )
}

export default Contact