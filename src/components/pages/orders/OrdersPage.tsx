import React, {useState} from 'react';
import {Tab, Tabs} from '@mui/material';
import Box from '@mui/material/Box';
import {Layout} from "../Layout";
import TabPanel from "../../util/TabPanel";
import OrderTab from "./OrderTab";
import {getOutBoundOrders} from "../../../service/OutBoundOrderDataService";
import {getInBoundOrders} from "../../../service/InBoundOrderDataService";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function OrdersPage() {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Layout>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Out-bound Orders" {...a11yProps(0)} />
                        <Tab label="In-bound Orders" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <OrderTab title="Outbound Orders" queryKey="outBoundOrders" dataService={getOutBoundOrders}></OrderTab>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <OrderTab title="Inbound Orders" queryKey="inBoundOrders" dataService={getInBoundOrders}></OrderTab>
                </TabPanel>
            </Box>
        </Layout>
    );
}
