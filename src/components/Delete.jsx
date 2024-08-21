import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import { ImCross } from "react-icons/im";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

function Delete({ open, closeDialog, title, deleteFunction }) {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth="sm"
      scroll="body"
      onClose={closeDialog}
      onBackdropClick={closeDialog}
      TransitionComponent={Transition}
    >
      <DialogContent sx={{ px: 6, py: 6, position: "relative" }}>
        <IconButton
          size="small"
          onClick={closeDialog}
          sx={{
            position: "absolute",
            right: "2rem",
            top: "1.5rem",
            bgcolor: "lightgray",
          }}
        >
          <ImCross />
        </IconButton>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" color={"red"} mb={"2px"}>
                Delete "{title}"
              </Typography>
              <Typography variant="body1">
                Are you sure to delete the note named "{title}" ?
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Button
              onClick={closeDialog}
              size="medium"
              variant="contained"
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={deleteFunction}
              size="medium"
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default Delete;
