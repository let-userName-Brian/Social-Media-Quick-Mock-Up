import { UserProfiles } from "./data"
import ProfileCard from "./ProfileCard"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import image from "./image.png"
import { useState } from "react"
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function Profiles() {
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
        <div>
            <Box sx={{ p: 5,
                backgroundImage:`url(${image})`,
                height: '100vh',
                width: '90vh'
            }}>
                <Typography variant="h3" color='white'>Contacts</Typography>
                <Box display="flex" flexWrap="wrap" background-color='text.secondary'>
                    {UserProfiles.userProfiles.map((profile, index) => <ProfileCard profile={profile}/>)}
                </Box>
            </Box>
        </div>
    )
}
