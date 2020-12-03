import * as React from "react";
import {Nav} from "react-bootstrap";

type Props = {}

type State = {}

class LeftNavBarMenu extends React.Component<Props, State> {
    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        );
    }
}

export default LeftNavBarMenu;