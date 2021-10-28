import './_Services.scss';

import Pricelist from '../../Assets/Studio-Price-List.pdf'
import ServiceImage from '../../Components/ServiceImage/ServiceImage';

import jedd from '../../Assets/jeddstill.jpg'
import performance from '../../Assets/Performance2.jpg'
import sm7b1 from '../../Assets/SM7b1.jpg'
import DT7701 from '../../Assets/DT7701.jpg'


function Services
    () {
    return (
        <div className="services-container" id="services">
            <h2 style={{ textAlign: "center" }}>Services and Equipment</h2>
            <ServiceImage image={jedd} title="Podcast Recording" text="Professional podcast audio recording and editing with the assistance of our in-house engineers. We also have packages that include video podcast recording using our Black Magic cinema cameras. " flex="row" />
            <ServiceImage image={performance} title="Vocal and Acoustic Recording" text="Audio and video production of vocal and acoustic performances with top of the range equipment in our homely studio." flex="row-reverse" />
            <ServiceImage image={sm7b1} title="Voice Over Recording" text="Our soundproofed studio makes it the perfect environment to record great sounding vocals and voice-overs. Whether you’re working on an advert, or looking to promote your business, we can help you achieve the quality you need for specification." flex="row" />
            <ServiceImage image={DT7701} title="Mixing, Production and Mastering" text="Mixing and mastering for all forms of audio including voice overs, music and podcasts" flex="row-reverse" />

            <a href={Pricelist} target="_blank" rel="noreferrer" className="pricelist-link">DOWNLOAD OUR PRICELIST and TECHNICAL SPECIFICATIONS</a>

        </div >
    );
}

export default Services
    ;