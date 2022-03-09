import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from "axios";


function Podcast() {
    // Declare a new state variable, which we'll call "count"
    const [list, setList] = useState([]);
    const [title, setTitle] = useState([]);
    const [banner, setBanner] = useState([]);
    let temp=0;
    const data = useParams();

    useEffect(() => {
        const url = `https://api.audioboom.com/channels/${data.id}`;
        Axios({
            url: url,
        })
            .then((response) => {
                setTitle(response.data.body.channel.title);
                setBanner(response.data.body.channel.urls.banner_image.original);
            })
            .catch((error) => {
                console.log(error);
            });

        Axios({
            url:`https://api.audioboom.com/channels/${data.id}/audio_clips`,
        })
            .then((response) => {
                setList(response.data.body.audio_clips);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [setList]);

    
    function secondsFormat( s ) {
        var day = Math.floor (s / (24 * 3600)); // Math.floor () redondea hacia abajo 
        var hour = Math.floor( (s - day*24*3600) / 3600);
        var minute = Math.floor( (s - day*24*3600 - hour*3600) /60 ); 
        var second = s - day*24*3600 - hour*3600 - minute*60; 
            return minute + ":" + Math.trunc(second); 
    }

    function getDate( s ) {
            
            return s.substring(0,10); 
    }

    function getPk( ) {
        temp= temp+1;
        return temp; 
    }

    return (
        <div id="col-de" className="col-7 col-md-8 col-lg-9 col-xl-10 m-0 p-0" >


            <div className="row mb-5">
                <div className="col-12 mb-3">
                    {banner ?
                        <img id="banner" src={banner} className="img-fluid" alt="..." /> :
                        <img id="banner" src="https://djmag.com/sites/default/files/article/image/Header-1280x489_0.png" className="img-fluid" alt="..." />}
                </div>
                <div className="col-12 mb-3 px-5">
                    <h3 className="text-white"
                    >{title}</h3>
                </div>

                <table className="table col-12 table-borderless mx-5 text-white">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TÍTULO</th>
                    <th scope="col">AGREGADO EL</th>
                    <th scope="col">DURACIÓN</th>
                    </tr>
                </thead>
                    <tbody>
                 
                        {list.map((item) => (
                        <tr className='box-table'>
                            <td >{getPk()}</td>
                            <td >{item.title}</td>
                            <td>{getDate(item.updated_at)}</td>
                            <td>{secondsFormat(item.duration/100)}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className="col-12 mb-3">
                <h3 className="text-secondary">.</h3>
            </div>
        </div>

    );
}

export default Podcast;