import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';  // get the action creator
import { bindActionCreators } from 'redux';     // this will make the action flow in reducer to reproduce state


class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return(
                <li key={book.title} className="list-group-item" >{book.title}</li>         
            ); 
        });
    }

    render() {
        console.log(this.props.books);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// what return from this function is in the props of the component
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    
    return {
      books: state.books
    };
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Export the container not the component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);