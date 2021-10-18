import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ProfileCard({ profile }) {

    let birthday = new Date(profile.birthday).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Card sx={{ width: 345, m: 4 }}>
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
            </CardContent>
        </Card>
    );
}