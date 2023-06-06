import List from '../list/list';
import Image from '../image/image';

function Analysis() {
    
    /*if (hasError) return (<div><Error code={status}/></div>)*/
    return (
        <div className="panel animate-fade">
            <Image.ImageAnalysis/>
            <List.Analysis/>
        </div>
    );
}

export default Analysis;