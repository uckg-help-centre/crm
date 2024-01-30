import * as React from "react";
import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import FormMenus from "./menu-forms";

const Page = () => (
  <>
    <Head>
      <title>UCKG | New Member</title>
    </Head>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">New Member</Typography>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid>
                <FormMenus />
              </Grid>
              <Grid xs={12} md={6} lg={8}></Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

// A static method to specify the layout for the page using a dashboard layout
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
