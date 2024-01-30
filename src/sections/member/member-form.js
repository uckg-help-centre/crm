import React from "react";
import { useState } from "react";
import {
  Button,
  Stack,
  Avatar,
  TextField,
  OutlinedInput,
  FormControl,
  Chip,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateNewMember = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    postCode: "",
    prayerMatters: "",
    dateOfBirth: null,
    group: [],
    joinDate: null,
    memberPicture: null,
  });

  const [selectedContactBy, setSelectedContactBy] = useState([]);
  const [selectedMemberPicture, setSelectedMemberPicture] = useState(null);

  const contactBy = ["Phone", "Text", "Email", "Post"];

  const handleChange = (e) => {
    const { name, value, options, type } = e.target;

    if (type === "select-multiple") {
      // Handle multi-select
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData((prevData) => ({ ...prevData, [name]: selectedOptions }));
    } else {
      // Default for other types (e.g., string)
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    if (name === "memberPicture") {
      setSelectedMemberPicture(e.target.files[0]);
    }

    // Trigger form submission after handling change
    onSubmit(formData);
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));

    onSubmit(formData);
  };

  const handleSubmit = () => {
    const formDataWithContactBy = { ...formData, contactBy: selectedContactBy };

    // Adiciona memberPicture ao objeto FormData
    const formDataToSend = new FormData();
    for (const key in formDataWithContactBy) {
      formDataToSend.append(key, formDataWithContactBy[key]);
    }
    formDataToSend.append("memberPicture", selectedMemberPicture);

    // Handle form submission (e.g., send data to the server)
    onSubmit(formDataToSend);
    console.log("Dados enviados:", formDataWithContactBy);
  };

  const isLargeScreen = useMediaQuery("(min-width:960px)");

  return (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Grid container spacing={2} sx={{ pl: 1 }}>
        <Grid item xs={12} sm={6} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="title">Title</InputLabel>
            {/* Example of Formik Field operating as Selector */}
            <Select
              labelId="title-id"
              id="title-select"
              label="Title"
              defaultValue=""
              value={formData.title}
              onChange={handleChange}
              name="title"
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} sx={{ height: "100%" }}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2} sx={{ height: "100%" }}>
          <TextField
            fullWidth
            label="Post Code"
            name="postCode"
            onChange={handleChange}
            value={formData.postCode}
          />
        </Grid>

        {/* Start Member section */}
        <Grid item xs={12} sm={6} lg={2}>
          <Stack maxWidth="190px" sx={{ position: { lg: "fixed" }, margin: { xs: "auto" } }}>
            <Typography variant="subtitle1" color="neutral.700" sx={{ ml: 3.8 }}>
              Member Picture
            </Typography>

            <Avatar
              variant="rounded"
              src={selectedMemberPicture ? URL.createObjectURL(selectedMemberPicture) : ""}
              sx={{
                width: "120px",
                height: "120px",
                m: 4,
                mt: 1,
                mb: 2,
                alignSelf: "start",
              }}
            ></Avatar>
            <Stack>
              <input
                accept="image/*"
                id="memberPicture"
                name="memberPicture"
                type="file"
                onChange={handleChange}
              />
            </Stack>
          </Stack>
        </Grid>
        {/* End member section */}

        <Grid item xs={12} sm={6} lg={6}>
          <TextField
            fullWidth
            label="Prayer Matters"
            name="prayerMatters"
            size="large"
            multiline={true}
            rows={4}
            onChange={handleChange}
            value={formData.prayerMatters}
          />
        </Grid>

        {isLargeScreen ? (
          <Grid container item spacing={1} lg={2}>
            <Grid item>
              <DatePicker
                label="Date of Birth"
                name="dateOfBirth"
                format="dd/MM/yyyy"
                onChange={(date) => handleDateChange(date, "dateOfBirth")}
                value={formData.dateOfBirth}
              />
            </Grid>

            <Grid item>
              <DatePicker
                label="Join Date"
                name="joinDate"
                slotProps={{ textField: { size: "medium" } }}
                format="dd/MM/yyyy"
                onChange={(date) => handleDateChange(date, "joinDate")}
                value={formData.joinDate}
              />
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <DatePicker
                fullWidth
                label="Date of Birth"
                name="dateOfBirth"
                format="dd/MM/yyyy"
                slotProps={{ textField: { fullWidth: "true" } }}
                onChange={(date) => handleDateChange(date, "dateOfBirth")}
                value={formData.dateOfBirth}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DatePicker
                fullWidth
                label="Join Date"
                name="joinDate"
                slotProps={{ textField: { fullWidth: "true" } }}
                format="dd/MM/yyyy"
                onChange={(date) => handleDateChange(date, "joinDate")}
                value={formData.joinDate}
              />
            </Grid>
          </>
        )}

        {/* Group section // CHANGE VALUE FOR DB ENTRY GROUP OBJECT LATER ON */}
        <Grid item xs={12} sm={6} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="group-label-id">Group</InputLabel>
            <Select
              labelId="group-id"
              id="group-select"
              label="Group"
              defaultValue=""
              onChange={handleChange}
              name="group"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Caleb"}>Caleb</MenuItem>
              <MenuItem value={"Beat Depression"}>Beat Depression</MenuItem>
              <MenuItem value={"Stockroom"}>Stockroom</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* End of dof and group sections */}
        <Grid item xs={12} sm={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Contact By</InputLabel>
            <Select
              multiple
              value={selectedContactBy}
              onChange={(e) => {
                handleChange(e);
                setSelectedContactBy(e.target.value);
              }}
              input={<OutlinedInput label="Multiple Select" />}
              renderValue={(selected) => (
                <Stack gap={1} direction="row" flexWrap="wrap">
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Stack>
              )}
              name="contactBy"
            >
              {contactBy.map((contact) => (
                <MenuItem key={contact} value={contact}>
                  {contact}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ pt: 3 }}>
        <Button type="submit" variant="contained" color="success" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default CreateNewMember;
