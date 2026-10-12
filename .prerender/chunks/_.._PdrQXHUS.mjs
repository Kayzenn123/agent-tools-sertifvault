import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { N as createAstro, S as addAttribute, b as maybeRenderHead, d as renderComponent, j as unescapeHTML, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
import { l as getStaticPathsBlogList, n as blogListRobots } from "./blog_z6ecVoCi.mjs";
import { a as $$Icon, t as $$PageLayout } from "./PageLayout_CB0t4Pbn.mjs";
import { s as getBlogPermalink, u as getPermalink } from "./permalinks_Ch_pGmTV.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_BDBzcm61.mjs";
import { n as $$Headline$1, r as $$List, t as $$Pagination } from "./Pagination_B4R3CaKh.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CAcg-izT.mjs";
import { twMerge } from "tailwind-merge";
//#region src/components/ui/Headline.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Headline = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Headline;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline, classes = {} } = Astro.props;
	const { container: containerClass = "max-w-3xl", title: titleClass = "text-3xl md:text-4xl ", subtitle: subtitleClass = "text-xl" } = classes;
	return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl text-balance", titleClass), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted text-pretty", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/ui/Headline.astro", void 0);
//#endregion
//#region src/components/widgets/Newsletter.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Newsletter;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), placeholder = "you@example.com", button = "Subscribe", disclaimer, action, method = "post", name = "newsletter", layout = "band", id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const inputId = `${name}-email`;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm", layout === "band" ? "flex flex-col gap-8 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between" : "mx-auto max-w-2xl p-8 text-center"], "class:list")}><div${addAttribute([layout === "band" ? "lg:max-w-xl" : ""], "class:list")}>${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": {
			container: layout === "band" ? "mb-0 md:mb-0 text-center lg:text-left rtl:lg:text-right md:mx-0" : "mb-6 md:mb-6",
			title: "text-2xl md:text-3xl",
			subtitle: "text-base md:text-lg mt-2",
			...classes?.headline ?? {}
		}
	})}</div><form${addAttribute(["w-full", layout === "band" ? "lg:max-w-md" : "mx-auto max-w-md"], "class:list")}${addAttribute(action, "action")}${addAttribute(action ? method : void 0, "method")}${addAttribute(name, "name")}><label${addAttribute(inputId, "for")} class="sr-only">Email</label><div class="flex flex-col gap-3 sm:flex-row"><input${addAttribute(inputId, "id")} type="email" name="email" required autocomplete="email"${addAttribute(placeholder, "placeholder")} class="block w-full flex-1 rounded-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-5 py-3 text-base text-default placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"><button type="submit" class="btn-primary whitespace-nowrap px-6 py-3">${button}${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrow-right",
		"class": "ml-1.5 h-5 w-5 rtl:ml-0 rtl:mr-1.5 rtl:rotate-180"
	})}</button></div>${disclaimer && renderTemplate`<p class="mt-3 text-xs text-muted">${unescapeHTML(disclaimer)}</p>`}</form></div>` })}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/widgets/Newsletter.astro", void 0);
//#endregion
//#region src/pages/[...blog]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://agent-tools-sertifvault.vercel.app");
var getStaticPaths = (async ({ paginate }) => {
	return await getStaticPathsBlogList({ paginate });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const currentPage = page.currentPage ?? 1;
	const breadcrumbs = [{
		text: "Home",
		href: getPermalink("/")
	}, ...currentPage > 1 ? [{
		text: "Blog",
		href: getBlogPermalink()
	}, { text: `Page ${currentPage}` }] : [{ text: "Blog" }]];
	const metadata = {
		title: `Blog${currentPage > 1 ? ` — Page ${currentPage}` : ""}`,
		description: "Articles about Astro, Tailwind CSS and the AstroWind template: tutorials, customisation guides and web development notes.",
		robots: {
			index: blogListRobots?.index && currentPage === 1,
			follow: blogListRobots?.follow
		},
		openGraph: { type: "blog" }
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, {
		"default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {
			"bar": true,
			"items": breadcrumbs
		})}${maybeRenderHead($$result)}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">${renderComponent($$result, "Headline", $$Headline$1, { "subtitle": "A statically generated blog example with news, tutorials, resources and other interesting content related to AstroWind" }, { "default": ($$result) => renderTemplate`The Blog` })}${renderComponent($$result, "BlogList", $$List, { "posts": page.data })}${renderComponent($$result, "Pagination", $$Pagination, {
			"prevUrl": page.url.prev,
			"nextUrl": page.url.next
		})}<!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --></section>${renderComponent($$result, "Newsletter", $$Newsletter, {
			"tagline": "Newsletter",
			"title": "New articles in your inbox",
			"subtitle": "Tutorials and notes about Astro, Tailwind CSS and the template, when they are published. Nothing else.",
			"button": "Subscribe",
			"disclaimer": "Unsubscribe with one click. This form is a template: pass an <code>action</code> to connect it to your email tool.",
			"classes": { container: "max-w-4xl" }
		})}`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result) => renderTemplate`${page.url.prev && renderTemplate`<link rel="prev"${addAttribute(page.url.prev, "href")}>`}${page.url.next && renderTemplate`<link rel="next"${addAttribute(page.url.next, "href")}>`}` })}`
	})}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/[...page].astro", void 0);
var $$file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/[...page].astro";
var $$url = "/[...blog]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
