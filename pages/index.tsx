import { Box, Stack, Container, Button } from "@mui/material";
import { getData } from "../src/lib/vault"
import Vault from "./app/vault/index"

export default function Login() {
  console.log('Current directory:', process.cwd());

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          spacing={5}
        >
          <Vault/>
          <Button size="medium" onClick={getData}>Get Data</Button>
        </Stack>
      </Container>
    </>
  );
}