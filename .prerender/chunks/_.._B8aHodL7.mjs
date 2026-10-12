import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { N as createAstro, b as maybeRenderHead, d as renderComponent, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
import { d as getStaticPathsBlogTag, i as blogTagRobots } from "./blog_z6ecVoCi.mjs";
import { t as $$PageLayout } from "./PageLayout_CB0t4Pbn.mjs";
import { s as getBlogPermalink, u as getPermalink } from "./permalinks_Ch_pGmTV.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_BDBzcm61.mjs";
import { n as $$Headline, r as $$List, t as $$Pagination } from "./Pagination_B4R3CaKh.mjs";
//#region src/pages/[...blog]/[tag]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://agent-tools-sertifvault.vercel.app");
var getStaticPaths = (async ({ paginate }) => {
	return await getStaticPathsBlogTag({ paginate });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page, tag } = Astro.props;
	const currentPage = page.currentPage ?? 1;
	const breadcrumbs = [
		{
			text: "Home",
			href: getPermalink("/")
		},
		{
			text: "Blog",
			href: getBlogPermalink()
		},
		...currentPage > 1 ? [{
			text: `Tag: ${tag.title}`,
			href: getPermalink(tag.slug, "tag")
		}, { text: `Page ${currentPage}` }] : [{ text: `Tag: ${tag.title}` }]
	];
	const metadata = {
		title: `Posts by tag '${tag.title}'${currentPage > 1 ? ` — Page ${currentPage} ` : ""}`,
		description: `Articles tagged ${tag.title} on the AstroWind blog.`,
		robots: {
			index: blogTagRobots?.index,
			follow: blogTagRobots?.follow
		}
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {
		"bar": true,
		"items": breadcrumbs
	})}${maybeRenderHead($$result)}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">${renderComponent($$result, "Headline", $$Headline, {}, { "default": ($$result) => renderTemplate`Tag: ${tag.title}` })}${renderComponent($$result, "BlogList", $$List, { "posts": page.data })}${renderComponent($$result, "Pagination", $$Pagination, {
		"prevUrl": page.url.prev,
		"nextUrl": page.url.next
	})}</section>` })}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/[tag]/[...page].astro", void 0);
var $$file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/[tag]/[...page].astro";
var $$url = "/[...blog]/[tag]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/[tag]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
