import React, { ReactNode, useState } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  Store as StoreIcon,
} from "@mui/icons-material";
import Link from "next/link";

const pages = [
  { name: "Início", url: "/" },
  { name: "Eventos", url: "/events" },
];
const settings = [
  {
    name: "Perfil",
    url: "/client/profile",
    icon: <PersonIcon />,
    private: true,
    adminOnly: false,
  },
  {
    name: "Encomendas",
    url: "/client/orders",
    icon: <StoreIcon />,
    private: true,
    adminOnly: false,
  },
  {
    name: "Administração",
    url: "/administration",
    icon: <AdminPanelSettingsIcon />,
    private: true,
    adminOnly: true,
  },
  {
    name: "Terminar Sessão",
    url: "/auth/logout",
    icon: <LogoutIcon />,
    private: true,
  },
];
const isUserLoggedIn: boolean = true;

function NavigationBar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(isUserLoggedIn);
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
      {userLoggedIn ? (
        <>
          <List sx={{ mt: 3, mb: 3 }}>
            <ListItem sx={{ flexDirection: "column", alignContent: "center" }}>
              <Link href="/profile" passHref>
                <Avatar
                  alt="Imagem de perfil do cliente"
                  src="/img/default-user-image.png"
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                />
              </Link>
              <Link href="/profile" passHref>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 2, cursor: "pointer" }}
                >
                  Nome Utilizador
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
                  Iniciar Sessão
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
            <Button
              onClick={toggleDrawer(true)}
              color={"inherit"}
              sx={{
                display: { xs: "flex", md: !userLoggedIn ? "none" : "flex" },
              }}
            >
              <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} />
              {userLoggedIn ? (
                <Avatar
                  alt="Imagem de perfil do cliente"
                  src="/img/default-user-image.png"
                  sx={{ ml: { xs: 2, md: 0 } }}
                />
              ) : (
                <></>
              )}
            </Button>
            {!userLoggedIn ? (
              <Link href="/auth/login" passHref>
                <Button
                  color={"inherit"}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Iniciar Sessão
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
