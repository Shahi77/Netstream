import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import usestyles from './styles';

const categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const classes = usestyles();
    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img
                    className={classes.image}
                    src={theme.palatte.mode = 'light' ? redLogo : blueLogo}
                    alt="Netstream logo"
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({ label, value }) => (
                    <link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => { }} button>
                            {/* <ListItemIcon> */}
                            {/* <img src={redLogo} className={classes.genreImages} height={30} /> */}
                            {/* </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </link>
                )
                )}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <link key={value} className={classes.links} to="/">
                        <ListItem onClick={() => { }} button>
                            {/* <ListItemIcon> */}
                            {/* <img src={redLogo} className={classes.genreImages} height={30} /> */}
                            {/* </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </link>
                )
                )}
            </List>

        </>
    )
}

export default Sidebar