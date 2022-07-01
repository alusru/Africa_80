import Link from "next/link";

const Navi = () => {
  return (
    <ul className='navbar-nav'>
      <li>
        <Link href='/'>
          <a> Home </a>
        </Link>
      </li>
      <li>
        <Link href='/OurStoryPage'>
          <a>Our Story</a>
        </Link>
      </li>
      <li>
        <Link href='/AdvisoryBoardPage'>
          <a>Advisory Board</a>
        </Link>
      </li>
      <li>
        <Link href='/EventsPage'>
          <a>Events</a>
        </Link>
      </li>
      <li>
        <Link href='/MediaPage'>
          <a>News &#38; Media</a>
        </Link>
      </li>

      <li>
        <Link href='/ContactPage'>
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href='/Donate'>
          <a>Donate</a>
        </Link>
      </li>

      <style jsx>{`
        a {
          color: #000;
          font-weight: 550;
          transition: all 0.3s ease-out;
        }

        li:nth-child(1n)a:hover {
          color: #fff;
          background: #1b1b33;
        }
        li:nth-child(2n)a:hover {
          color: #fff;
          background: #2d0e0e;
        }
        li:nth-child(3n)a:hover {
          color: #fff;
          background: #110f1f;
        }
        li:nth-child(4n)a:hover {
          color: #fff;
          background: #ffc107;
        }
        li:nth-child(5n)a:hover {
          color: #fff;
          background: #001b09;
        }
        li:nth-child(6n)a:hover {
          color: #fff;
          background: #1b1b33;
        }

        // #1b1b33
        // #110f1f
        // #2d0e0e
        // #001b09
        // #504c0e
      `}</style>
    </ul>
  );
};

export default Navi;
