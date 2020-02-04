import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../containers/Main';

const Home = () => {
    return (
        <Main>
            <div className="home">
                <div>
                    <header>
                        <h1>Minae Choi</h1>
                        <p className="subtitle">LUX Designer</p>
                    </header>
                </div>
                <div>
                    <div>
                        <h2>View work examples</h2>
                    </div>
                    <div className="card-display">
                        <div className="nav-card">
                            <Link to="/making-great-promotions-decisions">
                                <div className="card-header">
                                    <h3>Making Great Promotions Decisions</h3>
                                </div>
                                <div className="card-body">
                                    <p>Description here</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Home;