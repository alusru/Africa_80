import Navi from "../navigation";
const Header = () => {
  return (
    <header className='default-header'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <img className='logo' src='static/img/logo.jpg' alt='site logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='fa fa-bars' />
          </button>

          <div
            className='collapse navbar-collapse justify-content-end align-items-center'
            id='navbarSupportedContent'
          >
            <Navi />
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          width: 1641px;
          width: 100%;
          background: #fff;
          box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
          top: 0px;
          padding: 0px;
        }
        // Because flex properties aren't inherited, we need to redeclare these first
        // few properties so that content nested within behave properly.
        .navbar > .container,
        .navbar > .container-fluid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }
        img {
          width: 10em;
        }
      `}</style>
    </header>
  );
};

export default Header;
