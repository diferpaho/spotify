import React, { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Axios from "axios";

function Podcast() {
    // Declare a new state variable, which we'll call "count"
    const [list, setList] = useState([]);
    const [title, setTitle] = useState([]);
    const [banner, setBanner] = useState([]);
    const data = useParams();

    useEffect(() => {
        const url = `https://api.audioboom.com/channels/${data.id}`;
        Axios({
            url: url,
          })
            .then((response) => {
              console.log(response.data.body.channel.title);
              setTitle(response.data.body.channel.title);
              setBanner(response.data.body.channel.urls.banner_image.original);
              console.log(banner)
            })
            .catch((error) => {
              console.log(error);
            });
        
      }, [setList]);

    return (
        <div id="col-de" className="col-7 col-md-8 col-lg-9 col-xl-10 bg-secondary m-0 p-0" >

        
            <div className="row mb-5">
                <div className="col-12 mb-3">
                    {banner ? 
                    <img id="banner" src={banner} class="img-fluid" alt="..."/>: 
                    <img id="banner" src="https://djmag.com/sites/default/files/article/image/Header-1280x489_0.png" class="img-fluid" alt="..."/>}
                </div>
                <div className="col-12 mb-3 px-5">
                    <h3 className="text-white"
                    >{title}</h3>
                </div>

                <table className="table col-12 table-hover table-borderless mx-5">
              
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td colSpan="2">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td colSpan="2">Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="col-12 mb-3">
                <h3 className="text-secondary">© 2022 </h3>
            </div>
        </div>

    );
}

export default Podcast;