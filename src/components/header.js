function Header() {
  const headerStyle = {
    backgroundColor: "#2ec4c6", // teal
    padding: "30px",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#ffffff",
    fontFamily: "Georgia, serif",
    fontSize: "2.5rem",
    margin: 0,
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>The Little Mermaid</h1>
    </header>
  );
}

export default Header;
