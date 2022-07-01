const FeatureItem = props => {
  const { feature_icon, title, feature_content } = props.item;
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='feature-item'>
        <i className={feature_icon} />
        <h4>{title}</h4>
        <p className='quote'>&quot;{feature_content}&quot;</p>
      </div>
      <style jsx>{`
        .feature-item {
          background: #17172d;
          padding: 40px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
        }
        .feature-item i {
          background: #ffffff;
          padding: 22px;
          margin-bottom: 35px;
          font-size: 56px;
          display: inline-block;
          color: #30284c;
          border-radius: 55px;
        }
        .feature-item h4 {
          color: #ffffff;
        }
        .quote {
          font-weight: 500;
          color: #fafafa;
        }
        span {
          color: #323358;
        }
      `}</style>
    </div>
  );
};

export default FeatureItem;
