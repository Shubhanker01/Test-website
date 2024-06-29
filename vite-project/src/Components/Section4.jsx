import rightarrow from '../assets/icons8-right-arrow-50.png'
import visibly from '../assets/Visibly.jfif'
import peterstilwell from '../assets/welcome__peter_stilwell.jfif'
import nick from '../assets/welcome__nick_wilkins.jpg'
export default function Section4() {
    return (
        <>
            <div>
                <h1>OUR PERSPECTIVES AND UPDATES</h1>
                <p>Deepdives, resources, thoughts
                    – content by us.</p>
                <a href="#">DISCOVER ALL</a>
            </div>
            <div>
                <p>
                    BEATA KLEIN
                </p>
                <p>2024-26-28</p>
                <p>Bridging the gap:The rise of the Solo GP</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <img src={visibly}></img>
                <p>HANEL BHAVEJA</p>
                <p>2024-06-10</p>
                <h2>Backing Visibly</h2>
                <p>Building better training for those who build our world</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <p>CARL FITJOFFSON</p>
                <p>2024-05-21</p>
                <h2>Backing H Company</h2>
                <p>Former Deepmind employees bringing AGI to the world</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <p>WEBAIDE TEAM</p>
                <p>2024-05-21</p>
                <h2>Mastering AI Governance and Security</h2>
                <p>The toolset to bring you control</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <img src={peterstilwell}></img>
                <p>STAFFAN HAELGLESON</p>
                <p>2024-25-04</p>
                <p>Welcome, Peter Stilwell!</p>
                <p>Peter Stilwell joins as Chief Operating Officer</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <p>WEBAIDE TEAM</p>
                <p>2024-25-04</p>
                <p>Webaide Fund VII</p>
                <p>500m to continue backing Europe's winners.</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <img src={nick}></img>
                <p>JOHAN BRENNER</p>
                <p>2024-26-03</p>
                <p>Welcome, Nick Wilkins!</p>
                <p>Introducing our New Head of Marketing,Nick Wilkins</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <p>STAFFAN HAELGLESON</p>
                <p>2024-05-21</p>
                <h2>Backing Plancraft</h2>
                <p>Digitizing the craft industry</p>
                <img src={rightarrow}></img>
            </div>
            <div>
                <p>CARL FRITJOFFSON</p>
                <p>2024-05-21</p>
                <h2>Backing Codesphere</h2>
                <p>Eliminating the gap between development and operations</p>
                <img src={rightarrow}></img>
            </div>
        </>
    )
}