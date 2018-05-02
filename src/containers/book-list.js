import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';  // get the action creator
import { bindActionCreators } from 'redux';     // this will make the action flow in reducer to reproduce state


class BookList extends Component {
    renderList() {
        console.log(this.props);
        return this.props.books.map((book) => {
            return(
                <li 
                key={book.title}
                onClick = {() => this.props.selectBook(book)}
                className="list-group-item" >
                {book.title}
                </li>         
            ); 
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    };
}

// what return from this function is in the props of the component
function mapStateToProps(state) {
    console.log('map state to prop running');
    // Whatever is returned will show up as props
    // inside of BookList
    return {
      books: state.books
    };
}

// Anything return from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    console.log('map dispatch to props is running', dispatch);
    // whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Export the container not the component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);             