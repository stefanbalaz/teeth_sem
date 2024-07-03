import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Paragraph from "./Paragraph";

export default function Legal() {
  return (
    <div className="flex-1 custom-margin-b flex-grow ">
      <Headline1>Headline 1</Headline1>
      <Headline2>Headline 2</Headline2>
      <Headline3>Headline 3</Headline3>
      <Paragraph>Impressum</Paragraph>
    </div>
  );
}
