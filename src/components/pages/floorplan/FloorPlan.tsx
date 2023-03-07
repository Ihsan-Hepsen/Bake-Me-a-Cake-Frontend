import {Container} from "@mui/material";

import './FloorPlan.css'
import StorageRoom from "./StorageRoom";

export default function FloorPlan() {
    return (
        <div>
            {/* Outer Container */}
            <Container className="outerContainer" maxWidth="lg">
                {/* Left */}
                <Container className="mdContainer" maxWidth="md">
                    <StorageRoom name="Flour & Sugar Room" category="FLOUR_SUGAR"/>
                </Container>
                {/* Right */}
                <Container className="mdContainer" maxWidth="md">
                    <Container className="roomContainer">
                        <StorageRoom name="Oil Room" category="OIL"/>
                        <StorageRoom name="Dairy Room" category="DAIRY"/>
                    </Container>
                    <Container className="hallway">main hallway</Container>
                    <Container className="roomContainer">
                        <StorageRoom name="Chocolate Room" category="CHOCOLATE"/>
                        <StorageRoom name="Vanilla Room" category="FLAVOR"/>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}
