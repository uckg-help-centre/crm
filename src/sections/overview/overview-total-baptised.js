import PropTypes from 'prop-types';
import HeartIcon from '@heroicons/react/24/solid/HeartIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';

export const OverviewTotalBaptised = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Baptised
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'info.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <HeartIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {/* 
        <Box sx={{ mt: 3 }}>
          <LinearProgress
            value={value}
            variant="determinate"
          />
        </Box>
        */}
      </CardContent>
    </Card>
  );
};

OverviewTotalBaptised.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
