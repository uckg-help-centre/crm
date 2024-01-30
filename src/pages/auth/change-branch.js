// Importing necessary React and Next.js modules and components
import { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Select
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

// Functional component definition
const BranchSelect = () => {
  // Authentication hook
  const auth = useAuth();

  // State for controlling the selected branch
  const [selectedBranch, setSelectedBranch] = useState('');

  // Function to handle branch selection
  const handleBranchSelect = (event) => {
    setSelectedBranch(event.target.value);
  };

  // Function to handle the submit button
  const handleSubmit = () => {
    // Perform any necessary actions based on the selected branch
    console.log(`Selected Branch: ${selectedBranch}`);
    // Redirect to the desired page or perform other actions
  };

  // JSX structure for the branch selection page
  return (
    <>
      <Head>
        {/* Setting the title of the page */}
        <title>Branch Selection</title>
      </Head>
      <Box
        sx={{
          // Styling for the main container
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            // Styling for the inner container
            maxWidth: 500,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          {/* Title */}
          <Typography variant="h4" gutterBottom>
            Select Branch
          </Typography>

          {/* Branch selection dropdown */}
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Select
              value={selectedBranch}
              onChange={handleBranchSelect}
            >
              <MenuItem value="branch1">Branch 1</MenuItem>
              <MenuItem value="branch2">Branch 2</MenuItem>
              {/* Add more branches as needed */}
            </Select>
          </FormControl>

          {/* Submit button */}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            onClick={handleSubmit}
            variant="contained"
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

// Specifies the layout for the page
BranchSelect.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

// Export the component as the default export
export default BranchSelect;
