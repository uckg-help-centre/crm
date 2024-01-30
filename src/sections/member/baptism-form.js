import React, { useState } from "react";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateBaptism = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    isBaptised: false,
    countryOfBirth: "",
    whyDecidedToBaptise: "",
    servicesAttended: "",
    whichPastorMinistered: "",
    baptisedBefore: "",
    followUpContact: false,
    baptismDate: null,
  });

  const handleChange = (e) => {
    const { name, value, options, type } = e.target;

    if (type === "select-multiple") {
      // Handle multi-select
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData({ ...formData, [name]: selectedOptions });
    } else if (type === "checkbox") {
      // Handle boolean checkbox
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      // Default for other types (e.g., string)
      setFormData({ ...formData, [name]: value });
    }

    onSubmit(formData);
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission here
  };

  return (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Grid container spacing={2} sx={{ pl: 1 }}>
        <Grid item xs={12} sm={6} lg={3} sx={{ minWidth: "239px" }}>
          <FormControl fullWidth>
            <InputLabel id="is-converted">Is Baptised</InputLabel>
            <Select
              labelId="isBaptised-id"
              id="isBapt-select"
              label="Is Baptised?"
              defaultValue=""
              value={formData.isBaptised.toString()}
              onChange={handleChange}
              name="isBaptised"
            >
              <MenuItem value={"true"}>Yes</MenuItem>
              <MenuItem value={"false"}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {formData.isBaptised && (
          <>
            <Grid item xs={12} sm={6} lg={3}>
              <TextField
                fullWidth
                label="Country of Birth"
                name="countryOfBirth"
                onChange={handleChange}
                value={formData.countryOfBirth}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                label="Why decided to baptise"
                name="whyDecidedToBaptise"
                onChange={handleChange}
                value={formData.whyDecidedToBaptise}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <TextField
                fullWidth
                label="Services normally attended"
                name="servicesAttended"
                onChange={handleChange}
                value={formData.servicesAttended}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <TextField
                fullWidth
                label="Which Pastor ministered"
                name="whichPastorMinistered"
                onChange={handleChange}
                value={formData.whichPastorMinistered}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="followup-contact">Follow Up Contact</InputLabel>
                <Select
                  labelId="followUp-id"
                  id="followUp-select"
                  label="Follow Up Contact"
                  defaultValue=""
                  value={formData.followUpContact.toString()}
                  onChange={handleChange}
                  name="followUpContact"
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id="baptised-before">Baptised before?</InputLabel>
                <Select
                  labelId="baptisedBefore-id"
                  id="baptisedBefore-select"
                  label="Baptised before?"
                  defaultValue=""
                  value={formData.baptisedBefore.toString()}
                  onChange={handleChange}
                  name="baptisedBefore"
                >
                  <MenuItem value={"true"}>Yes</MenuItem>
                  <MenuItem value={"false"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <DatePicker
                label="Baptism date"
                format="dd/MM/yyyy"
                value={formData.baptismDate}
                onChange={(date) => handleDateChange(date, "baptismDate")}
                name="baptismDate"
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Grid>
          </>
        )}

        {/* Submit Button */}
        <Grid item xs={12} sx={{ pt: 3 }}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateBaptism;
