import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const renderRightNav = () => {
    const navigation = [
      { id: "home", label: "Home", path: "/" },
      { id: "about", label: "About", path: "/about/" },
      {
        id: "education",
        label: "Education",
        path: "/education",
        isDisabled: true,
      },
    ];

    const onNavigate = (event) => {
      const path = event.currentTarget.getAttribute("data-path");
      if (path) {
        navigate(path);
      }
    };

    return (
      <div className="topbar__right">
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
    );
  };
  return (
    <div className="container topbar__container">
      <button className="topbar__left">Topbar</button>
      {renderRightNav()}
    </div>
  );
};
export default Topbar;
