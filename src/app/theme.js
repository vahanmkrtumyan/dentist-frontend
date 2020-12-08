import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  secondaryTextColor: "#9E9E9E",
  palette: {
    shape: {
      borderRadius: 8,
      buttonBorderRadius: 48,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "10.5px 14px",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
});

export default theme;
