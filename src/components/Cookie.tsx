import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import ReactGA from "react-ga4";

export default function Cookie() {
  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,
      autoClearCookies: true,
      cookie: {
        name: "zaehnsationell_semlp_cookie",
      },
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "middle center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      onFirstConsent: ({ cookie }) => {
        console.log("onFirstConsent fired", cookie);
      },
      onConsent: ({ cookie }) => {
        console.log("onConsent fired!", cookie);
      },
      onChange: ({ changedCategories, changedServices }) => {
        console.log("onChange fired!", changedCategories, changedServices);
      },
      onModalReady: ({ modalName }) => {
        console.log("ready:", modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log("visible:", modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log("hidden:", modalName);
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
            ],
            reloadPage: true,
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {
                ReactGA.initialize("G-5YFNQD4C3F");
              },
              onReject: () => {
                ReactGA.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
              },
            },
          },
        },
      },
      language: {
        default: "de",
        translations: {
          de: {
            consentModal: {
              title: "Datenschutz-Präferenz",
              description: `
              Wir benötigen Ihre Einwilligung, bevor Sie unsere Website weiter besuchen können.<br/>
              Wenn Sie unter 16 Jahre alt sind und Ihre Einwilligung zu optionalen Services geben möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis bitten.<br/>
              Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für personalisierte Anzeigen und Inhalte oder die Messung von Anzeigen und Inhalten. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer <a href="/data-privacy" target="_blank">Datenschutzerklärung</a>. Es besteht keine Verpflichtung, in die Verarbeitung Ihrer Daten einzuwilligen, um dieses Angebot zu nutzen. Sie können Ihre Auswahl jederzeit unter Einstellungen widerrufen oder anpassen. Bitte beachten Sie, dass aufgrund individueller Einstellungen möglicherweise nicht alle Funktionen der Website verfügbar sind.<br/>
              <hr style="border-top: 1px solid #ccc; margin: 10px 0;"/>
              <span style="font-size: 0.9em;">
                Einige Services verarbeiten personenbezogene Daten in den USA. Mit Ihrer Einwilligung zur Nutzung dieser Services willigen Sie auch in die Verarbeitung Ihrer Daten in den USA gemäß Art. 49 (1) lit. a GDPR ein. Der EuGH stuft die USA als ein Land mit unzureichendem Datenschutz nach EU-Standards ein. Es besteht beispielsweise die Gefahr, dass US-Behörden personenbezogene Daten in Überwachungsprogrammen verarbeiten, ohne dass für Europäerinnen und Europäer eine Klagemöglichkeit besteht.<br/>
              </span>
            `,
              acceptAllBtn: "Ich akzeptiere alle Cookies",
              acceptNecessaryBtn: "Nur essenzielle Cookies akzeptieren",
              showPreferencesBtn: "Individuelle Datenschutz-Präferenzen",
              closeIconLabel: "Alle ablehnen und schließen",
              footer: `
                      <a href="/impressum" target="_blank">Impressum</a>
                      <a href="/data-privacy" target="_blank">Datenschutzerklärung</a>
                  `,
            },
            preferencesModal: {
              title: "Datenschutz-Präferenz",
              acceptAllBtn: "Ich akzeptiere alle",
              acceptNecessaryBtn: "Ich lehne alle ab",
              savePreferencesBtn: "Ich akzeptiere die aktuelle Auswahl",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Deine Datenschutz-Präferenz",
                  description: `Hier finden Sie eine Übersicht über alle verwendeten Cookies. Sie können Ihre Einwilligung geben oder sich weitere Informationen anzeigen lassen und bestimmte Cookies auswählen.`,
                },
                {
                  title: "Wesentlich",
                  description:
                    "Diese Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich und können nicht deaktiviert werden.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: "Cookie-Tabelle",
                    headers: {
                      name: "Cookie",
                      domain: "Domain",
                      desc: "Beschreibung",
                    },
                    body: [
                      {
                        name: "zaehnsationell_semlp_cookie",
                        domain: location.hostname,
                        desc: "Dieses Cookie speichert die Einwilligungspräferenzen des Benutzers für Cookies auf dieser Website. Es erinnert sich daran, ob der Benutzer bestimmte Cookie-Kategorien akzeptiert oder abgelehnt hat.",
                      },
                    ],
                  },
                },
                {
                  title: "Funtionell",
                  description:
                    "Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen. Alle Daten werden anonymisiert und können nicht verwendet werden, um Sie zu identifizieren.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "Cookie-Tabelle",
                    headers: {
                      name: "Cookie",
                      domain: "Domain",
                      desc: "Beschreibung",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        desc: "Dieses Cookie wird von Google Analytics verwendet, um Benutzer zu unterscheiden und die Anforderungsrate zu drosseln. Es hilft bei der Verfolgung der Website-Nutzung und der Leistungsmetriken.",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        desc: "Dieses Cookie wird von Google Analytics verwendet, um Benutzer zu unterscheiden. Es speichert und aktualisiert einen eindeutigen Wert für jede besuchte Seite.",
                      },
                    ],
                  },
                },
                {
                  title: "Weitere Informationen",
                  description:
                    'Für Fragen im Zusammenhang mit meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten kontaktieren Sie uns bitte unter <a href="mailto:info@zaehnsationell.de">info@zaehnsationell.de</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
