import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByName } from '../actions/filters';

export class CustomersListFilters extends React.Component {
    
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                    placeholder="Busca..."
                />
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByName: () => dispatch(sortByName())
});

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomersListFilters);