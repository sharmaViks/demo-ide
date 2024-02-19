import * as React from "react";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const highlightSearchTerm = (text, term) => {
  const regex = new RegExp(`(${term})`, 'gi');
  return text?.replace(regex, '<mark>$1</mark>');
};

export default function MainContent({ open, content,searchTerm }) {

const highlightedParagraph = () => {
  if (!searchTerm) {
    return content;
  }
  return content && highlightSearchTerm(content, searchTerm);
};
  return (
    <Main open={open}>
      <DrawerHeader />
      <p dangerouslySetInnerHTML={{ __html: highlightedParagraph() }} />
    </Main>
  );
}

