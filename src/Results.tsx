import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { background_url } from './common'

const theme = createTheme();

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export function CustomizedTables(rows) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Number</StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">Credits</StyledTableCell>
            <StyledTableCell align="center">Rating&nbsp;(/5)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.credits}</StyledTableCell>
              <StyledTableCell align="center">{row.rating}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import { results_obj } from './App';
export default function Results(toggleF) {
  let results: any = results_obj
  if (results === undefined) {
    console.error("Results Obj is undefined")
    return
  }
  return (
    <div style={{
      backgroundImage: `url(${background_url})`,
      backgroundRepeat: 'no-repeat',
      marginTop: '-64px',
      marginBottom: 0,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw'
    }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography component="h1" align="center" variant="h5">
              UMass Amherst Major Planner
            </Typography>
            <Grid container spacing={3}>
              {Object.keys(results).map(semester => {
                let output: any = []
                output.push(<Grid item xs={12}>
                  <Typography component="h1" align="left" variant="h5" marginTop={4}>
                    {`${semester}`}
                  </Typography>
                  {CustomizedTables(results[semester])}
                </Grid>)
                return output
              })}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => { toggleF(undefined) }}
            >
              Back
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}