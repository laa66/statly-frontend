import Image from '../image/image';
import List from '../list/list';
import { fetchHistory } from './fetchHistory';
import { useEffect, useState } from 'react';

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory().then((data) => {
            setHistory(data.items);
        }).catch((err) => {console.log(err.message)})}, []);

    return (
        <div className="panel animate-fade">
            <Image.ImageRecently list={history}/>
            <List.HistoryList list={history}/>
        </div>
    );
}

export default History;