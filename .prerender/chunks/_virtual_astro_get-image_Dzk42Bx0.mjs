import { t as createConsoleLogger } from "./console_BS3552R5.mjs";
import { t as level } from "./_virtual_astro_logger_BK0_OSVK.mjs";
import { n as getImage$1 } from "./assets_DDdXnQJV.mjs";
//#region \0virtual:astro:get-image
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": ["cdn.pixabay.com", "images.unsplash.com"],
	"remotePatterns": [],
	"responsiveStyles": true
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: void 0,
	enumerable: false,
	configurable: true
});
var _astroLogger = createConsoleLogger({ level });
var _runtimeLogger = {
	info: (message) => _astroLogger.info(null, message),
	warn: (message) => _astroLogger.warn(null, message),
	error: (message) => _astroLogger.error(null, message)
};
var getImage = async (options) => await getImage$1(options, imageConfig, _runtimeLogger);
//#endregion
export { getImage };
