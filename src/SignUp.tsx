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
import { width } from '@mui/system';
import { course_options, interests_options, terms_options, background_url } from './common';
import { ScrollView } from '@aws-amplify/ui-react';
import { BorderAllRounded, Height } from '@mui/icons-material';


const majors = [
    { value: 'Computer Science', label: "Computer Science" }
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
    return getAttr(course_options, "Courses Taken", "courses")
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

export default function SignUp(toggleF) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

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
        fetch('http://127.0.0.1:8000/graph', requestOptions)
            .then(response => response.json()).then(obj => {
                console.log(obj)
                toggleF(obj)
            })
    };

    return (
        <div style={{
            backgroundImage: `url(${background_url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            backgroundAttachment: 'fixed',
            // paddingTop: '5px',
            // paddingBottom: '100px',
            position: 'relative',
            minHeight: '100vh'
        }}>
            <div id="content-wrap" style={{
                paddingBottom: '2.5rem',
            }}>

                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs"
                        sx={{
                            alignItems: 'center',
                            position: 'auto',
                            // marginX:'37%'
                        }}
                    >
                        <CssBaseline />

                        <Box
                            sx={{
                                // mt: 8,
                                // display:'',
                                // flexDirection: 'column',
                                alignItems: 'center',
                                // mx: 'auto',
                                // marginRight: '30%',
                                // marginLeft: '30%',
                                // width: 'max-content',
                                // paddingRight: '40%', 
                                // marginX: '0%',     
                                boxShadow: 0.5,
                                justifyContent: 'center',
                                // p: 2,
                                position: 'auto',
                                width: '120%'
                            }}
                        >
                            {/* <Typography component="h1" align="center" variant="h5" marginTop={8} fontWeight={'bold'}
                                fontFamily="Arial" color="black" border={3} borderRadius="4px"
                                boxShadow="5" marginLeft={4} marginRight={4} padding={3}
                            >
                                Course Navigation Autopilot
                            </Typography> */}
                            <Box
                                component="img"
                                alignSelf={'center'}
                                sx={{
                                    width: '325px',
                                    height: '325px',
                                    marginLeft: '15%',
                                }}
                                alt="Logo Here"
                                src="https://media4.giphy.com/media/RitGzFjFAW4ZstueDL/giphy.gif?cid=790b761162ee860793039ca33d86403bb1d8974404f678f9&rid=giphy.gif&ct=s"
                            >
                            </Box>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: 4, boxShadow: '0px 0px 15px black', backdropFilter: "blur(6px)", borderRadius: '3%' }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}
                                        sx={{
                                            borderRadius: '4%'
                                        }}
                                    >
                                        <TextField
                                            sx={{
                                                input: { background: 'white' },

                                            }}
                                            variant="filled"
                                            required
                                            fullWidth
                                            size="small"
                                            id="email"
                                            label="Email Address"
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
            <footer id="footer" style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '2.5rem',
            }}></footer>
        </div>
    )
}