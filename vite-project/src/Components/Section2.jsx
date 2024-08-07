import spotifylogo from '../assets/Spotify.svg'
import rightarrow from '../assets/icons8-right-arrow-50.png'
import depop from '../assets/Depop.svg'
import traderepublic from '../assets/TradeRepublic.svg'
import cornershop from '../assets/Cornershop.svg'
import bolt from '../assets/Bolt.svg'
import kry from '../assets/Kry.svg'
import kahoot from '../assets/Kahoot.svg'

export default function Section2() {
    return (
        <>
            <div className='section-compdiv'>
                <div className='sec-2'>
                    <div className='sec-2a'>
                        <img src={spotifylogo}></img>
                        <p>The world's leading digital music service</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}

                    </div>
                    <div  className='sec-2b'>
                        <img src={depop}></img>
                        <p>Mobile fashion marketplace</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2c'>
                        <img src={traderepublic}></img>
                        <p>Mobile-only and commission-free savings platform</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2d'>
                        <img src={cornershop}></img>
                        <p>Groceries delivered to your doorsteps</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2e'>
                        <img src={bolt}></img>
                        <p>All-in-one mobility app</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2f'>
                        <img src={kry}></img>
                        <p>Digital-first healthcare provider</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2g'>
                        <img src={kahoot}></img>
                        <p>A global leading learning platform</p>
                        {/* <div>
                            <p>DISCOVER</p>
                            <img src={rightarrow}></img>
                        </div> */}
                    </div>
                    <div  className='sec-2h'>
                        <p>We back Companies. But we beleive in humans.</p>
                        <a href='#'>VIEW ALL</a>
                    </div>
                </div>

            </div>
        </>
    )
}