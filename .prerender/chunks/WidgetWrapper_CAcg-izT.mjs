import { N as createAstro, S as addAttribute, b as maybeRenderHead, d as renderComponent, g as renderSlot, j as unescapeHTML, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
import { twMerge } from "tailwind-merge";
//#region src/components/ui/WidgetWrapper.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WidgetWrapper;
	const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WrapperTag", as, {
		"class": "relative not-prose scroll-mt-[72px]",
		...id ? { id } : {}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">${renderSlot($$result, $$slots["bg"], renderTemplate`${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}></div>`}`)}</div><div${addAttribute([twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", containerClass), { dark: isDark }], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>` })}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/ui/WidgetWrapper.astro", void 0);
//#endregion
export { $$WidgetWrapper as t };
