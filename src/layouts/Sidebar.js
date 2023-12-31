import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "EV Monitoring",
    href: "/1",
    icon: "bi bi-tree",
  },
  {
    title: "Hypothermic Sensors",
    href: "/2",
    icon: "bi bi-thermometer-half",
  },
  {
    title: "Heartbeat Sensors",
    href: "/3",
    icon: "bi bi-heart-pulse",
  },
  {
    title: "Sleep Monitoring",
    href: "/4",
    icon: "bi bi-display",
  },
  {
    title: "RFID Tags",
    href: "/5",
    icon: "bi bi-tags",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  const handleRefreshClick = () => {
    window.location.reload();
  };


  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Link  to="/home" className="nav-link">
          <h2>Smart HealthCare Dashboard</h2>
        </Link>
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <hr></hr>
      <div className="mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button color="danger" tag="a" target="_blank" className="mt-3" onClick={handleRefreshClick}>
            Refresh Dashboard
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
