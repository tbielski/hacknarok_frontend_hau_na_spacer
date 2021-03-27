import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
const ProfileInfoItem = ({ fieldName, value, icon }) => {
    return (
        <ListItem>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={value} secondary={fieldName} />
        </ListItem>
    );
};

export default ProfileInfoItem;
