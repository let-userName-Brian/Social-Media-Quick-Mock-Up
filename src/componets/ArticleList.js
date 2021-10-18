import { UserProfiles } from "./data"
import Article from "./Article"
import { Box } from "@mui/system"

export default function ArticleList() {
    return (
            <Box sx={{display: "flex",
            marginTop: '50px',
            backgroundColor: "grey",
            color: 'grey'
            }}>
                {UserProfiles.NewsArticles.map((article) => <Article article={article} />)}
            </Box>
    )
}