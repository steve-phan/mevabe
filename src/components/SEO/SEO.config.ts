export const defaultSEO = {
  title: "Thông tin Luật Pháp và Thủ Tục cuộc sống tại Đức cho người Việt Nam",
  description:
    "Cập nhật thông tin mới nhất về Luật Pháp và Thủ Tục cuộc sống tại Đức cho người Việt Nam sống tại Đức",
  url: "https://thongtin.de/",
};

export const schemaSEO = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  headline: defaultSEO.title,
  mainEntityOfPage: defaultSEO.url,
  name: defaultSEO.title,
  publisher: {
    "@type": "Organization",
    logo: `${defaultSEO.url}logo.png`,
    name: defaultSEO.title,
    sameAs: [
      "https://www.facebook.com/thongtin.de",
      "https://www.instagram.com/thongtin.de/",
      "https://twitter.com/thongtin.de",
    ],
  },
  url: defaultSEO.url,
};
