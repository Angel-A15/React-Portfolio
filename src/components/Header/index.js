import React from 'react';
import Navigation from "../Navigation";

function Header(props) {
    // const { currentTab, setCurrentTab } = props;

    return (
        <header>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <h2>
            <a href="/" id="name">
              Angel F. Aguilar Guerrero
            </a>
          </h2>
          <Navigation categories= {props.categories}
                page={props.page}
                setPage={props.setPage}/>
        </header>
      );
}

export default Header;