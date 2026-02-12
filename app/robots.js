export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/job-posting/",
    },
    sitemap: "https://bizzbuzzcreations.com/sitemap.xml",
  };
}
