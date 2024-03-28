// styles/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // Add your custom CSS properties here
    //   body: {
    //     backgroundColor: "lightblue",
    //     color: "black",
    //   },
      ".text-3xl": {
        // Customize font size
        fontSize: "1.875rem", // This corresponds to text-3xl in Chakra UI
      },
    },
  },
});

export default theme;
