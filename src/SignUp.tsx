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
import { course_options, interests_options, terms_options } from './common';
import { width } from '@mui/system';

const background_url = "https://www.umass.edu/sites/default/files/styles/16_9_1920x1080/public/2021-01/Amherst-6946.JPG?h=ed6f328e&itok=vYXN4GKg"

const majors = [
    { value: 'Computer Science', label: "Computer Science" },
    { value: 'Informatics', label: "Informatics" }
]


const animatedComponents = makeAnimated();

function getAttr(want: any, str: string, name: string) {
    return (
        <Select
            required
            placeholder={str}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={want}
            name={name}
            onChange={(e) => console.log(e)}
        />
    );
}

function CoursesTaken() {
    return getAttr(course_options, "Courses", "courses")
}

function GetInterests() {
    return getAttr(interests_options, "Interests", "interests")
}

const MajorSelection = () => (
    <Select required options={majors} name="major" placeholder="Major" />
)

const GetTerm = () => (
    <Select required options={terms_options} name="graduation" placeholder="Graduation Term" />
)


const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.get('email'),
                major: data.get('major'),
                graduation: data.get('graduation'),
                interests: data.getAll('interests'),
                courses: data.getAll('courses'),
            })
        };
        fetch('http://127.0.0.1:8000/log', requestOptions)
            .then(response => console.log(response.json()))
    };

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
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            mt: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // borderSpacing: 5,
                            mx: 'auto',
                            backdropFilter: "blur(2px)",
                            boxShadow: 0.5,
                            justifyContent: 'center',
                            p: 2,
                        }}
                    >
                        <Typography component="h1" align="center" variant="h5" marginTop={8} fontWeight={'bold'}
                            fontFamily="Arial" color="black" border={3} borderRadius="16px"
                            fontStyle={'italic'} boxShadow="5"
                        >
                            UMass Amherst Major Planner
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        sx={{
                                            input: { background: 'white' },
                                        }}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        size="small"
                                        id="email"
                                        label="Enter Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}
                                >
                                    <MajorSelection />
                                </Grid>
                                <Grid item xs={12}
                                >
                                    <GetTerm />
                                </Grid>
                                <Grid item xs={12}
                                >
                                    <CoursesTaken />
                                </Grid>
                                <Grid item xs={12}
                                >
                                    <GetInterests />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, boxShadow: '5' }}
                                onClick={() => { console.log('onClick'); }}
                            >
                                Submit
                            </Button>
                            <Grid container justifyContent="flex-end">
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}