import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PropTypes from 'prop-types';
import React from 'react';

function GiveMeIconBasedOnType(type) {
  if (type === 'browse') {
    return <DevicesOutlinedIcon className="icon" fontSize="small" />;
  }

  if (type === 'search') {
    return <SearchOutlinedIcon className="icon" fontSize="small" />;
  }

  if (type === 'accounts') {
    return <Person2OutlinedIcon className="icon" fontSize="small" />;
  }

  if (type === 'resources') {
    return <MenuOutlinedIcon className="icon" fontSize="small" />;
  }

  if (type === 'blogs') {
    return <FeedOutlinedIcon className="icon" fontSize="small" />;
  }
  
}

function NavOptions({ name, type }) {
  return (

    <div className="nav__card__header">
      <div className="nav__card__wrapper">
        <a
          href="/"
          className="nav__back"
          role="button"
        >
          <ArrowBackIosOutlinedIcon className="icon" fontSize="medium" />
        </a>

        <h6 className="nav__card__title">
          {
              GiveMeIconBasedOnType(type)
            }
          <span>{name}</span>
        </h6>
      </div>
    </div>

  );
}

NavOptions.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NavOptions;
