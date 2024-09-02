import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

const Topbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toHome = () => {
    navigate('/');
  };

  const handleHamburger = () => {
    setIsHamburger(!isHamburger);
  };

  const onNavigate = (event) => {
    const path = event.currentTarget.getAttribute("data-path");
    if (path) {
      navigate(path);
      setIsHamburger(false); // Close the hamburger menu when a navigation item is clicked
    }
  };

  const renderRightNav = () => {
    const navigation = [
      { id: "home", label: "Home", path: "/" },
      {
        id: "design-system",
        label: "Design System",
        path: "/design-system",
      },
      {
        id: "page-not-found",
        label: "Page Not Found",
        path: "/page-not-found",
      },
    ];

    return (
      <>
        <div className={`topbar__right ${isHamburger ? "topbar__right--open" : ""}`}>
          {navigation.map(({ id, label, path, isDisabled }) => (
            <div
              key={id}
              data-path={path}
              className={`topbar__nav ${
                location.pathname === path ? "topbar__nav--active" : ""
              } ${isDisabled ? "topbar__nav--disabled" : ""}`}
            onClick={onNavigate}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          className={`topbar__hamburger ${
            isHamburger ? `topbar__hamburger--open` : ""
          }`}
          onClick={handleHamburger}
        >
          <div className="topbar__hamburger--line" />
          <div className="topbar__hamburger--line" />
          <div className="topbar__hamburger--line" />
        </div>
      </>
    );
  };

  return (
    <div className="topbar__wrap">
      <div className="container container__topbar">
        <div className="topbar__left" onClick={toHome}>
          Manohar N
        </div>
        {renderRightNav()}
      </div>
    </div>
  );
};

export default Topbar;
