import {Layout} from "../Layout";
import FloorPlan from "./FloorPlan";
import Box from "@mui/material/Box";
import {Container, Paper} from "@mui/material";

export default function FloorPlanPage() {
    return (
        <Layout>
            <Box sx={{textAlign: 'center'}}>
                <h2>Warehouse Floor Plan</h2>
            </Box>
            <Container sx={{
                width: 'available',
                gap: '2em',
                padding: '.75em'
            }}>
                <Paper sx={{
                    p: '1.6em',
                    gap: '10rem'
                }} elevation={3}>
                    <FloorPlan />
                </Paper>
            </Container>
        </Layout>
    )
}