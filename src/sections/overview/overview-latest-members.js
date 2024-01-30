import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";

const statusMap = {
  yes: "success",
  no: "error",
};

export const OverviewLatestMembers = (props) => {
  const { members = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Recent Updated Members" sx={{ pt: 2 }} />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell sortDirection="desc">Location</TableCell>
                <TableCell>Baptised</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => {
                const updatedAt = format(member.updatedAt, "dd/MM/yyyy");
                console.log("Members", members);
                return (
                  <TableRow hover key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell>{member.location}</TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[member.status]}>{member.status}</SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />

      {/* View All Updated Members (Future implementation) */}
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestMembers.propTypes = {
  members: PropTypes.array,
  sx: PropTypes.object,
};
