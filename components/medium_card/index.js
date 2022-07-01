const MediumCard = props => {
  const { number, text } = props.item;
  return (
    <div className='how-feature col-lg-3 col-md-6'>
      <div className='how-feature-item'>
        <h1 className='number'>{number}</h1>
        {/* <h4>{title}</h4> */}
        <p className='quote'>{text}</p>
      </div>
      <style jsx>{`
        .how-feature-item {
          background: #17172d;
          padding: 40px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
          height: 350px;
        }
        .how-feature-item .number {
          background: #ffffff;
          padding: 18px;
          margin-bottom: 35px;
          font-size: 40px;
          display: inline-block;
          color: #30284c;
          border-radius: 55px;
        }
        .how-feature-item h4 {
          color: #ffffff;
        }
        .quote {
          font-weight: 500;
          color: #fafafa;
        }
        span {
          color: #323358;
        }
        // Colors:
        // #1b1b33
        // #110f1f
        // #2d0e0e
        // #001b09
        // #504c0e

        .how-feature:nth-child(1) > .how-feature-item {
          background: #110f1f;
        }
        .how-feature:nth-child(2) > .how-feature-item {
          background: #2d0e0e;
        }
        .how-feature:nth-child(3) > .how-feature-item {
          background: #001b09;
        }
        .how-feature:nth-child(4) > .how-feature-item {
          background: #504c0e;
        }
      `}</style>
    </div>
  );
};

export default MediumCard;
