import React, { Component } from 'react'
import {InstantSearch,SearchBox,Hits} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
    'RWLA5PBM7X',
    'fdd07da28a21136346512bb234e09fd9'
);
const hit = (props) => {
    const {hit} = props;
    console.log(props);

    return <h1>{hit.name}</h1>;
}

class Algolia extends Component {
    render() {
        return (
            <InstantSearch
            
            indexName="packages"
            searchClient={searchClient}            
            >
                <header>
                    <SearchBox translations={{placeholder:'Search For Products'}} />
                </header>
                <Hits hitComponent={hit}/>
            </InstantSearch>
        )
    }
}
export default Algolia;