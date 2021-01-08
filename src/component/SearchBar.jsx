import '../assest/css/searchBar.css'

function SearchBar(props) {
    return (
        <div className="search-bar">
            <input type="text" onChange={props.handleChange} />
        </div>
    )

}

export default SearchBar