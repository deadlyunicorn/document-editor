import { Roboto,Open_Sans,Raleway,Nunito,Anton,Dancing_Script,Prompt,Caveat,Cormorant_Garamond,Bree_Serif,Great_Vibes,Montserrat_Alternates } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const roboto = Roboto({subsets:['latin'],weight:"400"});
const open_sans = Open_Sans({subsets:['latin'],weight:"400"});
const raleway = Raleway({subsets:['latin'],weight:"400"});
const nunito = Nunito({subsets:['latin'],weight:"400"});
const anton = Anton({subsets:['latin'],weight:"400"});
const dancing_Script = Dancing_Script({subsets:['latin'],weight:"400"});
const prompt = Prompt({subsets:['latin'],weight:"400"});
const caveat = Caveat({subsets:['latin'],weight:"400"});;
const cormorant_Garamond = Cormorant_Garamond({subsets:['latin'],weight:"400"});
const bree_Serif = Bree_Serif({subsets:['latin'],weight:"400"});
const great_Vibes = Great_Vibes({subsets:['latin'],weight:"400"});
const montserrat_Alternates = Montserrat_Alternates({subsets:['latin'],weight:"400"});



type customFontsMap = {
  [key:string]:NextFont;
}

export const customFonts:customFontsMap={
  Roboto:roboto,
  Open_Sans:open_sans,
  Raleway:raleway,
  Nunito:nunito,
  Anton:anton,
  Dancing_Script:dancing_Script,
  Prompt:prompt,
  Caveat:caveat,
  Cormorant_Garamond:cormorant_Garamond,
  Bree_Serif:bree_Serif,
  Great_Vibes:great_Vibes,
  Montserrat_Alternates:montserrat_Alternates

}