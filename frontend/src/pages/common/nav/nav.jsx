import React from 'react'
import "./nav.css";
import logo from "../../../assets/fm-header-logo.png";
import {Link} from 'react-router-dom';

function nav() 
{
    return (
        <div className='container-fluid'>
        <div className='nav container'>
            <div className='nav-left'>
                <Link to="/food/">
                    <img className="logo-img" src={logo}/>
                </Link>
                <div className='del ml-5'>
                    <h4>Deliver to :</h4>
                    <p>Koramangala, Bengal... <i class="fas fa-chevron-down"></i></p>
                </div>
            </div>

            <div className='nav-right'>
                
                 <div className='yellow-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
                        <g fill="#000" fill-rule="evenodd">
                            <path d="M17.887 7.027l-3.12-6.42a1.057 1.057 0 0 0-1.434-.492L12 .79l4.073 8.376 1.332-.673a1.107 1.107 0 0 0 .482-1.467zM0 6.671L4.232 15l10.34-5.005-4.234-8.328L0 6.67zm10.649 3.617a.18.18 0 0 1-.168.097l-2.08-.047a.193.193 0 0 0-.157.077L7.026 12.06a.182.182 0 0 1-.18.07.185.185 0 0 1-.151-.127l-.593-1.945a.185.185 0 0 0-.123-.12L4 9.312a.177.177 0 0 1-.127-.143.18.18 0 0 1 .08-.176l1.708-1.155a.183.183 0 0 0 .082-.15l-.007-2.032c0-.066.041-.13.102-.16a.18.18 0 0 1 .195.017l1.654 1.232a.187.187 0 0 0 .171.027l1.978-.63a.186.186 0 0 1 .188.044.18.18 0 0 1 .044.19L9.35 8.38l1.282 1.715c.045.06.048.133.018.193z"></path>
                        </g>
                    </svg>
                    <b>FreshPass</b>
                    <small>Get extra 20% off</small>
                </div>
                

                <div className='violet-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path fill="#FFF" fill-rule="nonzero" d="M6.68 8.998l.003.064c.013.266.058.505.084.584.047.143.068.298.115.43.244.672.503 1.167.503 1.378 0 .536-.484.546-.484.546H5.099s-.484-.01-.484-.546c0-.211.26-.706.503-1.378.047-.132.068-.287.115-.43a2.769 2.769 0 0 0 .086-.648A3.032 3.032 0 0 1 3 10.061c-1.657 0-3-1.301-3-2.906 0-1.606 1.343-2.907 3-2.907.118 0 .234.007.348.02A2.822 2.822 0 0 1 3 2.906C3 1.3 4.343 0 6 0s3 1.301 3 2.907c0 .491-.126.954-.348 1.36.114-.012.23-.019.348-.019 1.657 0 3 1.301 3 2.907 0 1.605-1.343 2.906-3 2.906-.935 0-1.77-.414-2.32-1.063z"></path>
                    </svg>
                    <b>Try FreshClob</b>
                    <button>NEW</button>

                </div>
                <div className='download-div'>
                    <Link to="/food/admin">Admin Login</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default nav
