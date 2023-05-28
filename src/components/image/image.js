import vinyl from '../../resources/vinyl.png'
import './image.css';

function ImageTrack({list, date}) {
    return (
        <div className="container">
            <div className="image-container">
                {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img className="img3" src={data.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img className="img1" src={data.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
            </div>
            <div className="image-description">
                <p>Discover your favorite tracks with ease.</p>
                <p>Our Top Tracks section highlights your most-played tracks, so you can keep the music going.</p>
                <p className='arrows-description'>The arrows show the change in the tracks ranking since your last visit on {date}.</p>
            </div>
        </div>
    );
}

function ImageArtist({list, date}) {
    return (
        <div className="container">
            <div className="image-container">
            {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img className="img3" src={data.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img className="img1" src={data.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
            </div>
            <div className="image-description">
                <p>Explore your musical taste.</p>
                <p>Our Top Artist section showcases your most-played artists, so you can dive deeper into their catalog and discover new tracks.</p>
                <p className='arrows-description'>The arrows show the change in the artists ranking since your last visit on {date}.</p>
            </div>
        </div>
    );
}

function ImageGenre({date}) {
    return (
        <div className="container">
            <div className="image-description">
                <p>Discover the breadth of your musical interests. </p>
                <p>Our Top Genres section highlights the genres you listen to most frequently, so you can explore new artists and tracks within those genres.</p>
                <p className='arrows-description'>The arrows show the change in the genres ranking since your last visit on {date}.</p>
            </div>
        </div>
    );
}

function ImageMainstream({date}) {
    return (
        <div className="container">
            <div className="image-container">
                <img className="img1" src={vinyl} alt={"first"} width={"150px"} height={"150px"}/>
                <img className="img2" src={vinyl} alt={"second"} width={"150x"} height={"150px"}/>
                <img className="img3" src={vinyl} alt={"third"} width={"150px"} height={"150px"}/>
            </div>
            <div className="image-description">
                <p>See how your musical taste stacks up.</p>
                <p>Our Mainstream score section calculates your listening habits and compares them to the mainstream, so you can see how eclectic your taste is.</p>
                <p className='arrows-description'>The arrows show the change in user mainstream score since your last visit on {date}.</p>
            </div>
        </div>
    );
}

function ImageRecently({list}) {
    return (
        <div className="container">
            <div className="image-container">
                {list.slice(0,3).map((data, i, arr) => {
                    return(
                        i + 1 === arr.length ? <img className="img3" src={data.track.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/> : <img className="img1" src={data.track.album.images[1].url} alt={"first"} width={"150px"} height={"150px"}/>
                    )})}
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