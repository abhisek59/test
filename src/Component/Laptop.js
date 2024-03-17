import React from 'react'
import img1 from './photos/photo1.jpg';

function Laptop(props) {
  return (
    <div className='container '>
        <div className='d-sm-inline-flex'>
            <div>
                <h4>{props.laptop}</h4>
                <ul>
                    <li className='font-weight-800'>Silver</li>
                    <li className='font-weight-800'>Starlight</li>
                    <li className='font-weight-800'>Space Gray</li>
                    <li className='font-weight-800'>Midnight</li>
                </ul>
                <h4>Chip <br />Apple M2 chip</h4>
                <ul>
                    <li className='font-weight-800'>8-core CPU with 4 performance cores and 4 efficiency cores</li>
                    <li className='font-weight-800'>8-core GPU</li>
                    <li className='font-weight-800'>16-core Neural Engine</li>
                    <li className='font-weight-800'>00GB/s memory bandwidth <br /> <i> Configurable to M2 with 8-core CPU and 10-core GPU</i></li>
                </ul>
                <h4>Media engine</h4>
                <ul>
                <li className='font-weight-800'>Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW</li>
                <li className='font-weight-800'>Video decode engine</li>
                <li className='font-weight-800'>Video encode engine</li>
                <li className='font-weight-800'>ProRes encode and decode engine</li>
                </ul>
                <h4>Display <br /> <i>Liquid Retina display</i></h4>
                <ul>
                <li className='font-weight-800'>13.6-inch (diagonal) LED-backlit display with IPS technology; 1 <br/>2560-by-1664 native resolution at 224 pixels per inch with support for 1 billion colors</li>
                <li className='font-weight-800'>500 nits brightness
</li>
                </ul>
                <h4>Colors</h4>
                <ul>
                <li className='font-weight-800'>Support for 1 billion colors</li>
                <li className='font-weight-800'>Wide color (P3)</li>
                <li className='font-weight-800'>True Tone technology</li>
                </ul>
                
            </div>
            
            <div>
            <img src={img1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Laptop