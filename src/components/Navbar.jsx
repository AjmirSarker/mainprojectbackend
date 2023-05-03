import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavOptions from './NavOptions';

function Navbar() {
  const [options,setOptions] = useState({ browse_products: false, browse_blogs: false, search: false, resource_menu: false, accounts: false }); 

  const checkOption_type = (option) => {

    const cloning_options = {...options};
    Object.keys(cloning_options).forEach(key => {
      if(option === key) cloning_options[key] = !cloning_options[key];
      else {
        cloning_options[key] = false;
      }
    });

    setOptions(cloning_options);
  }


  return (
    <nav>

      <div className="nav__desktop">
        <section className="nav__top">

          <div className="mx-auto nav__wrapper container">

            <ul className="nav__logo list__unlisted">
              <li><Link to="https://www.google.com">PCPARTPICKER</Link></li>
            </ul>

            <ul className="nav__pages list__unlisted">
              <li><Link to="http://www.google.com">Login</Link></li>
              <li><Link to="https://www.google.com">Register</Link></li>
              {/*<li className="nav__account-mode">
                <div className="modeSwitch">
                  <div className="modeSwitch__wrapper">
                    <div className="modeSwitch__toggle modelSwitch__toggle__light-mode" />
                  </div>
                </div>
              </li>*/}
            </ul>

          </div>

        </section>

        <section className="nav__bottom">
          <div className="nav__wrapper nav__wrapper__botom container mx-auto">
            <ul className="nav__categories list__unlisted">

              {/*<li className="nav__categories__partlist">
                <a href="https://www.google.com">
                  <BuildOutlinedIcon fontSize="medium" className="nav__icon" />
                  Builder
                </a>
              </li> */}
              <li className="nav__categories__guides"
              onClick={() => checkOption_type("browse_blogs")}>
                <Link>
                  <FeedOutlinedIcon fontSize="medium" className="nav__icon" />
                  Blogs
                </Link>
              </li>
              <li className={options.browse_blogs ? 'browserProducts' : 'browserProducts browserProducts__hide'} aria-hidden="true">

                <div className="browserProducts__wrapper mx-auto container">
                  <div className="browserProducts__block--group1">

                    <ul className="browserProducts__block--popular list__unlisted">

                      {
                        [...Array(14)].map((_,i) => (
                          <li key={Math.random()}>
                            <Link to="https://www.google.com">
                              <img src="https://picsum.photos/600/600" alt="product" />
                              Blog {i+1} ({Math.floor(Math.random()*10)+1})
                            </Link>
                          </li>
                        ))
                    }

                    </ul>

                  </div>

                </div>

              </li>
              <li className="nav__categories__builds">
                <Link to="https://www.google.com">
                  <DevicesOutlinedIcon fontSize="medium" className="nav__icon" />
                  Completed Builds
                </Link>
              </li>
              <li
                className="nav__categories__browserProducts js_trigger__browserProducts"
                onClick={() => checkOption_type("browse_products")}
              >
                <Link>
                  <SettingsOutlinedIcon fontSize="medium" className="nav__icon" />
                  Browse Products

                  {
                    options.browse_products ? <KeyboardArrowUpOutlinedIcon fontSize="medium" className="arrow__up browserarrow" />
                      : <KeyboardArrowDownOutlinedIcon fontSize="medium" className="arrow__down browserarrow" />
                  }

                </Link>
              </li>
              <li className={options.browse_products ? 'browserProducts' : 'browserProducts browserProducts__hide'} aria-hidden="true">

                <div className="browserProducts__wrapper mx-auto container">
                  <div className="browserProducts__block--group1">

                    <ul className="browserProducts__block--popular list__unlisted">

                      {
                        [...Array(14)].map((_,i) => (
                          <li key={Math.random()}>
                            <Link to="https://www.google.com">
                              <img src="https://picsum.photos/600/600" alt="product" />
                              Product {i+1}
                            </Link>
                          </li>
                        ))
                    }

                    </ul>

                  </div>

                </div>

              </li>

              <li className="nav__sublinks">
                <Link to="http://www.google.com" className="nav__categories__forum">
                  Formus
                </Link>

                <Link to="https://www.google.com" className="nav__categories__trend">
                  Price Trends
                </Link>

              </li>
            </ul>

            <Link className="nav__search" role="button" 
            onClick={() => checkOption_type("search")}
            >
              <SearchOutlinedIcon fontSize="medium" />
            </Link>
          </div>
        </section>

      </div>

      <div className="nav__mobile py-1 px-1">
        <div className="nav__wrapper">
          <ul className="nav__logo list__unlisted">
            <li><Link to="https://www.goggle.com">PCPARTPICKER</Link></li>
          </ul>

          <ul className="nav__menu__mobile list__unlisted">

            <li className="nav__icon nav__icon__blogs"
            onClick={() => checkOption_type('browse_blogs')}>
              <Link>
                <FeedOutlinedIcon fontSize="small" className="icon" />
              </Link>
            </li>

            <li
              className="nav__icon nav__icon__parts"
              onClick={() => checkOption_type('browse_products')}
            >
              <Link>
                <DevicesOutlinedIcon fontSize="small" className="icon" />
              </Link>
            </li>

            <li className="nav__icon nav__icon__search"
            onClick={() => checkOption_type('search')}>
              <Link>
                <SearchOutlinedIcon fontSize="small" className="icon" />
              </Link>
            </li>

            <li className="nav__icon nav__icon__accounts"
            onClick={() => checkOption_type('accounts')}>
              <Link>
                <Person2OutlinedIcon fontSize="small" className="icon" />
              </Link>
            </li>

            <li
              className="nav__icon nav__icon__resources"
              onClick={() => checkOption_type('resource_menu')}
            >
              <Link>
                <MenuOutlinedIcon fontSize="small" className="icon" />
              </Link>
            </li>

          </ul>

        </div>
      </div>

      <div className={options.browse_products ? 'nav__card nav__card__products nav__card__show' : 'nav__card nav__card__products'}>

        <NavOptions name="Browse Products" type="browse" />
        <div className="nav__card__content">
          <div className="nav__card__wrapper">
            <div className="browserProducts" aria-hidden="true">

              <div className="browserProducts__wrapper mx-auto">
                <div className="browserProducts__block--group1">

                  <ul className="browserProducts__block--popular list__unlisted">

                    {
                      [...Array(14)].map(() => (
                        <li key={Math.random()}>
                          <Link to="https://www.google.com">
                            <img src="https://picsum.photos/600/600" alt="product" />
                            Product 1
                          </Link>
                        </li>
                      ))
                    }

                  </ul>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      <div className={options.resource_menu ? 'nav__card nav__card__resources nav__card__show' : 'nav__card nav__card__resources'}>

        <NavOptions name="Resources" type="resources" />

        <div className="nav__card__content">
          <div className="nav__card__wrapper">
            <ul className="list__unlisted">
              <li className="nav__categories__guides">
                <Link to="https://www.google.com">
                  <FeedOutlinedIcon fontSize="medium" className="nav__icon" />
                  Build Guides
                </Link>
              </li>
              <li className="nav__categories__builds">
                <Link to="https://www.google.com">
                  <DevicesOutlinedIcon fontSize="medium" className="nav__icon" />
                  Completed Builds
                </Link>
              </li>

              <li className="nav__categories__forum">
                <Link to="http://www.google.com" className="forum">
                  Formus
                </Link>
              </li>

              <li className="nav__categories__trend">
                <Link to="https://www.google.com" className="trend">
                  Price Trends
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className={options.search ? 'nav__card nav__card__search nav__card__show' : 'nav__card nav__card__search'}>

        <NavOptions name="Search Products" type="search" />
        
        <div className="nav__card__content">
          <div className="mx-auto py-2 px-2">
            <div className="searchField">
              <form role="search" id="site__search">
                <input type="search" name="search" placeholder="Search..." className="text__input" />
                <button type="button" className="button button__primary">Search</button>
              </form>
            </div>
          </div>
        </div>

      </div>

      <div className={options.accounts ? 'nav__card nav__card__accounts nav__card__show' : 'nav__card nav__card__accounts'}>

        <NavOptions name="Account" type="accounts" />

        <div className="nav__card__content">
            <div className="nav__card__wrapper">
            <ul className="nav__account nav__account__mobile list__unlisted">
              <li className="nav__account__login">
                <Link className="">Log In</Link>
              </li>
              <li className="nav__account__register">
                <Link  className="">Register</Link>
              </li>
            </ul>
            </div>
        </div>
      </div>

      <div className={options.browse_blogs ? 'nav__card nav__card__blogs nav__card__show' : 'nav__card nav__card__blogs'}>

      <NavOptions name="Blogs" type="blogs" />
      <div className="nav__card__content">
        <div className="nav__card__wrapper">
          <div className="browserProducts" aria-hidden="true">

            <div className="browserProducts__wrapper mx-auto">
              <div className="browserProducts__block--group1">

                <ul className="browserProducts__block--popular list__unlisted">

                  {
                    [...Array(14)].map((_,i) => (
                      <li key={Math.random()}>
                        <Link to="https://www.google.com">
                          <img src="https://picsum.photos/600/600" alt="product" />
                          blog {i+1} ({Math.floor(Math.random()*10)+1})
                        </Link>
                      </li>
                    ))
                  }

                </ul>

              </div>

            </div>

          </div>
        </div>
      </div>

    </div>

    </nav>
  );
}

export default Navbar;
