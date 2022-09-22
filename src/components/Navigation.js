import Arrow from './Arrow';

function Navigation (props) {
    return(
        <div className="nav">
            <div className="nav-prev">
                <Arrow className="prev-arrow"/>
            <p>Previous</p>
            </div>
            <div className="nav-next">
            <p>Next</p>
            <Arrow className="next-arrow"/>
            </div>
        </div>
    )
}

export default Navigation;