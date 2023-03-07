import {Alert, Button, CircularProgress, Menu, MenuItem, Skeleton, Tooltip} from "@mui/material";
import {StockItem} from "../../../model/StockItem";
import * as React from "react";
import {useQuery} from "@tanstack/react-query";
import {getStockItems} from "../../../service/StockItemDataService";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

type PreviewMenuProps = {
    category?: string
}

export default function StockPreviewMenu({category}: PreviewMenuProps) {

    const {isLoading, isError, data: items} = useQuery(['stockItems'], getStockItems)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{marginTop: '1rem'}}>
            <Tooltip title="Click to preview stock list">
                <Button
                    id="basic-button"
                    variant="contained"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Preview
                </Button>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isLoading &&
                    <CircularProgress color="info" sx={{margin: '0.5rem'}}/>
                }
                {isError &&
                    <Alert severity="error">
                        Failed to display preview.
                    </Alert>
                }
                {items && items.filter((item: StockItem) => item.category === category).length === 0
                    ? <MenuItem key={0} onClick={handleClose}>
                        No items in this category
                    </MenuItem>
                    : items?.filter((item: StockItem) => item.category === category).map((el: StockItem, idx: number) => {
                        return (
                            <>
                                {idx > 0 && <Divider/>}
                                <MenuItem key={idx} onClick={handleClose}>
                                    {el.ingredientType} | {el.amount} {el.unit}
                                </MenuItem>
                            </>
                        );
                    })
                }
            </Menu>
        </Box>
    )
}
