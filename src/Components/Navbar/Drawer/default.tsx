import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AllDrawerProps } from "./type";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  IconButton,
  Box,
  Typography,
  ListItemButton,
} from "@mui/material";
import { categoryLinks, menuLinks } from "../default";
import { useState } from "react";
import { ChevronRight } from "@mui/icons-material";

const DefaultDrawer: React.FC<AllDrawerProps> = ({
  open,
  onClose,
  siteName,
}) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen((prev) => !prev);
  };
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose()}>
      <Box
        sx={{
          width: 300,
          backgroundColor: "#f9f9f9",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
      >
        <Box
          sx={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#333",
            color: "#fff",
          }}
        >
          <IconButton size="small" color="inherit" onClick={onClose}>
            <ChevronRight />
          </IconButton>
          <Typography variant="h6">{siteName}</Typography>
        </Box>

        {/* Divider */}
        <Divider />

        {/* Drawer Links */}
        <List>
          {menuLinks.map((link) =>
            link.hasDropdown ? (
              <Box key={link.id}>
                <ListItem onClick={toggleCategoryDropdown}>
                  <ListItemButton>
                    <ListItemText primary={link.label} />
                    {isCategoryDropdownOpen ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItemButton>
                </ListItem>
                <Divider sx={{ margin: "8px 0" }} />
                <Collapse in={isCategoryDropdownOpen} timeout="auto">
                  <List
                    component="div"
                    disablePadding
                    sx={{
                      paddingLeft: "16px",
                    }}
                  >
                    {categoryLinks.map((category) => (
                      <>
                        <ListItem
                          key={category.id}
                          component="a"
                          href={category.href}
                        >
                          <ListItemButton>
                            <ListItemText primary={category.label} />
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                      </>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <>
                <ListItem key={link.id} component="a" href={link.href}>
                  <ListItemButton>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>

                <Divider sx={{ margin: "8px 0" }} />
              </>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default DefaultDrawer;
