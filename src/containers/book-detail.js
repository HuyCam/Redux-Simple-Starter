import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookDetail extends Component {

    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }      
        return (        
            <div> 
                <h1>Book Detail: </h1>
                <p>Title: {this.props.book.title}</p>
                <p>Page: {this.props.book.page}</p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('Book detail stateToProp is running, old state', state);
    return {
        book: state.activeBook,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) { 
    // whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps)(BookDetail);
