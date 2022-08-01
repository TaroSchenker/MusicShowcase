import React, {useState, useContext } from 'react'
import Albums from '../../components/Albums';
// import {JimSullivanAI} from '../../components/ArtistInfo/';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColourContext } from '../../context/ColourContext';
import ArtistInfo from '../../components/ArtistInfo';


const ArtistPage = () => {
    // const [colour, setColour] = useState('')
    const [colour, setColour] = useContext(ColourContext)
    
    const artistName = 'Jim Sullivan'
    const albumData = 
    [
        {artist: "Jim Sullivan", title: " U.F.O", image:"https://i.discogs.com/XSApkEWPSbmjWRXIRH6uFqUNjRsxAAmvTUmfVLcRiBU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzY3/MDQtMTYxMDMzNDk4/NC05MTAzLmpwZWc.jpeg", songs: ["song1", "song2", "song3", "song4"]},
        {artist: "Jim Sullivan", title: "Jim Sullivan", image:"https://i.discogs.com/3FB3vY8tXXFg5TgMnuKNgUuqMz7af5Y0qg5zhhjVe3I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2MzAw/NjAtMTU4Mzk2MTQ1/NS0zNTgwLmpwZWc.jpeg", songs: ["2song1", "2song2", "2song3", "2song4"]},
        {artist: "Jim Sullivan", title: " If The Evening Were Dawn", image:"https://i.discogs.com/yxweGb-sgs1bT8u4mNEXXmcdZw6N00UINUp52cMLYAg/rs:fit/g:sm/q:90/h:550/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTM0/OTE3LTE1Njg0ODIw/MDItNjczNC5qcGVn.jpeg", songs: ["3song1", "3song2", "3song3", "3song4"]},
        {artist: "Jim Sullivan", title: "Highway", image:"https://i.discogs.com/2tMVgkENaTqnT_co1ywy-xVTQohuQwKTKL1J93-Rvck/rs:fit/g:sm/q:90/h:576/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDEz/OTY0LTE1MjY1NzQx/NzMtMjI0MC5qcGVn.jpeg", songs: ["4song1", "4song2", "s4ong3", "4song4"]},
        {artist: "Jim Sullivan", title: "Rosey", image:"https://i.discogs.com/v5gbEqcGB_M1tO15PVT_OjRO_uWq1aZWYOI60pc5dLI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzY3/MTUtMTM4Mjc4MTc5/My04MDA1LmpwZWc.jpeg", songs: ["5song1", "5song2", "5song3", "5song4"]},
        {artist: "Jim Sullivan", title: " I Do What I Please", image:"https://i.discogs.com/ZKk4yOFKVbwBxWdfS7PinbehKTWKsrrXdoyMfxYwJJA/rs:fit/g:sm/q:90/h:460/w:477/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNDU4/NDUzLTE2MzMyNzQ4/MDQtNTU1NC5qcGVn.jpeg", songs: ["6song1", "6song2", "6song3", "6song4"]}
    ]

    function handleClick(e){
if(colour !== e.target.value){
  setColour(e.target.value)  

} else {
setColour('whitesmoke')
}
useEffect(()=>{
  console.log('the use context colour is', colour)
}, [colour])

    }
    return ( 
        <div className='main'>
            <h1 className="header"> Music Showcase </h1>  
            <ArtistInfo/>
            <Albums albumData={albumData} />

            
        </div>
     );
}
 
export default ArtistPage;
