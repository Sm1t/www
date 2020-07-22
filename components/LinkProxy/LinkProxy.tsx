import React, { AnchorHTMLAttributes } from "react";
import { AbsoluteUrl, UrlSlug } from "@shared/types";
import Link from "next/link";

function isExternalRoute(uri: AbsoluteUrl | UrlSlug): boolean {
  return uri.startsWith("http");
}

export const LinkProxy: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  const { href, ...rest } = props;

  return isExternalRoute(href) ? (
    <a {...props} />
  ) : (
    <Link href={href}>
      <a {...rest} />
    </Link>
  );
};