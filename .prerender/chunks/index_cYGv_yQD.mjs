import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { N as createAstro, S as addAttribute, b as maybeRenderHead, d as renderComponent, g as renderSlot, j as unescapeHTML, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import { n as renderScript } from "./Logo_CTT-PT76.mjs";
import { f as isBlogCategoryRouteEnabled, o as findPostsByIds, p as isBlogListRouteEnabled, r as blogPostRobots, s as getRelatedPosts, u as getStaticPathsBlogPost } from "./blog_z6ecVoCi.mjs";
import { a as $$Icon, i as $$Button, o as findImage, t as $$PageLayout } from "./PageLayout_CB0t4Pbn.mjs";
import { a as SITE, n as APP_BLOG, r as I18N } from "./_astrowind_config_DvWkjndx.mjs";
import { c as getCanonical, f as getFormattedDate, p as truncateAtWord, s as getBlogPermalink, u as getPermalink } from "./permalinks_Ch_pGmTV.mjs";
import { n as $$Tags, r as $$Image, t as $$Breadcrumbs } from "./Breadcrumbs_BDBzcm61.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CAcg-izT.mjs";
import { t as $$StructuredData } from "./StructuredData_CejtA4Ja.mjs";
import merge from "lodash.merge";
//#region src/components/common/SocialShare.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$SocialShare = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SocialShare;
	const { text, url, class: className = "inline-block" } = Astro.props;
	return renderTemplate`${renderComponent($$result, "aw-social-share", "aw-social-share", {
		"class": className,
		"data-astro-cid-yyc2anlf": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<span class="align-super font-bold text-slate-500 dark:text-slate-400" data-astro-cid-yyc2anlf>Share:</span><button type="button" class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" aria-label="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")} data-astro-cid-yyc2anlf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-x",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300",
		"data-astro-cid-yyc2anlf": true
	})}</button><button type="button" class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" aria-label="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")} data-astro-cid-yyc2anlf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-facebook",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300",
		"data-astro-cid-yyc2anlf": true
	})}</button><button type="button" class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" aria-label="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")} data-astro-cid-yyc2anlf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-linkedin",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300",
		"data-astro-cid-yyc2anlf": true
	})}</button><button type="button" class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" aria-label="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")} data-astro-cid-yyc2anlf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-whatsapp",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300",
		"data-astro-cid-yyc2anlf": true
	})}</button><button type="button" class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" aria-label="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")} data-astro-cid-yyc2anlf>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300",
		"data-astro-cid-yyc2anlf": true
	})}</button>` })}${renderScript($$result, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/common/SocialShare.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/common/SocialShare.astro", void 0);
//#endregion
//#region src/components/blog/SinglePost.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$SinglePost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SinglePost;
	const { post, url } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-8 sm:py-16 lg:py-20 mx-auto"><article><header class="intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"><p>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clock",
		"class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400"
	})}<time${addAttribute(post.publishDate.toISOString(), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time>${post.updateDate && post.updateDate.getTime() !== post.publishDate.getTime() && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}·${" "}<span class="inline-block">Updated <time${addAttribute(post.updateDate.toISOString(), "datetime")}>${getFormattedDate(post.updateDate)}</time></span>` })}`}${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}· ${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:user",
		"class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400"
	})}<span class="inline-block">${post.author}</span>` })}`}${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}·${" "}<a class="hover:underline inline-block"${addAttribute(getPermalink(post.category.slug, "category"), "href")}>${post.category.title}</a>` })}`}${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`&nbsp;· <span>${post.readingTime}</span> min read` })}`}</p></div><h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${post.title}</h1><p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-pretty">${post.excerpt}</p>${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": post.image,
		"class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.imageAlt || "",
		"width": 900,
		"height": 506,
		"format": "webp",
		"loading": "eager",
		"decoding": "async"
	})}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"><div class="border-t dark:border-slate-700"></div></div>`}</header><div class="mx-auto px-6 sm:px-6 max-w-3xl prose lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px] prose-li:my-0">${renderSlot($$result, $$slots["default"])}</div><div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row">${renderComponent($$result, "PostTags", $$Tags, {
		"tags": post.tags,
		"class": "mr-5 rtl:mr-0 rtl:ml-5"
	})}${renderComponent($$result, "SocialShare", $$SocialShare, {
		"url": url,
		"text": post.title,
		"class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600"
	})}</div></article></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/SinglePost.astro", void 0);
//#endregion
//#region src/components/blog/ToBlogLink.astro
var $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
	const { textDirection } = I18N;
	return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20">${renderComponent($$result, "Button", $$Button, {
		"variant": "tertiary",
		"class": "px-3 md:px-3",
		"href": getBlogPermalink()
	}, { "default": ($$result) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1"
	})}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-left",
		"class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1"
	})}`} Back to Blog` })}</div>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/ToBlogLink.astro", void 0);
//#endregion
//#region src/components/blog/GridItem.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GridItem;
	const { post } = Astro.props;
	const image = await findImage(post.image);
	const link = APP_BLOG?.post?.isEnabled ? getPermalink(post.permalink, "post") : "";
	return renderTemplate`${maybeRenderHead($$result)}<article class="mb-6 transition intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">${image && (link ? renderTemplate`<a${addAttribute(link, "href")}>${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "w-full md:h-full object-cover rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}</a>` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "w-full md:h-full object-cover rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}`)}</div><h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">${link ? renderTemplate`<a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}>${post.title}</a>` : post.title}</h3><p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p></article>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/GridItem.astro", void 0);
//#endregion
//#region src/components/blog/Grid.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Grid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Grid;
	const { posts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)}</div>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/Grid.astro", void 0);
//#endregion
//#region src/components/widgets/BlogHighlightedPosts.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogHighlightedPosts;
	const { title = await Astro.slots.render("title"), linkText = "View all posts", linkUrl = getBlogPermalink(), information = await Astro.slots.render("information"), postIds = [], id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const posts = APP_BLOG.isEnabled ? await findPostsByIds(postIds) : [];
	return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": classes?.container,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")}>${linkText} »</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/widgets/BlogHighlightedPosts.astro", void 0);
//#endregion
//#region src/components/blog/RelatedPosts.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RelatedPosts;
	const { post } = Astro.props;
	const relatedPosts = post.tags ? await getRelatedPosts(post, 4) : [];
	return renderTemplate`${APP_BLOG.isRelatedPostsEnabled ? renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, {
		"classes": { container: "pt-0 lg:pt-0 md:pt-0 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" },
		"title": "Related Posts",
		"linkText": "View All Posts",
		"linkUrl": getBlogPermalink(),
		"postIds": relatedPosts.map((post) => post.id)
	})}` : null}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/RelatedPosts.astro", void 0);
//#endregion
//#region src/pages/[...blog]/index.astro
var ____blog__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://agent-tools-sertifvault.vercel.app");
var getStaticPaths = (async () => {
	return await getStaticPathsBlogPost();
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { post } = Astro.props;
	const url = getCanonical(getPermalink(post.permalink, "post"));
	const image = await findImage(post.image);
	const metadata = merge({
		title: post.title,
		description: truncateAtWord(post.excerpt, 155),
		robots: {
			index: blogPostRobots?.index,
			follow: blogPostRobots?.follow
		},
		openGraph: {
			type: "article",
			article: {
				publishedTime: post.publishDate.toISOString(),
				modifiedTime: (post.updateDate ?? post.publishDate).toISOString(),
				...post.author ? { authors: [post.author] } : {},
				...post.category ? { section: post.category.title } : {},
				...post.tags?.length ? { tags: post.tags.map((tag) => tag.title) } : {}
			},
			...image ? { images: [{
				url: image,
				width: image?.width,
				height: image?.height
			}] } : {}
		}
	}, { ...post?.metadata ? {
		...post.metadata,
		canonical: post.metadata?.canonical || url
	} : {} });
	const imageUrl = typeof image === "string" ? image : image?.src;
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.excerpt,
		datePublished: post.publishDate.toISOString(),
		dateModified: (post.updateDate ?? post.publishDate).toISOString(),
		...post.author ? { author: {
			"@type": "Person",
			name: post.author
		} } : {},
		publisher: {
			"@type": "Organization",
			name: SITE?.name
		},
		...imageUrl ? { image: imageUrl.startsWith("http") ? imageUrl : new URL(imageUrl, Astro.site).toString() } : {},
		...post.category ? { articleSection: post.category.title } : {},
		...post.tags?.length ? { keywords: post.tags.map((tag) => tag.title).join(", ") } : {},
		mainEntityOfPage: String(url)
	};
	const breadcrumbs = [
		{
			text: "Home",
			href: getPermalink("/")
		},
		...isBlogListRouteEnabled ? [{
			text: "Blog",
			href: getBlogPermalink()
		}] : [],
		...post.category && isBlogCategoryRouteEnabled ? [{
			text: post.category.title,
			href: getPermalink(post.category.slug, "category")
		}] : [],
		{ text: post.title }
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, {
		"default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, {
			"bar": true,
			"hideCurrent": true,
			"items": breadcrumbs
		})}${renderComponent($$result, "SinglePost", $$SinglePost, {
			"post": {
				...post,
				image
			},
			"url": url
		}, { "default": ($$result) => renderTemplate`${post.Content && renderTemplate`${renderComponent($$result, "post.Content", post.Content, {})}`}` })}${renderComponent($$result, "ToBlogLink", $$ToBlogLink, {})}${renderComponent($$result, "RelatedPosts", $$RelatedPosts, { "post": post })}`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "StructuredData", $$StructuredData, {
			"slot": "head",
			"schema": articleSchema
		})}`
	})}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/index.astro", void 0);
var $$file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/[...blog]/index.astro";
var $$url = "/[...blog]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/index@_@astro
var page = () => ____blog__exports;
//#endregion
export { page };
