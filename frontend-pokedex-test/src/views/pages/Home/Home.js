import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchField from '../../../components/SearchField/SarchField';

function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#05AFF2" }}>
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center" style={{ minHeight: "100" }}>
                        <div className="col-md-8">
                            <div className="card p-4" style={{ backgroundColor: "#F21B6A" }}>
                                <h1 className="mb-4" style={{ color: "#F2DA5E" }}>Pokedex</h1>
                                <SearchField></SearchField>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default Home;
