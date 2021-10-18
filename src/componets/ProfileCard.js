import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { Box, fontWeight } from "@mui/system";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function ProfileCard({ profile }) {

    let birthday = new Date(profile.birthday).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Card sx={{ width: 345, m: 4, height: 460 }}>
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
                    <Button onClick={handleOpen}>View Photo</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <CardMedia
                            component="img"
                            height="700"
                            image={profile.profileImage}
                            alt="user"
                        />
                        <Typography id="modal-modal-description" sx={{ 
                            mt: 7, 
                            color: 'white', 
                            fontWeight: '600',
                            font: 'strong'
                            }}>
                            Beautiful isn't it?
                        </Typography>
                        </Box>
                    </Modal>
                </CardContent>
        </Card>
    );
}