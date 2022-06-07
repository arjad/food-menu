import React from 'react'
import "./footer.css";
import playstore from "../../../assets/google-play.jpg";
import appstore from "../../../assets/btn-app-store-normal-2.svg";

function footer() 
{
    return (
    <div className='foot container-fluid '>
    <div className=' container d-flex justify-conetent-space-between'>
    <div className='row py-4'>
        <ul className='col-lg-2 col-md-4 col-sm-12'>
            <li><b>COMPANY</b></li>
            <li>FAQ</li>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
        </ul>

        <ul className='col-lg-2 col-md-4 col-sm-12'>
            <li><b>HELP & CONTACT</b></li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                    <path fill="#4a4a4a" fill-rule="evenodd" d="M16.7 15.696A9.437 9.437 0 0 0 19 9.5c0-2.272-.791-4.42-2.245-6.134l1.411-1.412c.31-.31-.81-1.43-1.12-1.12l-1.412 1.411A9.434 9.434 0 0 0 9.497 0c-2.273 0-4.42.791-6.134 2.245L1.95.834c-.31-.31-1.43.81-1.12 1.12l1.411 1.412c-2.99 3.528-2.99 8.74 0 12.268L.831 17.046c-.31.31.81 1.43 1.12 1.12l1.412-1.411A9.424 9.424 0 0 0 9.497 19a9.43 9.43 0 0 0 6.072-2.195l1.415 1.416c.31.31 1.43-.81 1.12-1.121l-1.403-1.404zm.714-6.196a7.847 7.847 0 0 1-1.838 5.072L13.7 12.695A5.24 5.24 0 0 0 14.777 9.5c0-1.144-.36-2.23-1.027-3.13l1.88-1.88a7.853 7.853 0 0 1 1.784 5.01zM6.887 12.114A3.669 3.669 0 0 1 5.805 9.5c0-.989.384-1.916 1.082-2.614a3.668 3.668 0 0 1 2.614-1.081c.988 0 1.915.384 2.613 1.081A3.67 3.67 0 0 1 13.196 9.5c0 .985-.384 1.916-1.082 2.614A3.669 3.669 0 0 1 9.5 13.195a3.668 3.668 0 0 1-2.614-1.081zm2.61-10.532c1.85 0 3.598.628 5.01 1.788l-1.881 1.88a5.234 5.234 0 0 0-3.13-1.027c-1.143 0-2.229.36-3.128 1.027L4.487 3.37a7.872 7.872 0 0 1 5.01-1.788zM3.37 4.49l1.88 1.88A5.234 5.234 0 0 0 4.224 9.5c0 1.14.36 2.23 1.028 3.13l-1.88 1.88a7.921 7.921 0 0 1 0-10.02zm6.127 12.928a7.843 7.843 0 0 1-5.01-1.788l1.88-1.88a5.243 5.243 0 0 0 3.13 1.027 5.232 5.232 0 0 0 3.063-.98l1.884 1.884a7.849 7.849 0 0 1-4.947 1.737z"></path>
                </svg>
                Help Center
            </li>
            <li><i class="far fa-envelope"></i>Email Us</li>
            <li><i class="fas fa-phone-alt"></i>080-4042-4242</li>
        </ul>

        <ul className='col-lg-4 col-md-12 col-sm-12'>
            <li><b>MORE FROM US</b></li>
            <li>Bulk/Party Order</li>
            <li>Cake Order</li>
            <li>FreshClub</li>
            <li>Offers</li>
        </ul>
    
        <div className='col-4 subs-div'>
            <p className='subs'>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
            <div class="input-grps border-0 bg-light">
              <input type="text" placeholder="Enter your email " aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div>
                <button class="subs-btn" >Subscribe</button>
              </div>
            </div>

            <div className='apps'>
                <img src={playstore}/>
                <img src={appstore}/>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>

            </div>
        </div>


    </div>
    </div>
    <div className='terms-div container d-flex justfy-content-start'>
        <p>Terms</p>
        <p className='ml-3'>Privacy</p>
    </div>

    </div>
    )
}

export default footer
