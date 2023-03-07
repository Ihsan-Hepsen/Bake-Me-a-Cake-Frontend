import {fulfillOutBoundOrderService} from "../../service/OutBoundOrderDataService"
import {Backdrop, Button, CircularProgress} from "@mui/material"
import React from "react"
import {useState} from "react";
import Swal from 'sweetalert2'

type fulfillOrderProps = {
    btnName: string,
    uuid: string
}

export default function FulfillButton({btnName, uuid}: fulfillOrderProps) {
    const [open, setOpen] = useState(false);
    const [orderData, setOrderData] = useState({});

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    function onClick(uuid: string) {
        handleToggle()
        fulfillOutBoundOrderService(uuid)
            .then((response) => {
                if (response.status === 200) {
                    handleClose()
                    setOrderData(response.data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Done!',
                        text: 'Order has been successfully fulfilled!'
                    })
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Attention!',
                        text: 'Fulfill request did not succeed.',
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'An error prevented the order from being fulfilled.',
                })
                console.log(`Error while fulfilling the order: ${error}`)
                handleClose()
            })
    }

    return (
        <>
            <Button onClick={() => onClick(uuid)} color="primary" variant="contained">
                {btnName}
            </Button>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
            >
                Fulfilling
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    )
}
