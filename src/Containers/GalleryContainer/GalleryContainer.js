
import './_GalleryContainer.scss';
import sm7b1 from '../../Assets/SM7b1.jpg'
import sm7b2 from '../../Assets/SM7b2.jpg'
import jedd from '../../Assets/jeddstill.jpg'
import performance from '../../Assets/Performance.jpg'
import performance2 from '../../Assets/Performance2.jpg'
import DT770 from '../../Assets/DT7701.jpg'
import Gallery from '../../Components/Gallery/Gallery'

function GalleryContainer() {
    return (
        <div id="gallery" className="gallery-flex">
            <Gallery image={sm7b1} alt="sm7b" />
            <Gallery image={jedd} alt="podcasting" />
            <Gallery image={performance} alt="podcasting" />
            <Gallery image={performance2} alt="podcasting" />
            <Gallery image={DT770} alt="podcasting" />
            <Gallery image={sm7b2} alt="sm7b" />
        </div>
    );
}

export default GalleryContainer;

