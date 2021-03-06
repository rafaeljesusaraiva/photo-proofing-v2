import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../../auth/initFirebase";
import Link from "next/link";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { pages, settings } from "./navigation-bar.url";

function NavigationBar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(firebaseAuth);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (newState: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideBarOpen(newState || !sideBarOpen);
  };

  const MenuList = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* User Section */}
      {user ? (
        <>
          <List sx={{ mt: 3, mb: 3 }}>
            <ListItem sx={{ flexDirection: "column", alignContent: "center" }}>
              <Link href="/profile" passHref>
                <Avatar
                  alt="Imagem de perfil do cliente"
                  src={user.photoURL || "/img/default-user-image.png"}
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                />
              </Link>
              <Link href="/profile" passHref>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 2, cursor: "pointer" }}
                >
                  {user.displayName}
                </Typography>
              </Link>
            </ListItem>
            {settings.map((page, index) => (
              <Link href={page.url} key={index} passHref>
                <ListItem button>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
        </>
      ) : (
        <>
          <List sx={{ mt: 3, mb: 3 }}>
            <ListItem sx={{ flexDirection: "column", alignContent: "center" }}>
              <Link href="/auth/login" passHref>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 2, cursor: "pointer" }}
                >
                  Iniciar Sess??o
                </Typography>
              </Link>
            </ListItem>
          </List>
          <Divider sx={{ display: { xs: "block", md: "none" } }} />
        </>
      )}

      {/* Side Menu Section */}
      <List
        subheader={
          <Typography
            component={ListItem}
            sx={{ fontWeight: "bold", my: 1, msUserSelect: "none" }}
          >
            Menu
          </Typography>
        }
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page, index) => (
          <Link href={page.url} key={index} passHref>
            <ListItem button>
              <ListItemText primary={page.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar position="relative" sx={{ position: "sticky" }}>
        <Toolbar>
          {/* Navigation Bar - Website Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, mr: 2 }}
          >
            Provas Fotografia
          </Typography>

          {/* Navigation Bar - Items */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.url} passHref>
                <Button sx={{ color: "white", mx: 1, textAlign: "center" }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Navigation Bar - Side Bar Buttons */}
          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            {/* Side Menu Icon & Account Button */}
            <Button
              onClick={toggleDrawer(true)}
              color={"inherit"}
              sx={{
                display: { xs: "flex", md: !user ? "none" : "flex" },
              }}
            >
              <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} />
              {user ? (
                <Avatar
                  alt="Imagem de perfil do cliente"
                  src="/img/default-user-image.png"
                  sx={{ ml: { xs: 2, md: 0 } }}
                />
              ) : (
                <></>
              )}
            </Button>
            {/* Login Button */}
            {loading ? (
              <CircularProgress />
            ) : !user ? (
              <Link href="/auth/login" passHref>
                <Button
                  color={"inherit"}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Iniciar Sess??o
                </Button>
              </Link>
            ) : (
              <></>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor={"right"}
        open={sideBarOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {MenuList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default NavigationBar;
