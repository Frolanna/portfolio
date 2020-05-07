import React from "react";

import { connect, ConnectedProps  } from "react-redux";

import { activateHeaderNavItem } from "../../store/Header/actions";
import Header from "./Header";

const mapStateToProps = (state: React.ComponentState) => {
    return {
        headerNavItems: state.header.headerNavItems
    };
};

const mapDispatchToProps = {
    activateHeaderNavItem: activateHeaderNavItem
};

export const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class HeaderContainer extends React.Component<Props, {}> {   
    render() {
        return <Header activateHeaderNavItem = {this.props.activateHeaderNavItem} headerNavItems = {this.props.headerNavItems}/>       
    }
}
export default connector(HeaderContainer)



