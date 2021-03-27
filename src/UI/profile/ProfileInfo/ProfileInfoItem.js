import { Card, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

const ProfileInfoItem = ({ fieldName, value, icon }) => {
    return (
        <Card>
            <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={value} secondary={fieldName} />
            </ListItem>
        </Card>
    );
};

export default ProfileInfoItem;
