export default function OpenFolder({ handleFileChange }) {
  return (
    <div>
      <label htmlFor="folderInput" style={{ cursor: "pointer" }}>
        Open Folder
      </label>
      <input
        id="folderInput"
        type="file"
        onChange={handleFileChange}
        directory=""
        webkitdirectory=""
        style={{ display: "none" }}
      />
    </div>
  );
}
