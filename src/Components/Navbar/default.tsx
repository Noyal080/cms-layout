import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import defaultLogo from "../../assets/pngwing.com.png";
import DefaultDrawer from "./Drawer/default";

interface NavbarProps {
  logo?: string;
  logoWidth?: string | number;
  logoHeight?: string | number;
  bgColor?: string;
  fontColor?: string;
  isStickyNav?: boolean;
  siteName?: string;
}

export const menuLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "All Categories", href: "#categories", hasDropdown: true },
  { id: 3, label: "Products", href: "#products" },
  { id: 4, label: "Contact", href: "#contact" },
];

export const categoryLinks = [
  { id: 1, label: "Category 1", href: "#category1" },
  { id: 2, label: "Category 2", href: "#category2" },
  { id: 3, label: "Category 3", href: "#category3" },
];

const Navbar: React.FC<NavbarProps> = ({
  logo = defaultLogo,
  siteName = "Site Name",
  logoWidth = "auto",
  logoHeight = "100px",
  isStickyNav = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleSidebar = (open: boolean) => {
    setIsSidebarOpen(open);
  };

  return (
    <AppBar
      position={isStickyNav ? "sticky" : "fixed"}
      className="bg-black text-white shadow-md transition-all duration-300"
      color="inherit"
      style={{ height: "80px" }}
    >
      <Toolbar className="justify-between">
        {/* Logo Section */}
        <Box className="flex items-center flex-grow sm:flex-grow-0">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: logoWidth,
              height: logoHeight,
              objectFit: "contain",
            }}
            className="mr-2"
          />
          {siteName && (
            <Typography
              variant="h6"
              component="div"
              className="hidden sm:block"
            >
              {siteName}
            </Typography>
          )}
        </Box>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex space-x-4">
          {menuLinks.map((link) =>
            link.hasDropdown ? (
              <Button
                key={link.id}
                color="inherit"
                onClick={handleMenuClick}
                aria-controls="categories-menu"
                aria-haspopup="true"
              >
                <Box display="flex" alignItems="center">
                  <span>{link.label}</span>
                </Box>
              </Button>
            ) : (
              <Button key={link.id} color="inherit" href={link.href}>
                {link.label}
              </Button>
            )
          )}
          <Menu
            id="categories-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {categoryLinks.map((category) => (
              <MenuItem key={category.id} onClick={handleMenuClose}>
                <a
                  href={category.href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {category.label}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Mobile Navigation */}
        <Box className="flex items-center">
          <IconButton color="inherit" aria-label="cart" className="mr-2">
            <ShoppingCartIcon />
          </IconButton>
          {isMobileView && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Sidebar Drawer */}
        <DefaultDrawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          siteName={siteName}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
