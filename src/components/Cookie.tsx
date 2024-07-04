import CookieConsent from "react-cookie-consent";

export default function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Alle bestätigen"
      cookieName="zaehnsationellCookieConsent"
      style={{ background: "#dbebe9" }}
      contentStyle={{ color: "#2a5854", fontSize: "1.5rem" }}
      buttonStyle={{
        color: "#FFFFFF",
        fontSize: "1.5rem",
        background: "#2a5854",
      }}
      expires={150}
    >
      Wir verwenden Dienste von Drittanbietern, die uns helfen, unsere Webseite
      zu optimieren (Analytics) und personalisierte Werbung auszuspielen
      (Werbung). Um diese Dienste verwenden zu dürfen, benötigen wir Ihre
      Einwilligung.
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
}
