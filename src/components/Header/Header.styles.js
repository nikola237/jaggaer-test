import { createStyles } from "@mui/styles";
import { theme } from "../../theme";

export const styles = createStyles({
  root: {
    backgroundColor: "red",
  },

  navbar: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },

  titleBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: theme.palette.secondary.main,
    flex: 1,
  },
});
