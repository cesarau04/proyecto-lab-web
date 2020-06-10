import React from 'react'
<<<<<<< HEAD

=======
>>>>>>> master
import NavBar from './NavBar';
import PlacesSuggestionPage from './PlacesSuggestionPage';
import SearchForm from './SearchForm';
import './StayNear.css';
// LOGICA DE FIREBASE

const SearchPage = () => {
    return (
        <div className="container center" >
            <div className="z-depth-3 center-sign bgWhite">
                <NavBar logoSize={""} current={"Search"} dark={"True"} />
                <div className="container">
                    <h2>Search</h2>
                    <h5>Book for 1-night & stay with students like you</h5>
                    <div className="row">
                        <div className="col s12 m4">
                            <SearchForm/>
                        </div>
                        <div className="col s12 m8">
                            <PlacesSuggestionPage background={""}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;