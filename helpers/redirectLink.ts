export const redirectLink = (link: string) => {
  if (typeof window !== "undefined") {
    window.open(link, "_blank");
  }
};
