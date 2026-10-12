import { n as createVNode, p as Fragment, r as __astro_tag_component__ } from "./jsx-runtime_C3h_5K6n.mjs";
//#region src/data/post/astrowind-template-in-depth.mdx
var frontmatter = {
	"publishDate": "2026-07-27T00:00:00.000Z",
	"title": "How the AstroWind Astro Template Works Under the Hood",
	"excerpt": "How the AstroWind template works internally. The config integration, permalinks and base path, the blog pipeline, image handling, metadata and the build.",
	"image": "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1651&q=80",
	"imageAlt": "The inside of a mechanical watch movement",
	"category": "Documentation",
	"tags": [
		"astro",
		"tailwind css",
		"front-end"
	],
	"readingTime": 6
};
function getHeadings() {
	return [
		{
			"depth": 2,
			"slug": "the-integration-and-astrowindconfig",
			"text": "The integration and astrowind:config"
		},
		{
			"depth": 2,
			"slug": "permalinks-and-the-base-path",
			"text": "Permalinks and the base path"
		},
		{
			"depth": 2,
			"slug": "the-blog-pipeline-from-markdown-to-pages",
			"text": "The blog pipeline: from Markdown to pages"
		},
		{
			"depth": 2,
			"slug": "images-how-astro-optimizes-local-and-remote-files",
			"text": "Images: how Astro optimizes local and remote files"
		},
		{
			"depth": 2,
			"slug": "metadata-how-titles-canonicals-and-open-graph-are-built",
			"text": "Metadata: how titles, canonicals and Open Graph are built"
		},
		{
			"depth": 2,
			"slug": "the-layout-and-the-client",
			"text": "The layout and the client"
		},
		{
			"depth": 2,
			"slug": "styling-tailwind-v4-tokens-and-customstylesastro",
			"text": "Styling: Tailwind v4 tokens and CustomStyles.astro"
		},
		{
			"depth": 2,
			"slug": "the-build-what-astro-emits",
			"text": "The build: what Astro emits"
		}
	];
}
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: [
			"You can use AstroWind for months without opening anything outside ",
			createVNode(_components.code, { children: "src/pages" }),
			", ",
			createVNode(_components.code, { children: "src/data/post" }),
			" and ",
			createVNode(_components.code, { children: "config.yaml" }),
			". This post is for the day you want to know why something works the way it does: you are debugging a URL, adding a content source, or deciding how far to trust the template before building on it. It follows a request from configuration to the built HTML. If you are still setting up, the ",
			createVNode(_components.a, {
				href: "/get-started-website-with-astro-tailwind-css",
				children: "getting started guide"
			}),
			" comes first."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "the-integration-and-astrowindconfig",
			children: ["The integration and ", createVNode(_components.code, { children: "astrowind:config" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "vendor/integration/index.ts" }),
			" is a small Astro integration registered in ",
			createVNode(_components.code, { children: "astro.config.ts" }),
			". When the config is set up it reads ",
			createVNode(_components.code, { children: "src/config.yaml" }),
			", normalizes it and exposes the result as a virtual module:"
		] }),
		"\n",
		createVNode(_components.pre, {
			class: "astro-code astro-code-themes github-light github-dark",
			style: {
				backgroundColor: "#fff",
				"--shiki-dark-bg": "#24292e",
				color: "#24292e",
				"--shiki-dark": "#e1e4e8",
				overflowX: "auto"
			},
			tabindex: "0",
			"data-language": "ts",
			children: createVNode(_components.code, { children: createVNode(_components.span, {
				class: "line",
				children: [
					createVNode(_components.span, {
						style: {
							color: "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "import"
					}),
					createVNode(_components.span, {
						style: {
							color: "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " { SITE, METADATA, APP_BLOG, I18N, UI } "
					}),
					createVNode(_components.span, {
						style: {
							color: "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "from"
					}),
					createVNode(_components.span, {
						style: {
							color: "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " 'astrowind:config'"
					}),
					createVNode(_components.span, {
						style: {
							color: "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ";"
					})
				]
			}) })
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Any component can import these constants; there is no runtime lookup and no prop drilling. The same integration pushes ",
			createVNode(_components.code, { children: "site" }),
			", ",
			createVNode(_components.code, { children: "base" }),
			" and ",
			createVNode(_components.code, { children: "trailingSlash" }),
			" from the YAML into Astro’s own config, so the sitemap, the RSS feed and canonical URLs all agree with one source, and after the build it points ",
			createVNode(_components.code, { children: "robots.txt" }),
			" at the generated sitemap."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "permalinks-and-the-base-path",
			children: "Permalinks and the base path"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Every internal link in the template goes through ",
			createVNode(_components.code, { children: "src/utils/permalinks.ts" }),
			". ",
			createVNode(_components.code, { children: "getPermalink(slug, type)" }),
			" builds the path for a page, a post, a category, a tag or an asset, prefixes the ",
			createVNode(_components.code, { children: "base" }),
			" from the config and applies the ",
			createVNode(_components.code, { children: "trailingSlash" }),
			" policy. This is what makes deploying under a sub-folder mostly a configuration change: set ",
			createVNode(_components.code, { children: "base: '/handbook'" }),
			" and every link, image and feed moves with it. The ",
			createVNode(_components.code, { children: "deploy-with-base-path" }),
			" skill covers the few values that must not go through ",
			createVNode(_components.code, { children: "getPermalink()" }),
			" twice."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Post URLs come from the ",
			createVNode(_components.code, { children: "apps.blog.post.permalink" }),
			" pattern in ",
			createVNode(_components.code, { children: "config.yaml" }),
			". The default ",
			createVNode(_components.code, { children: "/%slug%" }),
			" puts posts at the root; ",
			createVNode(_components.code, { children: "/blog/%year%/%month%/%slug%" }),
			" or ",
			createVNode(_components.code, { children: "/%category%/%slug%" }),
			" work too, because the pattern is expanded per post when the collection is loaded. The list, category and tag paths are configurable in the same block, and each route can be disabled or marked ",
			createVNode(_components.code, { children: "noindex" }),
			" individually."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "the-blog-pipeline-from-markdown-to-pages",
			children: "The blog pipeline: from Markdown to pages"
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Posts are an Astro content collection defined in ",
			createVNode(_components.code, { children: "src/content.config.ts" }),
			": a ",
			createVNode(_components.code, { children: "glob" }),
			" loader over ",
			createVNode(_components.code, { children: "src/data/post/*.md" }),
			" and ",
			createVNode(_components.code, { children: "*.mdx" }),
			" with a schema for the front matter."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "src/utils/blog.ts" }),
			" loads the collection once per build, normalizes each entry (slugified category and tags, the permalink from the pattern above, the reading time computed during Markdown processing), sorts by date and drops drafts. The route files in ",
			createVNode(_components.code, { children: "src/pages/[...blog]/" }),
			" call helpers from the same module to generate the list with pagination, every post, and the category and tag pages. Related posts are chosen by shared tags and category. The blog is always prerendered."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Markdown goes through two small plugins declared in ",
			createVNode(_components.code, { children: "astro.config.ts" }),
			": one adds the reading time to the front matter, the other wraps tables so they scroll horizontally on narrow screens instead of breaking the layout. Code blocks are highlighted by Shiki with two themes, one for light and one for dark mode."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "images-how-astro-optimizes-local-and-remote-files",
			children: "Images: how Astro optimizes local and remote files"
		}),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "src/components/common/Image.astro" }), " is the one image component used everywhere, and it takes two paths depending on the source:"] }),
		"\n",
		createVNode(_components.ul, { children: [
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Local images" }),
				" (",
				createVNode(_components.code, { children: "~/assets/images/..." }),
				" or an ESM import) are handed to Astro’s ",
				createVNode(_components.code, { children: "<Image />" }),
				" from ",
				createVNode(_components.code, { children: "astro:assets" }),
				". Sharp resizes them at build time into the ",
				createVNode(_components.code, { children: "widths" }),
				" you request, converts them to WebP (the template’s default; ",
				createVNode(_components.code, { children: "format" }),
				" can ask for AVIF) and writes them to ",
				createVNode(_components.code, { children: "dist/_astro/" }),
				" with hashed names."
			] }),
			"\n",
			createVNode(_components.li, { children: [
				createVNode(_components.strong, { children: "Remote images" }),
				" on a known CDN (Unsplash, Cloudinary, Imgix and the other providers ",
				createVNode(_components.code, { children: "unpic" }),
				" understands) are not downloaded. The component rewrites the URL with the CDN’s own resizing parameters and builds a ",
				createVNode(_components.code, { children: "srcset" }),
				" from them, so the browser fetches the right size straight from the CDN."
			] }),
			"\n"
		] }),
		"\n",
		createVNode(_components.p, { children: [createVNode(_components.code, { children: "src/utils/images.ts" }), " resolves string paths to imported assets and prepares the Open Graph images, which need absolute URLs and fixed dimensions."] }),
		"\n",
		createVNode(_components.h2, {
			id: "metadata-how-titles-canonicals-and-open-graph-are-built",
			children: "Metadata: how titles, canonicals and Open Graph are built"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "src/components/common/Metadata.astro" }),
			" merges three layers: the defaults from ",
			createVNode(_components.code, { children: "config.yaml" }),
			", the ",
			createVNode(_components.code, { children: "metadata" }),
			" object a page passes to its layout, and for posts the front matter. The merged result goes to ",
			createVNode(_components.code, { children: "astro-seo" }),
			", which prints the title (with the ",
			createVNode(_components.code, { children: "%s — Site" }),
			" template), description, robots directives, canonical link, Open Graph and Twitter tags; posts add ",
			createVNode(_components.code, { children: "article:published_time" }),
			", ",
			createVNode(_components.code, { children: "article:modified_time" }),
			", section and tags. ",
			createVNode(_components.code, { children: "getCanonical()" }),
			" derives the canonical URL from the page path, so pages should not hardcode one unless the content also lives elsewhere."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"Structured data comes in three flavors: every post emits ",
			createVNode(_components.code, { children: "BlogPosting" }),
			" and ",
			createVNode(_components.code, { children: "BreadcrumbList" }),
			" JSON-LD; the ",
			createVNode(_components.code, { children: "FAQs" }),
			" widget emits ",
			createVNode(_components.code, { children: "FAQPage" }),
			" when given ",
			createVNode(_components.code, { children: "schema" }),
			"; anything else (Organization, Product, HowTo) is a small script in the page, placed through the layout’s ",
			createVNode(_components.code, { children: "head" }),
			" slot as described in ",
			createVNode(_components.code, { children: ".agents/skills/add-structured-data.md" }),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "the-layout-and-the-client",
			children: "The layout and the client"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "src/layouts/Layout.astro" }),
			" is the HTML shell. In order: the fonts (self-hosted through Astro’s Fonts API), the palette from ",
			createVNode(_components.code, { children: "CustomStyles.astro" }),
			", an inline script that sets the ",
			createVNode(_components.code, { children: "dark" }),
			" class before the first paint from ",
			createVNode(_components.code, { children: "localStorage" }),
			" or the ",
			createVNode(_components.code, { children: "ui.theme" }),
			" setting, the metadata, site verification and analytics (Google Analytics, off until you set an id; a Partytown integration is wired up but disabled by default), and ",
			createVNode(_components.code, { children: "<ClientRouter />" }),
			" for view transitions."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"The template ships very little JavaScript, and what it ships is written as custom elements so it survives client-side navigation without manual re-initialization. The header keeps its state between pages and is swapped when a page brings its own menu; the reveal-on-scroll animations behind the ",
			createVNode(_components.code, { children: "intersect-*" }),
			" utility classes are one small observer; each interactive widget (tabs, pricing toggle, gallery lightbox, countdown, video, sticky call to action) ships as its own custom element of a few dozen lines, with a static fallback when scripts do not run. The FAQ accordion needs no script at all: it is a native ",
			createVNode(_components.code, { children: "<details>" }),
			" group."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "styling-tailwind-v4-tokens-and-customstylesastro",
			children: ["Styling: Tailwind v4 tokens and ", createVNode(_components.code, { children: "CustomStyles.astro" })]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"Tailwind CSS 4 is configured in CSS, not JavaScript: ",
			createVNode(_components.code, { children: "src/assets/styles/tailwind.css" }),
			" re-exports the ",
			createVNode(_components.code, { children: "--aw-*" }),
			" palette from ",
			createVNode(_components.code, { children: "CustomStyles.astro" }),
			" as Tailwind tokens, declares the ",
			createVNode(_components.code, { children: "dark" }),
			" and ",
			createVNode(_components.code, { children: "intersect" }),
			" variants, the button utilities and the typography plugin for post content. ",
			createVNode(_components.code, { children: "shadcn.css" }),
			", imported from it, maps the same variables to the token names shadcn/ui components expect. How to change the palette, the fonts and the logo is the subject of the ",
			createVNode(_components.a, {
				href: "/how-to-customize-astrowind-to-your-brand",
				children: "customization guide"
			}),
			"."
		] }),
		"\n",
		createVNode(_components.h2, {
			id: "the-build-what-astro-emits",
			children: "The build: what Astro emits"
		}),
		"\n",
		createVNode(_components.p, { children: [
			createVNode(_components.code, { children: "npm run build" }),
			" runs Astro’s static build. The sitemap integration writes ",
			createVNode(_components.code, { children: "sitemap-index.xml" }),
			" with every page (search engines decide what to index from each page’s robots meta tag); ",
			createVNode(_components.code, { children: "rss.xml.ts" }),
			" writes the feed from the same post list the blog uses; the HTML, CSS and JavaScript are minified; the integration updates ",
			createVNode(_components.code, { children: "robots.txt" }),
			". The result in ",
			createVNode(_components.code, { children: "dist/" }),
			" is plain files, with no server component and no environment variables required."
		] }),
		"\n",
		createVNode(_components.p, { children: [
			"If you want to change how any of this works, the places to look are ",
			createVNode(_components.code, { children: "vendor/integration/" }),
			" for configuration, ",
			createVNode(_components.code, { children: "src/utils/" }),
			" for permalinks, posts and images, and ",
			createVNode(_components.code, { children: "src/layouts/Layout.astro" }),
			" for what every page loads. Everything else is a widget, and an ",
			createVNode(_components.a, {
				href: "/build-websites-with-ai",
				children: "AI coding assistant"
			}),
			" that has read ",
			createVNode(_components.code, { children: "AGENTS.md" }),
			" knows this map too."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, {
		...props,
		children: createVNode(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var url = "src/data/post/astrowind-template-in-depth.mdx";
var file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/data/post/astrowind-template-in-depth.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/data/post/astrowind-template-in-depth.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
