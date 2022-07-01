const DonateCard = props => {
  const {
    image,
    tag,
    card_title,
    amount_raised,
    goal_amount,
    total_donors
  } = props.item;
  return (
    <div className='col-lg-3 col-md-6'>
      <div className='card single-popular-cause'>
        <div className='card-body'>
          <figure>
            <img
              className='card-img-top img-fluid'
              src={image}
              alt='Card image cap'
            />
          </figure>
          <div className='card_inner_body'>
            <div className='tag'>{tag}</div>
            <h4 className='card-title'>{card_title}</h4>
            <div className='d-flex justify-content-between raised_goal'>
              <p>{amount_raised}</p>
              <p>
                <span>{goal_amount}</span>
              </p>
            </div>
            <div className='d-flex justify-content-between donation align-items-center'>
              <h1 className='primary-btn'>01</h1>
              <p>
                <span className='ti-heart mr-1' />
                {total_donors} Donors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
