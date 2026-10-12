import { a as SITE, n as APP_BLOG, r as I18N } from "./_astrowind_config_DvWkjndx.mjs";
import slugify from "limax";
//#region src/utils/utils.ts
var formatter = new Intl.DateTimeFormat(I18N?.language, {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: "UTC"
});
var getFormattedDate = (date) => date ? formatter.format(date) : "";
/**
* Shortens text at a word boundary so it fits a limit (meta descriptions are
* cut by search engines at about 155 characters). Adds an ellipsis when cut.
*/
var truncateAtWord = (text = "", limit = 155) => {
	if (text.length <= limit) return text;
	const cut = text.slice(0, limit - 1);
	const lastSpace = cut.lastIndexOf(" ");
	return `${(lastSpace > limit / 2 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.]+$/, "")}…`;
};
var trim = (str = "", ch) => {
	let start = 0, end = str.length || 0;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};
//#endregion
//#region src/utils/permalinks.ts
var trimSlash = (s) => trim(trim(s, "/"));
var createPath = (...params) => {
	const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
	return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};
var BASE_PATHNAME = SITE.base || "/";
var cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
var BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
var CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
var TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
var POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
/** */
var getCanonical = (path = "") => {
	const url = String(new URL(path, SITE.site));
	if (SITE.trailingSlash == false && path && url.endsWith("/")) return url.slice(0, -1);
	else if (SITE.trailingSlash == true && path && !url.endsWith("/")) return url + "/";
	return url;
};
/** */
var getPermalink = (slug = "", type = "page") => {
	let permalink;
	if (slug.startsWith("https://") || slug.startsWith("http://") || slug.startsWith("://") || slug.startsWith("#") || slug.startsWith("javascript:")) return slug;
	switch (type) {
		case "home":
			permalink = getHomePermalink();
			break;
		case "blog":
			permalink = getBlogPermalink();
			break;
		case "asset":
			permalink = getAsset(slug);
			break;
		case "category":
			permalink = createPath(CATEGORY_BASE, trimSlash(slug));
			break;
		case "tag":
			permalink = createPath(TAG_BASE, trimSlash(slug));
			break;
		case "post":
			permalink = createPath(trimSlash(slug));
			break;
		default: permalink = createPath(slug);
	}
	return definitivePermalink(permalink);
};
/** */
var getHomePermalink = () => getPermalink("/");
/** */
var getBlogPermalink = () => getPermalink(BLOG_BASE);
/** */
var getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
/** */
var definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);
//#endregion
export { cleanSlug as a, getCanonical as c, trimSlash as d, getFormattedDate as f, TAG_BASE as i, getHomePermalink as l, CATEGORY_BASE as n, getAsset as o, truncateAtWord as p, POST_PERMALINK_PATTERN as r, getBlogPermalink as s, BLOG_BASE as t, getPermalink as u };
