import type { ReactElement } from "react";
import { Button, TextField, Link, Box, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout-auth";

// Firebase related
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseApp, firebaseAuth } from "../../auth/initFirebase";
import { uiConfig } from "../../config/index.config";
import { useRouter } from "next/router";

const Auth_Login = () => {
  // Get Firebase User Data
  const [user, loading, error] = useAuthState(firebaseAuth);
  const router = useRouter();

  if (loading)
    return (
      <Typography component="h2" variant="h6">
        A Carregar...
      </Typography>
    );
  else if (error)
    return (
      <>
        <Typography component="h2" variant="h6">
          Erro
        </Typography>
        <Typography component="h5" variant="h6">
          {error}
        </Typography>
      </>
    );
  else if (user) {
    // user is already logged in, redirect to home page
    router.push("/");
  }

  const authConfig = uiConfig(firebaseApp);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Typography component="h1" variant="h4">
        Inicie Sessão
      </Typography>
      <Typography component="h2" variant="h6">
        Para continuar
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          autoComplete="email"
          name="email"
          label="Email"
        />
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
          label="Palavra-passe"
          name="password"
        />

        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Link href="/auth/create-account" variant="body2">
              <Button variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Criar conta
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Entrar
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 6 }}>
          <Grid item xs>
            <Link href="/auth/recover-account" variant="body2">
              Esqueceu-se da palavra-passe?
            </Link>
          </Grid>
        </Grid>
        <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={firebaseAuth} />
        <Link href="/">
          <Button fullWidth variant="text" sx={{ mt: 2, mb: 2 }}>
            Regressar à página Inicial
          </Button>
        </Link>
      </Box>
    </>
  );
};

Auth_Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Iniciar Sessão">{page}</Layout>;
};

export default Auth_Login;
