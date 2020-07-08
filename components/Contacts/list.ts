import { UrlSlug, AbsoluteUrl } from "@shared/types";

type Contact = {
  url: AbsoluteUrl | UrlSlug;
  type: string;
};

export const contacts: Contact[] = [
  { url: "https://twitter.com/bespoyasov", type: "TW" },
  { url: "https://instagram.com/a.bespoyasov/", type: "IG" },
  { url: "https://github.com/bespoyasov", type: "GH" },
  { url: "/rss.xml", type: "RSS" },
];