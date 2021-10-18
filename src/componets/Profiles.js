import { UserProfiles } from "./data"
import ProfileCard from "./ProfileCard"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import image from "./image.png"


export default function Profiles() {

    return (
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
    )
}
