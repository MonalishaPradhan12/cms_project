import React from "react";
import { Typography, TextField, Button, Box, Container, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem ,Checkbox } from "@mui/material";
import FormCard from "./FormCard";
import { useForm } from "react-hook-form";
import FormWithFieldset from "./FormWithFieldset";

const Form = () => {
  return (
    <>
      <Container>
        <FormCard title="Application Form" >
          <FormWithFieldset title="Personal Information" >
            <Grid container spacing={2 } sx={{marginTop:'10px'}}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  label="First name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Middle Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Mobile No"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Email Id"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Years of experience"
                  placeholder="If no experience, enter '0'"
                  fullWidth
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Father's Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row name="gender" defaultValue="Male">
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Transgender" control={<Radio />} label="Transgender" />
                  </RadioGroup>
                </FormControl>
              </Grid>


            </Grid>
          </FormWithFieldset>
          <FormWithFieldset title="Contact Information" spacing={2}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <b>Address for Correspondence: </b>
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Plot/House No/At"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="	Locality"
                  fullWidth
                  variant="outlined"
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Post"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>State</InputLabel>
                  <Select label="State" defaultValue="">
                    <MenuItem value="">Select State</MenuItem>
                    <MenuItem value="odisha">odisha</MenuItem>
                    <MenuItem value="punjab">punjab</MenuItem>
                    <MenuItem value="tamilnadu">Tamilnadu</MenuItem>
                    <MenuItem value="goa">Goa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>District</InputLabel>
                  <Select label="District" defaultValue="">
                    <MenuItem value="">Select District</MenuItem>
                    <MenuItem value="khordha">Khordha</MenuItem>
                    <MenuItem value="puri">Puri</MenuItem>
                    <MenuItem value="jajpur">Jajpur</MenuItem>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Pin"
                  placeholder="PIN"
                  fullWidth
                  variant="outlined"
                />
              </Grid>

            </Grid>
          </FormWithFieldset>
          <FormWithFieldset title="Skill Set">

            <Grid container spacing={2} marginTop='5px'>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  label="Skill Set"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </FormWithFieldset>
          <FormWithFieldset title="Upload Documents">

            <Grid container spacing={2} marginTop={1}>

              {/* File Upload Input */}
              <Grid item xs={12} sm={2}>
                Upload Resume

              </Grid>
              <Grid item xs={12} sm={4}>

                <TextField
                  required
                  label=""
                  fullWidth
                  variant="outlined"
                  type="file" // Setting input type as file

                />
              </Grid>
            </Grid>
          </FormWithFieldset>
          <FormWithFieldset title="Declaration by the candidate">

            <Grid container spacing={2} marginTop={1}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required />}
                  label={
                    <Typography variant="body2">
                      Declaration By The Candidate: I do hereby declare that the information given above is true and correct to the best of my knowledge and belief.
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </FormWithFieldset>
        </FormCard>
      </Container>
    </>
  );
};

export default Form;
