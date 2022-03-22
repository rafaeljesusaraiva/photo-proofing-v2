import { AdminPanelSettings, Logout, Person, Store } from "@mui/icons-material";

export const pages = [
  { name: "Início", url: "/" },
  { name: "Eventos", url: "/events" },
];
export const settings = [
  {
    name: "Perfil",
    url: "/client/profile",
    icon: <Person />,
    private: true,
    adminOnly: false,
  },
  {
    name: "Encomendas",
    url: "/client/orders",
    icon: <Store />,
    private: true,
    adminOnly: false,
  },
  {
    name: "Administração",
    url: "/administration",
    icon: <AdminPanelSettings />,
    private: true,
    adminOnly: true,
  },
  {
    name: "Terminar Sessão",
    url: "/auth/logout",
    icon: <Logout />,
    private: true,
  },
];
