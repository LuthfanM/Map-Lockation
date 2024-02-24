import { StyleSheet } from "react-native";
import { Login } from "./login";
import { ComponentsStyle } from "./components";
import { colors } from "constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface_secondary,
    padding: 10,
  },
  centering: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  absoluteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    padding: 10,
    zIndex: 100
  },
  ...Login,
  ...ComponentsStyle,
});

export { styles };
