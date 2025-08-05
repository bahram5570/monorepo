export type HEADER_SINGLE_LINK = { title: string; linkTo: string };
export type HEADER_MULTI_LINK = { title: string; linkTo: { title: string; linkTo: string }[] };
export type HEADER_LINKS_TYPES = (HEADER_SINGLE_LINK | HEADER_MULTI_LINK)[];
