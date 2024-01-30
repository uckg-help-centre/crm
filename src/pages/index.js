import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewTotalMembers } from "src/sections/overview/overview-total-members";
import { OverviewLatestMembers } from "src/sections/overview/overview-latest-members";
import { OverviewTotalBaptised } from "src/sections/overview/overview-total-baptised";
import { OverviewPendingMembers } from "src/sections/overview/overview-total-pending";
import { OverviewTotalAssistants } from "src/sections/overview/overview-total-assistants";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>UCKG Connect | Dashboard</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalMembers difference={12} positive sx={{ height: "100%" }} value="421" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewPendingMembers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="12"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalBaptised sx={{ height: "100%" }} value={256} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalAssistants sx={{ height: "100%" }} value="42" />
          </Grid>
          <Grid xs={12} lg={8}>
            {/* 
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
            */}
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            {/*
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
            */}
          </Grid>

          {/* 
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product-1.png',
                  name: 'Healthcare Erbology',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product-2.png',
                  name: 'Makeup Lancome Rouge',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product-5.png',
                  name: 'Skincare Soja CO',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product-6.png',
                  name: 'Makeup Lipstick',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product-7.png',
                  name: 'Healthcare Ritual',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />*/}
          <Grid xs={12} md={12} lg={12}>
            <OverviewLatestMembers
              members={[
                {
                  id: "f69f88012978187a6c12897f",
                  name: "Ekaterina Tankova",
                  phone: "362232-9852",
                  location: "London",
                  status: "no",
                  updatedAt: subHours(now, 6).getTime(),
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  name: "Cao Yu",
                  phone: "362232-9852",
                  location: "London",
                  status: "no",
                  updatedAt: subHours(now, 8).getTime(),
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  name: "Alexa Richardson",
                  phone: "362232-9852",
                  location: "London",
                  status: "yes",
                  updatedAt: subDays(subHours(now, 1), 1).getTime(),
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  name: "Anje Keizer",
                  phone: "362232-9852",
                  location: "London",
                  status: "no",
                  updatedAt: subDays(subHours(now, 3), 3).getTime(),
                },
                {
                  id: "9f974f239d29ede969367103",
                  name: "Clarke Gillebert",
                  phone: "362232-9852",
                  location: "London",
                  status: "no",
                  updatedAt: subDays(subHours(now, 5), 6).getTime(),
                },
                {
                  id: "ffc83c1560ec2f66a1c05596",
                  name: "Adam Denisov",
                  phone: "362232-9852",
                  location: "London",
                  status: "yes",
                  updatedAt: subDays(subHours(now, 3), 3).getTime(),
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
