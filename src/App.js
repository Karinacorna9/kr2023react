import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import AddMovie from './components/AddMovie';
import GenreList from './components/GenreList';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-movie">Add Movie</Link>
                        </li>
                        <li>
                            <Link to="/genres">Genres</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={MovieList} />
                    <Route path="/movie/:id" component={MovieDetail} />
                    <Route path="/add-movie" component={AddMovie} />
                    <Route path="/genres" component={GenreList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;