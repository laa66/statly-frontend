import Image from '../image/image';
import List from '../list/list';
import Error from '../error/error';

import { fetchHistory } from './fetchHistory';
import { useEffect, useState } from 'react';

function History() {
    const [history, setHistory] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetchHistory().then((data) => {
            setHistory(data.items);
        }).catch((err) => {
            setHasError(true);
            setStatus(err.message);
            console.log(err.message);
        })}, []);

    if (hasError) return (<div><Error code={status}/></div>)
    return (
        <div className="panel animate-fade">
            <Image.ImageRecently list={history}/>
            <List.HistoryList list={history}/>
        </div>
    );
}

export default History;