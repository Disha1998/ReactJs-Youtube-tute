import React from 'react'
import InfoBox from "./InfoBox";
import Arrivels from "./Slider";
import Workbox from "./Workbox";
import News from "./News";
import BannerBox from './BannerBox';
export default function Home(){
    return(
        <div>
            {/* <h1>This is home page</h1> */}
            <BannerBox />
            <InfoBox />
      <Arrivels />
      <Workbox />
      <News />
      
        </div>

    )
}