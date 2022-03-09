import React, { useState } from 'react';

function Podcast() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

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
                    <h3 className="text-white"
                    >Podcasts recomendados:</h3>
                </div>


            </div>

            <div className="col-12 mb-3">
                <h3 className="text-white">© 2022 </h3>
            </div>
        </div>

    );
}

export default Podcast;