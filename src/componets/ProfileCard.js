import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from "react"
import { Box } from "@mui/system"

export default function ProfileCard({ profile }) {

    let birthday = new Date(profile.birthday).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };
    

    return (
        <Card sx={{ width: 345, m: 4, height: 460 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={profile.profileImage}
                    alt="user"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.firstName} {profile.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Birthday: {birthday}
                    </Typography>
                    <ClickAwayListener onClickAway={handleClickAway}>
                                <Box sx={{ position: 'relative' }}>
                                <button type="button" onClick={handleClick}>
                                    Details
                                </button>
                                {open ? (
                                <Box sx={styles}>
                                    Hey! My favorite color is: {profile.favColor}
                                </Box>
                                ) : null}
                                </Box>
                            </ClickAwayListener>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}