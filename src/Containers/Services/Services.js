import './_Services.scss';

import Pricelist from '../../Assets/Studio-Price-List.pdf'


function Services
    () {
    return (
        <div className="services-container" id="services">
            <h1>Services and Equipment</h1>
            <p>We have a range of services available:</p>
            <ul className="services-list">
                <li>Podcast Recording</li>
                <li>Vocal Recording</li>
                <li>Voice Over Recording</li>
                <li><a href={Pricelist} target="_blank" rel="noreferrer">DOWNLOAD OUR PRICELIST and TECHNICAL SPECIFICATIONS</a></li>
            </ul>
        </div >
    );
}

export default Services
    ;