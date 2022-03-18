import type { NextPage } from "next";
import {
  Button,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";

const Login: NextPage = () => {
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
      <Head>
        <title>Iniciar Sessão - Provas Fotografia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* Background Image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/img/login-background.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Login Section */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={1}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Inicie Sessão
            </Typography>
            <Typography component="h2" variant="h6">
              Para continuar
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Entrar
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link href="/auth/recover-account" variant="body2">
                    Esqueceu-se da palavra-passe?
                  </Link>
                </Grid>
              </Grid>
              <Link href="/">
                <Button fullWidth variant="text" sx={{ mt: 12, mb: 2 }}>
                  Regressar à página Inicial
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
