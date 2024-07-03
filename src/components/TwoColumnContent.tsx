import ContentButtonBlock from "./ContentButtonBlock";
import Headline1 from "./Headline1";
import MoreInfoLink from "./MoreInfoLink";
import { TwoColumnContentProps } from "../types";

export default function TwoColumnContent({
  contentButtonBlockArray,
  headline1Text,
  moreInfoText,
  moreInfoLink,
  moreInfoVisible,
}: TwoColumnContentProps) {
  return (
    <>
      {contentButtonBlockArray && (
        <div className="custom-margin-b">
          {headline1Text && (
            <Headline1 headline1ClassName="w-3/4">{headline1Text}</Headline1>
          )}
          <ContentButtonBlock
            contentButtonBlockArray={contentButtonBlockArray}
            contentButtonBlockClassName=""
          />
          <MoreInfoLink
            moreInfoText={moreInfoText}
            moreInfoLink={moreInfoLink}
            moreInfoClassName="mt-8 mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0"
            moreInfoVisible={moreInfoVisible}
          />
        </div>
      )}
    </>
  );
}
