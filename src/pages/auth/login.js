import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  Link,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { Logo } from 'src/components/logo';

// Functional component definition to render a new Page
const Page = () => {

  // Next.js router and authentication hook
  const router = useRouter();
  const auth = useAuth();

  // State for controlling the selected login method (email or other)
  const [method, setMethod] = useState('email');

  // Formik form handling for login form
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123!',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        // Attempt to sign in using provided email and password
        await auth.signIn(values.email, values.password);
        // Redirect to the home page on successful login
        router.push('/');
      } catch (err) {
        // Handle login error by updating form status and errors
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  // Callback functions for handling method change and skipping authentication
  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      auth.skip();
      router.push('/');
    },
    [auth, router]
  );

  // JSX structure for the login page
  return (
    <>
      <Head>
        <title>UCKG Connect | Login</title>
      </Head>
      <Box
        // Styling for the main container
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          // Styling for the inner container (login box)
          sx={{
            maxWidth: 500,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <Grid container spacing={0}>
            {/* Container for Login */}
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Stack direction='row' justifyContent='left'>
                <Typography variant="h4">Login</Typography>
              </Stack>
            </Grid>

            {/* Container for Logo */}
            <Grid item xs={6} md={6} lg={6}>
              <Stack direction='row'>
                <Box
                  sx={{
                    height: 32,
                    width: 32,
                    textDecoration: 'none',
                    marginLeft: { xs: '0', sm: 6, md: 6, lg: 6 }, 
                  }}
                >
                  <Logo />
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* Register click option */}
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="body2">
              Click here to
              &nbsp;
              <Link
                component={NextLink}
                href="/auth/register"
                underline="hover"
                variant="subtitle2"
              >
                Register
              </Link>
            </Typography>
          </Stack>
          
          {/* Tabs for selecting login method */}
          <Tabs onChange={handleMethodChange} value={method} sx={{ mt: 1 }}>
            <Tab label="Email" value="email" />
            <Tab label="Other" value="other" />
          </Tabs>

          {/* Conditional rendering based on the selected method */}
          {method === 'email' && (
            // Login form
            <form noValidate onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
              <Stack spacing={3}>
                {/* Email and password input fields */}
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>

              {/* Submission error message */}
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}

              {/* Continue and skip buttons */}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                onClick={handleSkip}
              >
                Skip authentication
              </Button>

              {/* Info message */}
              <Alert
                color="primary"
                severity="info"
                sx={{ mt: 3 }}
              >
                <div>
                  You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                </div>
              </Alert>
            </form>
          )}
          {/* Displayed when the selected method is 'other' */}
          {method === 'other' && (
            <div>
              <Typography sx={{ mb: 1 }} variant="h6">
                Not available in the MVP
              </Typography>
              <Typography color="text.secondary">Feature not available</Typography>
            </div>
          )}
        </Box>
      </Box>
    </>
  );
};

// Specifies the layout for the page
Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
