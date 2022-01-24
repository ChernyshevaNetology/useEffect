import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { IUserDetails } from "../types";

const UserCard = React.memo(
  ({
    id,
    name,
    avatar,
    details: { city, position, company },
  }: IUserDetails) => {
    return (
      <Card key={id}>
        <CardActionArea style={{ maxWidth: "360px" }}>
          <CardMedia style={{ height: "140px" }} image={avatar} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {city}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {position}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
);

export default UserCard;
