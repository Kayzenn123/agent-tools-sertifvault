import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as fetchPosts } from "./blog_z6ecVoCi.mjs";
import { a as SITE, i as METADATA, n as APP_BLOG, r as I18N } from "./_astrowind_config_DvWkjndx.mjs";
import { u as getPermalink } from "./permalinks_Ch_pGmTV.mjs";
import { getRssString } from "@astrojs/rss";
//#region src/pages/rss.xml.ts
var rss_xml_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => true
});
var GET = async () => {
	if (!APP_BLOG.isEnabled) return new Response(null, {
		status: 404,
		statusText: "Not found"
	});
	const posts = await fetchPosts();
	const rss = await getRssString({
		title: `${SITE.name}’s Blog`,
		description: METADATA?.description || "",
		site: "https://agent-tools-sertifvault.vercel.app",
		items: posts.map((post) => ({
			link: getPermalink(post.permalink, "post"),
			title: post.title,
			description: post.excerpt,
			pubDate: post.publishDate,
			...post.author ? { author: post.author } : {},
			categories: [...post.category ? [post.category.title] : [], ...(post.tags ?? []).map((tag) => tag.title)]
		})),
		trailingSlash: SITE.trailingSlash,
		xmlns: { atom: "http://www.w3.org/2005/Atom" },
		customData: [
			`<language>${I18N?.language || "en"}</language>`,
			`<lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>`,
			`<atom:link href="${new URL(getPermalink("rss.xml", "asset"), "https://agent-tools-sertifvault.vercel.app")}" rel="self" type="application/rss+xml" />`
		].join("")
	});
	return new Response(rss, { headers: { "Content-Type": "application/xml" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@ts
var page = () => rss_xml_exports;
//#endregion
export { page };
