const NewsLetter = () => {
  return (
    <form action='#'>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          required
        />
      </div>
      <button className='button primary-btn w-100' type='submit'>
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
