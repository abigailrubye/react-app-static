function Content() {
  const mainStyle = {
    backgroundColor: "#ffe4f0", // soft pink
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    color: "#444",
    lineHeight: "1.6",
  };

  const paragraphStyle = {
    marginBottom: "16px",
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>
        Ariel is a young mermaid who lives under the sea with her father and
        sisters. She dreams of being independent and exploring the human world.
        After she saves a human prince, Eric, from a shipwreck, her father
        discovers her collection of thingamabobs and punishes her for going near
        the surface.
      </p>

      <p style={paragraphStyle}>
        Determined to be with Eric, Ariel makes a deal with the sea witch, Ursula,
        to have human legs for three days. If she receives true love’s kiss from
        Eric, she can remain human forever. If she fails, she will belong to
        Ursula. She must do all of this without her voice.
      </p>

      <p>
        After a difficult three days on land, Ariel does not receive true love’s
        kiss and turns back into a mermaid. Eric confronts Ursula and defeats her
        to protect Ariel. Seeing how deeply Ariel loves Eric, her father
        transforms her into a human so they can live happily ever after.
      </p>
    </main>
  );
}

export default Content;
