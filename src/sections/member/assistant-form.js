import React, { useState } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateAssistant = ({ activeSubForm, onSubmit }) => {
  const [formData, setFormData] = useState({
    town: "",
    city: "",
    telephone: "",
    mobile: "",
    spouseName: "",
    isConverted: "",
    maritalStatus: "",
    occupation: "",
    noOfChildren: "",
    areTheyConverted: "",
    validDBSCheck: "",
    dbsDate: null,
    placeOfBirth: "",
    citizenship: "",
    languages: "",
    skillsAndWorkExperience: "",
    // Testemune data
    whichPastorMinistered: "",
    whichGroupIsPartOf: "",
    groupStartDate: null,
    haveBeenBaptisedWater: "",
    waterBaptisedDate: null,
    isBaptisedHolySpirit: "",
    holySpiritBaptisedDate: null,
    whichServiceWereBaptHolySpirit: "",
    whoNominatedToBeAssistant: "",
    whenNominatedToBeAssistant: null,
    dateWereRaisedAsCollaborator: null,
    whichPastorRaisedAsCollaborator: "",
    dateWereRaisedAsAssistant: null,
    whichPastorRaisedAssistant: "",
    anyAffectWhenVolunteerAdultsAndChildrens: "",
    whyDecidedToDoTheWork: "",
    haveEverBeenPartBefore: "",
    ifYesDescbribeRole: "",
    // Agreement data
    howKnowChurch: "",
    whatReasonsBrought: "",
    briefDescriptionTestimony: "",
    haveATestimonyFromIsrael: "",
    ifHaveIsraelWhen: null,
    joinDate: null,
  });

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    // Check if it's a boolean field
    if (options instanceof HTMLCollection) {
      // Assume it's a boolean field represented as strings ("true" or "false")
      setFormData({ ...formData, [name]: value === "true" });
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
    onSubmit(formData);
  };

  return (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      {activeSubForm === 0 && (
        <Grid container spacing={2} sx={{ pl: 1 }}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="Town"
              name="town"
              onChange={handleChange}
              value={formData.town}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="City"
              name="city"
              onChange={handleChange}
              value={formData.city}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              fullWidth
              label="Telephone"
              name="telephone"
              onChange={handleChange}
              value={formData.telephone}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              onChange={handleChange}
              value={formData.mobile}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <TextField
              fullWidth
              label="Spouse Name"
              name="spouseName"
              onChange={handleChange}
              value={formData.spouseName}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="is-converted">Is he/she converted?</InputLabel>
              <Select
                labelId="isConverted-id"
                id="isConv-select"
                label="Is he/she Converted?"
                defaultValue=""
                value={formData.isConverted.toString()}
                onChange={handleChange}
                name="isConverted"
              >
                <MenuItem value={true.toString()}>Yes</MenuItem>
                <MenuItem value={false.toString()}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="marital-id">Marital Status</InputLabel>
              <Select
                labelId="marital-id"
                id="marital-select"
                label="Marital Status"
                defaultValue=""
                onChange={handleChange}
                name="maritalStatus"
              >
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
                <MenuItem value={"Divorced"}>Divorced</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <TextField
              fullWidth
              label="Occupation"
              name="occupation"
              onChange={handleChange}
              value={formData.occupation}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              fullWidth
              label="Number of Children"
              name="noOfChildren"
              onChange={handleChange}
              value={formData.noOfChildren}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="is-converted">Are they converted?</InputLabel>
              <Select
                labelId="areConverted-id"
                id="areTheyconverted-select"
                label="Are they converted?"
                defaultValue=""
                value={formData.areTheyConverted.toString()}
                onChange={handleChange}
                name="areTheyConverted"
              >
                <MenuItem value={"true"}>Yes</MenuItem>
                <MenuItem value={"false"}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="valid-dbsCheck">Valid DBS Check?</InputLabel>
              <Select
                labelId="valid-dbs-id"
                id="validDBSCheck-select"
                label="Valid DBS Check?"
                defaultValue=""
                value={formData.validDBSCheck.toString()}
                onChange={handleChange}
                name="validDBSCheck"
              >
                <MenuItem value={"true"}>Yes</MenuItem>
                <MenuItem value={"false"}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <DatePicker
              label="DBS Date"
              format="dd/MM/yyyy"
              value={formData.dbsDate}
              onChange={(date) => handleDateChange(date, "dbsDate")}
              name="dbsDate"
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              fullWidth
              label="Place of Birth"
              name="placeOfBirth"
              onChange={handleChange}
              value={formData.placeOfBirth}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              fullWidth
              label="Citizenship"
              name="citizenship"
              onChange={handleChange}
              value={formData.citizenship}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              fullWidth
              label="Skills and Work Experience"
              name="skillsAndWorkExperience"
              multiline={true}
              rows={2}
              onChange={handleChange}
              value={formData.skillsAndWorkExperience}
            />
          </Grid>
        </Grid>
      )}

      {/* --------------- Testemune sub form --------------- */}

      {activeSubForm === 1 && (
        <Grid
          container
          spacing={2}
          sx={{
            gridColumnGap: "8px",
            pl: 1,
          }}
        >
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
              <InputLabel id="whichGroup-isPart">Which Group is part?</InputLabel>
              <Select
                labelId="whichGroup-id"
                id="whichGroup-select"
                label="Which Group is part?"
                defaultValue=""
                value={formData.whichGroupIsPartOf}
                onChange={handleChange}
                name="whichGroupIsPartOf"
              >
                <MenuItem value={1}>Caleb</MenuItem>
                <MenuItem value={2}>Beat Depression</MenuItem>
                <MenuItem value={3}>Stockroom</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Group start date"
              format="dd/MM/yyyy"
              value={formData.groupStartDate}
              name="groupStartDate"
              onChange={(date) => handleDateChange(date, "groupStartDate")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth>
              <InputLabel id="baptised-water">Have been Baptised in Water?</InputLabel>
              <Select
                labelId="isBaptised-id"
                id="isBapt-select"
                label="Have been baptised in water?"
                defaultValue=""
                value={formData.haveBeenBaptisedWater.toString()}
                onChange={handleChange}
                name="haveBeenBaptisedWater"
              >
                <MenuItem value={true.toString()}>Yes</MenuItem>
                <MenuItem value={false.toString()}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Baptised Water date"
              format="dd/MM/yyyy"
              value={formData.waterBaptisedDate}
              name="waterBaptisedDate"
              onChange={(date) => handleDateChange(date, "waterBaptisedDate")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth>
              <InputLabel id="baptised-holy">Baptised with the Holy Spirit?</InputLabel>
              <Select
                labelId="isBaptisedHoly-id"
                id="isBaptHoly-select"
                label="Baptised with the Holy Spirit?"
                defaultValue=""
                value={formData.isBaptisedHolySpirit.toString()}
                onChange={handleChange}
                name="isBaptisedHolySpirit"
              >
                <MenuItem value={true.toString()}>Yes</MenuItem>
                <MenuItem value={false.toString()}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Baptised Holy Spirit date"
              format="dd/MM/yyyy"
              value={formData.holySpiritBaptisedDate}
              name="holySpiritBaptisedDate"
              onChange={(date) => handleDateChange(date, "holySpiritBaptisedDate")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="Holy Spirit service which were baptised"
              name="whichServiceWereBaptHolySpirit"
              onChange={handleChange}
              value={formData.whichServiceWereBaptHolySpirit}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="Who nominated to be Assistant?"
              name="whoNominatedToBeAssistant"
              onChange={handleChange}
              value={formData.whoNominatedToBeAssistant}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="When was nominated?"
              format="dd/MM/yyyy"
              value={formData.whenNominatedToBeAssistant}
              name="whenNominatedToBeAssistant"
              onChange={(date) => handleDateChange(date, "whenNominatedToBeAssistant")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Date was raised as Collaborator"
              format="dd/MM/yyyy"
              value={formData.dateWereRaisedAsCollaborator}
              name="dateWereRaisedAsCollaborator"
              onChange={(date) => handleDateChange(date, "dateWereRaisedAsCollaborator")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="Which Pastor raised as Collaborator"
              name="whichPastorRaisedAsCollaborator"
              onChange={handleChange}
              value={formData.whichPastorRaisedAsCollaborator}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Date was raised as Assistant"
              format="dd/MM/yyyy"
              value={formData.dateWereRaisedAsAssistant}
              name="dateWereRaisedAsAssistant"
              onChange={(date) => handleDateChange(date, "dateWereRaisedAsAssistant")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              fullWidth
              label="Which Pastor raised as Assistant"
              name="whichPastorRaisedAssistant"
              onChange={handleChange}
              value={formData.whichPastorRaisedAssistant}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              fullWidth
              label="Anything affect from being able to continue..."
              name="anyAffectWhenVolunteerAdultsAndChildrens"
              onChange={handleChange}
              value={formData.anyAffectWhenVolunteerAdultsAndChildrens}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={9}>
            <TextField
              fullWidth
              label="Why decided to do the work of God?"
              name="whyDecidedToDoTheWork"
              onChange={handleChange}
              value={formData.whyDecidedToDoTheWork}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="haveBeenBefore">Have been part of the work of God before?</InputLabel>
              <Select
                labelId="haveBeenBefore-id"
                id="isBapt-select"
                label="Have been part of the work of God before?"
                defaultValue=""
                value={formData.haveEverBeenPartBefore.toString()}
                onChange={handleChange}
                name="haveEverBeenPartBefore"
              >
                <MenuItem value={true.toString()}>Yes</MenuItem>
                <MenuItem value={false.toString()}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} lg={5}>
            <TextField
              fullWidth
              label="If yes, describe the role and why was removed"
              name="ifYesDescbribeRole"
              onChange={handleChange}
              value={formData.whyDecidedToifYesDescbribeRoleDoTheWork}
            />
          </Grid>
        </Grid>
      )}

      {/* --------------- Agreement sub form --------------- */}

      {activeSubForm === 2 && (
        <Grid
          container
          spacing={2}
          sx={{
            gridColumnGap: "8px",
            pl: 1,
          }}
        >
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              fullWidth
              label="How came to know about the Church?"
              name="howKnowChurch"
              onChange={handleChange}
              value={formData.howKnowChurch}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              fullWidth
              label="What reasons brought?"
              name="whatReasonsBrought"
              onChange={handleChange}
              value={formData.whatReasonsBrought}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              fullWidth
              label="Brief description testimony Israel"
              name="briefDescriptionTestimony"
              onChange={handleChange}
              value={formData.briefDescriptionTestimony}
              size="large"
              multiline={true}
              rows={2}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Date Israel Testimony"
              format="dd/MM/yyyy"
              value={formData.ifHaveIsraelWhen}
              name="ifHaveIsraelWhen"
              onChange={(date) => handleDateChange(date, "ifHaveIsraelWhen")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              label="Join Date"
              format="dd/MM/yyyy"
              value={formData.joinDate}
              name="joinDate"
              onChange={(date) => handleDateChange(date, "joinDate")}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>
        </Grid>
      )}
    </form>
  );
};

export default CreateAssistant;
