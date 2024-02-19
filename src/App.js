import { useState, useCallback } from "react";
import "./App.css";
import PersistentDrawerLeft from "./common/drawer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./common/mainContent";
import Navbar from "./common/navbar";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileContents, setFileContents] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFileClick = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const content = event.target.result;
      setFileContents(content);
    };
    fileReader.readAsText(file);
  };

  const handleFileChange = useCallback((event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  },[]);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  return (
      <div className="App">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleFileChange={handleFileChange}
            handleSearchChange={handleSearchChange}
          />
          <PersistentDrawerLeft
            handleDrawerClose={handleDrawerClose}
            open={open}
            selectedFiles={selectedFiles}
            handleFileClick={handleFileClick}
            handleFileChange={handleFileChange}
          />
          <MainContent
            open={open}
            content={fileContents}
            searchTerm={searchTerm}
          />
        </Box>
      </div>
  );
}

export default App;
