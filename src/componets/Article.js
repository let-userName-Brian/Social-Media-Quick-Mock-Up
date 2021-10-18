import { Paper, Typography } from "@mui/material";

export default function Article({ article }) {
    return (

        <Paper elevation={2} sx={{ m: 5, p: 2, backgroundColor: 'grey' }}>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="p">{article.article}</Typography>
        </Paper>
    )
}