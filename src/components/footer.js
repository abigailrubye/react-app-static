function Footer() {
  const footerStyle = {
    backgroundColor: "#ff9ecf", // pink
    padding: "20px",
    textAlign: "center",
  };

  const textStyle = {
    color: "#2b2b2b",
    fontStyle: "italic",
    fontSize: "1.1rem",
    margin: 0,
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        Moral: True love requires sacrifice, courage, and staying true to who
        you are.
      </p>
    </footer>
  );
}

export default Footer;
