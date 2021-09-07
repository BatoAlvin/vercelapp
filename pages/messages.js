import { Container, Grid, Paper, Typography, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from '../styles/messages.module.css';

const Messages = () => {
    return (
        <>

            <Container>
                <Grid container spacing={0} style={{ marginTop: 10 }} className='info'>

                    <Grid item xs='4'>
                        <Paper style={{ backgroundColor: '#fff', textAlign: 'center', verticalAlign: 'middle', boxShadow: 'none', marginTop: '5px' }}>
                        </Paper>
                    </Grid>

                    <Grid item xs='8'>
                        <Typography paragraph className={styles.header}>
                            Welcome!!! To connect to edu_learning community slack workspace simply click the button below
                        </Typography>

                    </Grid>
                </Grid>

                <Grid container spacing={0} style={{ marginTop: 10 }} className='info'>

                    <Grid item xs='2'>

                    </Grid>

                    <Grid item xs='10'>
                        <Paper className={styles.buttons} style={{ boxShadow: 'none', backgroundColor: '#fafafa', textAlign: 'center', marginTop: '5px' }}>
                            <Typography paragraph>
                                <Link href='https://oul-edu-learning.slack.com/' passHref={true}>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        target="_blank"
                                    >
                                        Connect to slack
                                    </Button>
                                </Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>

        </>
    );
}

export default Messages;