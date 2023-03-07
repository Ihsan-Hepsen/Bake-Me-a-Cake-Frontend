import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import {Alert, createTheme, ThemeProvider} from '@mui/material'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import StockPage from "./components/pages/stock/StockPage";
import OrdersPage from "./components/pages/orders/OrdersPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import FloorPlanPage from "./components/pages/floorplan/FloorPlanPage";

const queryClient = new QueryClient()


const theme = createTheme({
    palette: {
        primary: {
            main: '#340068',
        }
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<DashboardPage/>}/>
                            <Route path="/dashboard" element={<DashboardPage/>}/>
                            <Route path="/stock" element={<StockPage/>}/>
                            <Route path="/orders" element={<OrdersPage/>}/>
                            <Route path="/warehouse" element={<FloorPlanPage/>}/>
                            <Route path="/login" element={<Alert severity="info">There's no login page :)</Alert>}/>
                        </Routes>
                    </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default App;
