import cofounders from '../assets/Prewave_cofounders_2.jpg'
import team from '../assets/Visibly_Team.jpg'
import group from '../assets/Gruppe1_neu_erweitert_v1__1_-min.png'
import office from '../assets/Creandum_London_office.jpg'
import tech from '../assets/Outside_1.jpg'
import photo from '../assets/chris-anderson-EvY_f9tzgGs-unsplash.jpg'

export default function Section5(){
    return(
        <>
        <div>
            <div>
                <h1>WHAT OTHERS SAY</h1>
                <p>Podcasts, interviews, articles -opinion by others.</p>
                <a href="#">DISCOVER ALL</a>
            </div>
            <div>
                <img src={cofounders}></img>
                <p>TECH.EU</p>
                <p>2024-25-5</p>
                <p>Prewave raises 63m series B</p>
                <p>Leveraging AI to address supply chain distribution</p>
            </div>
            <div>
                <img src={team}></img>
                <p>SIFTED</p>
                <p>2024-6-5</p>
                <p>WebAide closes 500m fund</p>
                <p>WebAide has raised its seventh fund to support seige and early startups.</p>
            </div>
            <div>
                <img src={group}></img>
                <p>EU STARTUPS</p>
                <p>2024-26-10</p>
                <p>Visibly raises 7m seed</p>
                <p>Visibly is rebuilding regulated for the infrastructure sector from the ground up.</p>
            </div>
            <div>
                <img src={office}></img>
                <p>FINANCIAL TIMES</p>
                <p>2024-26-3</p>
                <p>Webaide raised 500m in record time</p>
                <p>Visibly is rebuilding regulated for the infrastructure sector from the ground up.</p>
            </div>
            <div>
            <img src={tech}></img>
                <p>TECH EU</p>
                <p>2024-26-2</p>
                <p>Plancraft raises 12m series A</p>
                <p>Digitising work progress in the craft industry.</p>
            </div>
            <div>
            <img src={photo}></img>
                <p>TECHCRUNCH</p>
                <p>2024-5-2</p>
                <p>French AI startup H company raises 220m seed round</p>
                <p>The 220m seed included investers such as Accel, Eric Schmedit and Daniel Dines.</p>
            </div>
        </div>
        </>
    )
}