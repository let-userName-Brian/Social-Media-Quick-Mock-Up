import { UserProfiles } from "./data"
import Article from "./Article"
import { Box } from "@mui/system"

export default function ArticleList() {
    return (
        <div>
            <Box sx={{display: "flex",
            marginTop: '100px',
            backgroundColor:'grey',
            color: "transparent"}}>
                {UserProfiles.NewsArticles.map((article) => <Article article={article} />)}
            </Box>
        </div>
    )
}