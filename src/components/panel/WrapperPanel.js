import '../header/header.css';
import '../dashboard/dashboard.css';

import Navigation from '../navigation/navigation';
import Friend from '../friend/friend';

function WrapperPanel({ component }) {

    return (
        <div>
            <div className="row g-0">
                <div className="col">
                    <Navigation/>
                </div>
                <div className="col-lg-9">
                    {component}
                </div>
                <div className="col">
                    <Friend/>
               </div>
            </div>
        </div>
    );
}
export default WrapperPanel;