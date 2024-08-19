import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const renderRightNav = () => {
    const navigation = [
      { id: "home", label: "Home", path: "/", isDisabled: true },
      { id: "about", label: "About", path: "/about/", isDisabled: true  },
      {
        id: "education",
        label: "Education",
        path: "/education",
        isDisabled: true,
      },
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
      <div className="topbar__left">Manohar N</div>
      {renderRightNav()}
    </div>
  );
};
export default Topbar;
