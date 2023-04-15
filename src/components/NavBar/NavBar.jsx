import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import { Sidebar } from '..';
import useStyles from './styles';

const NavBar = () => {
    const [MobileOpen, setMobileOpen] = useState(false);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthenticated = true;
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            style={{ outline: 'none' }}
                            onclick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color="inherit" sx={{ ml: 1 }} onclick={() => { }}>
                        {theme.palette.mode = 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && 'Search...'}
                    <div>
                        {isAuthenticated ? (
                            <Button color='inherit' onClick={() => { }}>
                                Login &nbsp;
                                {/* space */}
                            </Button>
                        ) : (
                            <Button
                                color="inherit"
                                Component={Link}
                                to="/profile/:id"
                                className={classes.linkButton}
                                onclick={() => { }}
                            >
                                {!isMobile && <>My Movies &nbsp; </>}
                                <Avatar             /* image of a specific logged in person*/
                                    style={{ width: 30, height: 30 }}
                                    alt="Profile"
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                />
                            </Button>
                        )
                        }
                    </div>
                    {isMobile && 'Search...'}
                </Toolbar>
            </AppBar>
            <div>
                <nav className={classes.Drawer}>
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={MobileOpen}
                            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            className={classes.drawerBackground}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}
                        >
                            <sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>

                    )}


                </nav>
            </div>
        </>
    )
}

export default NavBar;