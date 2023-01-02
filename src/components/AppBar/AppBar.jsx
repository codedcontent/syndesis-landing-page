import { useState } from "react";
import syndesisLogo from "../../assets/syndesis logo 2.png";
import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Modal, ModalClose } from "@mui/joy";
import PixIcon from "@mui/icons-material/Pix";

const navLinks = [
  {
    title: "home",
    path: "/",
    id: 1,
  },
  {
    title: "about us",
    path: "/about-us",
    id: 2,
  },
  {
    title: "services",
    path: "/services",
    id: 3,
  },
  {
    title: "contact us",
    path: "/contact-us",
    id: 4,
  },
];

const { pathname } = window.location;

const AppBar = () => {
  const [activeUrl] = useState(pathname);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleOpen = () => {
    setNavMenuOpen(true);
  };

  return (
    <div className="w-screen flex items-center justify-between h-16 md:px-16 z-50 p-5 m-auto sticky top-0 left-0">
      <a href="/">
        <PixIcon className="text-black rotate-90" fontSize="large" />
      </a>

      <div className="md:flex items-center justify center gap-5 hidden">
        {navLinks.map((link) => (
          <div
            className="group flex flex-col items-center justify-center w-max link-drop"
            key={link.id}
          >
            <a
              className={`capitalize font-text text-sm ${
                activeUrl === link.path ? "font-bold" : "font-light"
              } ${activeUrl === "/getting-started" && "text-white "}`}
              href={link.path}
              style={
                activeUrl === "/getting-started"
                  ? {
                      textShadow: "2px -2px 2px rgba(0,0,0,0.6)",
                    }
                  : null
              }
            >
              {link.title}
            </a>

            <div
              className={`h-0.5 text ${
                activeUrl === link.path
                  ? "w-3/4 bg-black"
                  : "w-0 transition-all ease-in-out group-hover:w-3/4 duration-300 bg-black h-[1px]"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Nav Menu */}
      <div className="md:hidden">
        <MenuIcon onClick={handleOpen} />
      </div>

      {navMenuOpen && (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={navMenuOpen}
          onClose={() => setNavMenuOpen(false)}
        >
          <div className="h-screen flex flex-col md:hidden items-center justify-center gap-5">
            <ModalClose
              variant="outlined"
              sx={{
                top: "5%",
                right: "5%",
                boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                borderRadius: "50%",
                bgcolor: "background.body",
              }}
            />

            {navLinks.map((link) => (
              <div
                className="group flex flex-col items-center justify-center w-max link-drop"
                key={link.id}
              >
                <a
                  className={`capitalize font-text text-sm ${
                    activeUrl === link.path ? "font-bold" : "font-extralight"
                  }`}
                  href={link.path}
                >
                  {link.title}
                </a>

                <div
                  className={`h-0.5 text ${
                    activeUrl === link.path
                      ? "w-3/4 bg-black"
                      : "w-0 transition-all ease-in-out group-hover:w-3/4 duration-300 bg-gray-300"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AppBar;
