import { Image } from "semantic-ui-react";
import SocialMediaLinks from "../SocialMediaLinks";
import { AllRightsReserved } from "./CopyrightsNotice";

export function LeftFooterGrid() {
  return (
      <section className="flex flex-col space-y-3 w-full h-full">
        <Image src="logo/Soda_Logo_Dark_Mode.svg" className="w-28 " alt="SoDA Logo" />
          <span className="text-soda-gray italic">Since 2008</span>
          <AllRightsReserved />
      </section>
  );
}
 