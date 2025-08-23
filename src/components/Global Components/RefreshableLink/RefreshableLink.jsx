import { Link, useLocation, useNavigate } from "react-router-dom";

function RefreshableLink({ to, children, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (location.pathname === to) {
      e.preventDefault();
      navigate(0); // refresh current page
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

export default RefreshableLink;
