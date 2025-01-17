export const post = {
  title: "Static sites are great",
  slug: "static-sites-are-great",
  description:
    "Worry less about security, caching, and talking to the server. Static sites are the new thing.",
  body: '## The case for the static site generator\n\nMore and more developers are jumping on the "go static train", and rightfully so. Static pages are fast, lightweight, they scale well. They are more secure, and simple to maintain and they allow you to focus all your time and effort on the user interface. Often times, this dedication really shows.\n\nIt just so happens that static site generators are mostly loved by developers, but not by the average Joe. They do not offer WYSIWYG, previewing on demo sites may take an update cycle, they are often based on markdown text files, and they require some knowledge of modern day repositories.\n\nMoreover, when teams are collaborating, it can get complicated quickly. Has this article already been proof-read or reviewed? Is this input valid? Are user permissions available, e.g. for administering adding and removing team members? Can this article be published at a future date? How can a large repository of content be categorized, organized, and searched? All these requirements have previously been more or less solved within the admin area of your CMS. But of course with all the baggage that made you leave the appserver-app-database-in-one-big-blob stack in the first place.\n\n## Content APIs to the rescue\n\nAn alternative is decoupling the content management aspect from the system. And then replacing the maintenance prone server with a cloud based web service offering. Effectively, instead of your CMS of old, you move to a [Content Management as a Service (CMaaS)](https://www.contentful.com/r/knowledgebase/content-as-a-service/ "Content Management as a Service (CMaaS)") world, with a content API to deliver all your content. That way, you get the all the [benefits of content management features](http://www.digett.com/blog/01/16/2014/pairing-static-websites-cms "benefits of content management features") while still being able to embrace the static site generator mantra.\n\nIt so happens that Contentful is offering just that kind of content API. A service that\n\n* from the ground up has been designed to be fast, scalable, secure, and offer high uptime, so that you don’t have to worry about maintenance ever again.\n* offers a powerful editor and lots of flexibility in creating templates for your documents that your editors can reuse and combine, so that no developers resources are required in everyday writing and updating tasks.\n* separates content from presentation, so you can reuse your content repository for any device platform your heart desires. That way, you can COPE ("create once, publish everywhere").\n* offers webhooks that you can use to rebuild your static site in a fully automated fashion every time your content is modified.\n\nExtracted from the article [CMS-functionality for static site generators](https://www.contentful.com/r/knowledgebase/contentful-api-cms-static-site-generators/ "CMS-functionality for static site generators"). Read more about the [static site generators supported by Contentful](https://www.contentful.com/developers/docs/tools/staticsitegenerators/ "static site generators supported by Contentful").',
  publishDate: "2017-05-16T00:00:00.000+02:00",
  author: {
    name: "John Doe",
    company: "ACME",
    title: "Web Developer",
    facebook: "johndoe",
    image: {
      url: "https://images.ctfassets.net/ap0uwnf0i4f8/7orLdboQQowIUs22KAW4U/f5a41f628b6b226e95795cddaeb12914/matt-palmer-254999.jpg",
    },
  },
  heroImage: {
    url: "https://images.ctfassets.net/ap0uwnf0i4f8/4NzwDSDlGECGIiokKomsyI/187fdbfe491a73723cbdd765e1e22345/denys-nevozhai-100695.jpg",
  },
};

export interface IPost {
  title: string;
  slug: string;
  description: string;
  body: string;
  publishDate: string;
  author: IAuthor;
  heroImage: IHeroImage;
}

export interface IHeroImage {
  url: string;
}

export interface IAuthor {
  name: string;
  company: string;
  title: string;
  facebook: string;
  image: {
    url: string;
  };
}
