import React from "react";

function Navigation(props) {
    return (
        <header>
          <nav>
            <ul className="flex-row" style={{ justifyContent: "flex-end" }}>
              {props.categories.map((category) => {
                return (
                  <li key={category.name}>
                    <a
                      href={"#" + category.name.toLowerCase()}
                      onClick={() => {
                        props.setPage(category.name);
                      }}
                      className={`mx-4 ${
                        props.page === category.name && "navActive"
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      );
}

export default Navigation;