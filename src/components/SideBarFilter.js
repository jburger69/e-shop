import React, { Component } from 'react'
import "../components/SideBarFilter.css"

import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default class SideBarFilter extends Component {
  render() {
    return (
        <>
            <h2>SideBarFilter</h2>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel>Category</FormLabel>
                <Divider></Divider>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox  name="Men's Clothing" />
                        }
                        label="Men's Clothing"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="Women's Clothing" />
                        }
                        label="Women's Clothing"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="Jewelery" />
                        }
                        label="Jewelery"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="Electronics" />
                        }
                        label="Electronics"
                    />
                </FormGroup>
                <FormLabel>Price of Product</FormLabel>
                <Divider></Divider>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox  name="0 - 10" />
                        }
                        label="$0 - 10"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="10 - 25" />
                        }
                        label="$10 - 25"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="25 - 50" />
                        }
                        label="$25 - 50"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="50 - 100" />
                        }
                        label="$50 - 100"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox  name="100 - +" />
                        }
                        label="$100 - 1000"
                    />
                </FormGroup>
                <FormLabel>Rating's of Product</FormLabel>
                <Divider></Divider><br></br>
                <Stack spacing={2}>
                    <Rating name="size-medium" defaultValue={1} max={1} />
                    <Rating name="size-medium" defaultValue={2} max={2} />
                    <Rating name="size-medium" defaultValue={3} max={3} />
                    <Rating name="size-medium" defaultValue={4} max={4} />
                    <Rating name="size-medium" defaultValue={5} max={5} />
                </Stack><br></br>
                <Button variant="contained">Search</Button>
            </FormControl>
        </>
    )
  }
}
