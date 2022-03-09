import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Home() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({
      url: "https://api.audioboom.com/channels/recommended",
    })
      .then((response) => {
        console.log(response.data.body);
        setList(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div id="col-de" className="col-7 col-md-8 col-lg-9 col-xl-10 bg-secondary px-5" >

      <nav className="navbar navbar-secondary bg-secondary ">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <form className="d-flex">
            <div className="dropdown me-5">
              <button className="btn btn-dark dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Salir</a></li>

              </ul>
            </div>
          </form>
        </div>
      </nav>
      <div className="row mb-5">
        <div className="col-12 mb-3">
          <h3 className="text-white">Podcasts recomendados:</h3>
        </div>
        
        {list.map((item) => (
          
        <div key={item.id} className="col-12 col-md-6 col-lg-3">
          <a href={"podcast/"+item.id} className="" id="item" >
            <div className="card mb-4 bg-dark box-hover" >
              <img src={item.urls.logo_image.original}
                className="card-img-top rounded-circle p-3" alt="..." />
              <div className="card-body">
                <p id="card-podcast-title" className="card-text text-white">{item.title}</p>
                <p className="card-text text-secondary">podcast</p>
              </div>
            </div>
          </a>
        </div>
        ))}

        
      </div>

      <div className="col-12 mb-3">
        <h3 className="text-secondary">© 2022 </h3>
      </div>
    </div>

  );
}

export default Home;