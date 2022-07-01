const ImageSlider = props => {
  const { quote, author, photo } = props.data;
  return (
    <section className='banner-area relative'>
      <div className='overlay overlay-bg' />
      <div className='container'>
        <div className='row justify-content-lg-end align-items-center banner-content'>
          <div className='col-lg-5'>
            <h1 className='text-white'>{quote}</h1>
            <p>{author}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner-area {
          background: url(${photo});
          background-size: contain;
          background-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;
