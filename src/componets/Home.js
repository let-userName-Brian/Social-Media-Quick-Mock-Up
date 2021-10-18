import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArticleList from './ArticleList';
import { Box } from "@mui/system";
import image from "./image.png"



export default function Home() {
    const userData = {
        firstName: "Coolest",
        lastName: "User",
        birthday: "01/01/1928",
        profileImage: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }

    return (
        <Box sx={{ p: 5,
            backgroundImage:`url(${image})`,
            margin: '0',
            height: '100vh',
            width: '90vh'
        }}> 
            <Typography variant="h3" color='white'>Home</Typography>
            <Card sx={{ maxWidth: 400,
                marginLeft: '30vh',
            }}>
            <CardMedia
                component="img"
                height="500"
                image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="your pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {userData.firstName}{' '}
                {userData.lastName}
                </Typography>
                <Typography variant="body2" color="grey">
                wow, much wow indeed. You are amazing, much WOW. 
                </Typography>
            </CardContent>
            <CardActions>
                <Typography size="small">Birthday: {userData.birthday}</Typography>
            </CardActions>
            </Card>
            <Card sx={{
                marginTop: '10px',
                backgroundColor: 'grey',
            }}>
            <Typography variant="h3" backgroundColor="transparent">Newest Articles:</Typography>
                <ArticleList />
            </Card>
        </Box>
    )
}


// import { UserProfile } from "./UserProfileDB"
// import Article from "./Article"
// import { Box } from "@mui/system"

// export default function ArticleList() {
//     return (
//         <div>
//             <Box display="flex">
//                 {UserProfile.newsArticles.map((article, index) => <Article article={article} />)}
//             </Box>
//         </div>
//     )




//home
// mport { Box } from "@mui/system"
// import ArticleList from "./ArticleList"
// import { Typography } from "@mui/material"

// export default function Home() {
//     return (<Box sx={{ p: 4 }}>
//         <Typography variant="h2">News</Typography>
//         <ArticleList />
//     </Box>)
// }