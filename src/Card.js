import React, { useState } from "react";
import { Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
/* import CardHeader from "@material-ui/core/CardHeader"; */
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    border: "1px solid lightgray",
    margin: "10px",
  },
  cardButton: {
    background: "green",
  },
  cardImage: {
    height: "100%",
    objectFit: "contain",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  modal: {
    height: "100%",

    justify: "center",
  },
  modalImage: {
    height: "50vh",
    objectFit: "contain",
  },
});

function Cards({ title, image, price }) {
  const isActive = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = (e) => setOpen(!open);
  const [fav, setFav] = useState(false);
  const handle = () => setFav(!fav);
  return (
    <div>
      <Card className={classes.card}>
        {/* <CardHeader title="shrimp" /> */}
        <CardMedia
          style={{ height: "150px", justifyContent: "center" }}
          className={classes.cardImage}
          image={image}
        />
        <CardContent>
          <Typography> {title}</Typography>
          <Typography>₹{price}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button className={classes.cardButton} onClick={handleClick}>
            Description
          </Button>
          <Link to="#" onClick={handle}>
            {fav ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "black" }} />
            )}
          </Link>
        </CardActions>
      </Card>
      <div>
        <Modal
          show={open}
          onHide={handleClick}
          className={classes.modal}
          size={isActive ? "sm" : "lg"}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Heading Text</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div
              style={isActive ? { alignItems: "center" } : { display: "flex" }}
            >
              <img
                className={classes.modalImage}
                src="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202035/0003/larnaca-teak-x-all-weather-weave-club-chair-c.jpg"
                alt="logo"
              />
              <div style={{ marginLeft: "20px" }}>
                <Typography
                  variant="h5"
                  colorTextSecondary
                  style={{ marginBottom: "10px" }}
                >
                  Product description
                </Typography>
                <Typography>Description: L x B x H</Typography>
                <Typography>Technology Used: Fabrication</Typography>
                <Typography>Materials Used: Wood</Typography>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClick}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Cards;
