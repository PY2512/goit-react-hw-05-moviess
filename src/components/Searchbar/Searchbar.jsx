import React, {Component} from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';


class Searchbar extends Component {
    state = { searchImageName: '' }

    handleImageChange = event => {
        this.setState({searchImageName: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        const {searchImageName} = this.state;
        event.preventDefault();
        if (searchImageName.trim() === '') {
            toast.error('What picture do you need?')
        }
        this.props.submit(this.state.searchImageName);
        this.setState({searchImageName: ""});
    };

    render() {
        const {searchImageName} = this.state
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button className="SearchForm-button" type="submit">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchImageName}
                    onChange={this.handleImageChange}/>
                </form>
            </header>
            
        );
    }
}

Searchbar.propTypes = {
    submit: PropTypes.func.isRequired,
};

export default Searchbar;