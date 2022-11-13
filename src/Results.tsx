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
              <StyledTableCell align="center" sx={{ fontSize: 20 }}>{row.title}</StyledTableCell>
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
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 'auto',
      width: '100%',
      backgroundAttachment: 'fixed',
      paddingTop: '5px',
      paddingBottom: '100px',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <div id="content-wrap" style={{
        paddingBottom: '2.5rem',
      }}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="md"
            sx={{

            }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar> */}
              <Box
                component="img"
                alignSelf={'center'}
                sx={{
                  width: '325px',
                  height: '325px',
                  marginLeft: '10%',
                }}
                alt="Logo Here"
                src="https://media4.giphy.com/media/RitGzFjFAW4ZstueDL/giphy.gif?cid=790b761162ee860793039ca33d86403bb1d8974404f678f9&rid=giphy.gif&ct=s"
              >
              </Box>
              <Grid container spacing={3}
                sx={{ backgroundBlendMode: 'inherit' }}>
                {Object.keys(results).map(semester => {
                  let output: any = []
                  output.push(<Grid item xs={12}
                  >
                    <Grid
                      sx={{
                        backdropFilter: 'blur(15px)',
                        paddingLeft: 3,
                        boxShadow: '0px 0px 15px black',
                        borderRadius: '3%'
                      }}
                    >
                      <Typography component="h1" align="left" variant="h6" marginTop={4} color='white'
                        fontWeight={'bold'}
                      >
                        {`${semester}`}
                      </Typography>
                    </Grid>
                    <Grid
                    sx={{
                      boxShadow: '0px 0px 15px black'
                    }}
                    >
                    {CustomizedTables(results[semester])}
                    </Grid>
                  </Grid>)
                  return output
                })}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 6, mb: 2 }}
                onClick={() => { toggleF(undefined) }}
              >
                Back
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <footer id="footer" style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem',
      }}></footer>
    </div>
  )
}