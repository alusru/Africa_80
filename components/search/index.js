const Search = () => {
  return (
    <aside className='single_sidebar_widget search_widget'>
      <form action='#'>
        <div className='form-group'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Keyword'
            />
            <div className='input-group-append'>
              <button className='btn' type='button'>
                <i className='fa fa-search' />
              </button>
            </div>
          </div>
        </div>
        <button className='button primary-btn w-100' type='submit'>
          Search
        </button>
      </form>
    </aside>
  );
};

export default Search;
