import test from '../../resources/testuserimage.jpg';
import './image.css';

function ImageTrack() {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={test} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={test} alt={"second"} width={"150px"} height={"150px"}/>
                <img className="img3" src={test} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>Discover your favorite tracks with ease.</p>
                <p>Our Top Tracks section highlights your most-played tracks, so you can keep the music going.</p>
            </div>
        </div>
    );
}

function ImageArtist() {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={test} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={test} alt={"second"} width={"150px"} height={"150px"}/>
                <img className="img3" src={test} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>Explore your musical taste.</p>
                <p>Our Top Artist section showcases your most-played artists, so you can dive deeper into their catalog and discover new tracks.</p>
            </div>
        </div>
    );
}

function ImageGenre() {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={test} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={test} alt={"second"} width={"150px"} height={"150px"}/>
                <img className="img3" src={test} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>Discover the breadth of your musical interests. </p>
                <p>Our Top Genres section highlights the genres you listen to most frequently, so you can explore new artists and tracks within those genres.</p>
            </div>
        </div>
    );
}

function ImageMainstream() {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={test} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={test} alt={"second"} width={"150px"} height={"150px"}/>
                <img className="img3" src={test} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>See how your musical taste stacks up.</p>
                <p>Our Mainstream score section calculates your listening habits and compares them to the mainstream, so you can see how eclectic your taste is.</p>
            </div>
        </div>
    );
}

function ImageRecently() {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={test} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={test} alt={"second"} width={"150px"} height={"150px"}/>
                <img className="img3" src={test} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>Never miss a beat. </p>
                <p>Our Recently Played section keeps track of the songs you've listened to recently, so you can easily revisit your favorites.</p>
            </div>
        </div>
    );
}

const exportedObject = {
    ImageTrack, ImageArtist, ImageGenre, ImageMainstream, ImageRecently
};

export default exportedObject;