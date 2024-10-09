import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css"

function Search({onSubmit}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchTerm = formData.get('search');
    if(!searchTerm.trim()) return
    onSubmit(searchTerm)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="visually-hidden" autocomplete="off">Search users</label>
      <input type="text" name="search" id="search-input" placeholder="Search users..."/>
      <button type="submit" aria-label="Search">
        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
      </button>
    </form>
  )
}

export default Search