import { N as createAstro, j as unescapeHTML, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
//#region src/components/common/StructuredData.astro
createAstro("https://agent-tools-sertifvault.vercel.app");
var $$StructuredData = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StructuredData;
	const { schema } = Astro.props;
	return renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(schema))}<\/script>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/common/StructuredData.astro", void 0);
//#endregion
export { $$StructuredData as t };
