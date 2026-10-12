import { N as createAstro, S as addAttribute, b as maybeRenderHead, d as renderComponent, i as spreadAttributes, j as unescapeHTML, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
import { a as $$Icon, o as findImage, s as $$ResponsiveImage } from "./PageLayout_CB0t4Pbn.mjs";
import { n as APP_BLOG } from "./_astrowind_config_DvWkjndx.mjs";
import { c as getCanonical, u as getPermalink } from "./permalinks_Ch_pGmTV.mjs";
import { parseUrl, transformUrl } from "unpic";
//#region src/components/common/Image.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Image;
	const { src, alt, width, height, widths, format, layout = "constrained", ...rest } = Astro.props;
	if (alt === void 0 || alt === null) throw new Error(`Image: missing required \`alt\` prop (src=${String(src)}). Pass alt="" explicitly for decorative images.`);
	const toNumber = (v) => typeof v === "string" ? Number.isFinite(Number(v)) ? Number(v) : void 0 : v;
	let w = toNumber(width);
	let h = toNumber(height);
	rest.loading ??= "lazy";
	rest.decoding ??= "async";
	const resolved = await findImage(src);
	const isCdnUrl = typeof resolved === "string" && (resolved.startsWith("http://") || resolved.startsWith("https://")) && parseUrl(resolved) !== void 0;
	if (resolved && typeof resolved === "object" && "width" in resolved && "height" in resolved) {
		const { width: srcW, height: srcH } = resolved;
		if (!w && !h) {
			w = srcW;
			h = srcH;
		} else if (w && !h) h = Math.round(w * srcH / srcW);
		else if (h && !w) w = Math.round(h * srcW / srcH);
	}
	const aspectRatio = w && h ? w / h : void 0;
	const nativeLayout = layout === "cover" ? "none" : layout;
	const localStyle = [layout === "cover" ? "object-fit:cover;width:100%;height:100%" : void 0, rest.style].filter(Boolean).join(";") || void 0;
	const cdnLayoutStyle = () => {
		const decls = [];
		switch (layout) {
			case "fixed":
				if (w) decls.push(`width:${w}px`);
				if (h) decls.push(`height:${h}px`);
				break;
			case "full-width":
				decls.push("width:100%");
				if (aspectRatio) decls.push(`aspect-ratio:${aspectRatio}`);
				break;
			case "cover":
				decls.push("width:100%", "height:100%", "object-fit:cover");
				break;
			case "none": break;
			default:
				decls.push("width:100%");
				if (w) decls.push(`max-width:${w}px`);
				if (aspectRatio) decls.push(`aspect-ratio:${aspectRatio}`);
		}
		return decls.join(";");
	};
	const cdnStyle = isCdnUrl ? [cdnLayoutStyle(), rest.style].filter(Boolean).join(";") || void 0 : void 0;
	const buildCdnUrl = (variantWidth, variantHeight) => transformUrl({
		url: resolved,
		width: variantWidth,
		height: variantHeight,
		fallback: "astro"
	})?.toString();
	const CDN_BREAKPOINTS = [
		320,
		400,
		500,
		640,
		720,
		828,
		960,
		1080,
		1200,
		1440,
		1600,
		1920,
		2048
	];
	const expandWidths = (raw) => {
		if (!Array.isArray(raw) || raw.length === 0) return raw;
		const min = Math.min(...raw);
		const max = Math.max(...raw);
		const extras = CDN_BREAKPOINTS.filter((bp) => bp > min && bp < max);
		return [.../* @__PURE__ */ new Set([...raw, ...extras])].sort((a, b) => a - b);
	};
	const heightFromWidth = (variantWidth) => aspectRatio ? Math.round(variantWidth / aspectRatio) : void 0;
	const cdnSrc = isCdnUrl ? buildCdnUrl(w, h) : void 0;
	const cdnWidths = isCdnUrl ? expandWidths(widths) : void 0;
	const cdnSrcSet = isCdnUrl && cdnWidths?.length ? cdnWidths.map((bw) => `${buildCdnUrl(bw, heightFromWidth(bw))} ${bw}w`).join(", ") : void 0;
	return renderTemplate`${isCdnUrl ? renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(cdnSrc, "src")}${addAttribute(cdnSrcSet, "srcset")}${addAttribute(w, "width")}${addAttribute(h, "height")}${addAttribute(alt, "alt")} crossorigin="anonymous" referrerpolicy="no-referrer"${spreadAttributes(rest)}${addAttribute(cdnStyle, "style")}>` : resolved && renderTemplate`${renderComponent($$result, "AstroImage", $$ResponsiveImage, {
		...rest,
		src: resolved,
		width: w,
		height: h,
		alt,
		widths,
		format,
		layout: nativeLayout,
		style: localStyle
	})}`}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/common/Image.astro", void 0);
//#endregion
//#region src/components/blog/Tags.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Tags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tags;
	const { tags, class: className = "text-sm", title = void 0, isCategory = false } = Astro.props;
	return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${title !== void 0 && renderTemplate`${maybeRenderHead($$result)}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-2 py-0.5 px-2 lowercase font-medium">${!APP_BLOG?.tag?.isEnabled ? tag.title : renderTemplate`<a${addAttribute(getPermalink(tag.slug, isCategory ? "category" : "tag"), "href")} class="text-muted dark:text-slate-300 hover:text-primary dark:hover:text-gray-200">${tag.title}</a>`}</li>`)}</ul>` })}`}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/blog/Tags.astro", void 0);
//#endregion
//#region src/components/common/Breadcrumbs.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const { items, bar = false, hideCurrent = false, class: className = "" } = Astro.props;
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map(({ text, href }, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: text,
			...href ? { item: String(getCanonical(href)) } : {}
		}))
	};
	return renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Breadcrumb"${addAttribute([
		"text-sm text-muted",
		bar ? "max-w-7xl mx-auto w-full px-3 lg:px-6 pt-4 [&>ol]:ml-2 rtl:[&>ol]:ml-0 rtl:[&>ol]:mr-2" : "",
		className
	], "class:list")}><ol class="flex flex-wrap items-center gap-1 list-none">${items.map(({ text, href, icon }, index) => renderTemplate`<li class="flex min-w-0 items-center gap-1">${index > 0 && !(hideCurrent && index === items.length - 1) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "h-3.5 w-3.5 shrink-0 opacity-60 rtl:rotate-180"
	})}`}${href && index < items.length - 1 ? renderTemplate`<a${addAttribute(href, "href")} class="inline-flex items-center hover:text-primary hover:underline"${addAttribute(icon ? text : void 0, "aria-label")}>${icon ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "h-4 w-4"
	})}` : text}</a>` : renderTemplate`<span aria-current="page"${addAttribute(hideCurrent ? "sr-only" : "text-default", "class:list")}>${text}</span>`}</li>`)}</ol></nav><script type="application/ld+json">${unescapeHTML(JSON.stringify(schema))}<\/script>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/common/Breadcrumbs.astro", void 0);
//#endregion
export { $$Tags as n, $$Image as r, $$Breadcrumbs as t };
