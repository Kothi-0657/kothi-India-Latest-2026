(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/utility/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverBorderGradient",
    ()=>HoverBorderGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/utility/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HoverBorderGradient(param) {
    let { children, containerClassName, className, as: Tag = "button", duration = 1, clockwise = true, ...props } = param;
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("TOP");
    const rotateDirection = (currentDirection)=>{
        const directions = [
            "TOP",
            "LEFT",
            "BOTTOM",
            "RIGHT"
        ];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise ? (currentIndex - 1 + directions.length) % directions.length : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };
    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
    };
    const highlight = "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HoverBorderGradient.useEffect": ()=>{
            if (!hovered) {
                const interval = setInterval({
                    "HoverBorderGradient.useEffect.interval": ()=>{
                        setDirection({
                            "HoverBorderGradient.useEffect.interval": (prevState)=>rotateDirection(prevState)
                        }["HoverBorderGradient.useEffect.interval"]);
                    }
                }["HoverBorderGradient.useEffect.interval"], duration * 1000);
                return ({
                    "HoverBorderGradient.useEffect": ()=>clearInterval(interval)
                })["HoverBorderGradient.useEffect"];
            }
        }
    }["HoverBorderGradient.useEffect"], [
        hovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        onMouseEnter: (event)=>{
            setHovered(true);
        },
        onMouseLeave: ()=>setHovered(false),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500  items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit", containerClassName),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$utility$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"),
                style: {
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                },
                initial: {
                    background: movingMap[direction]
                },
                animate: {
                    background: hovered ? [
                        movingMap[direction],
                        highlight
                    ] : movingMap[direction]
                },
                transition: {
                    ease: "linear",
                    duration: duration !== null && duration !== void 0 ? duration : 1
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
            }, void 0, false, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(HoverBorderGradient, "Mvwako3rp7H3hXfwoUvEftbWRo4=");
_c = HoverBorderGradient;
var _c;
__turbopack_context__.k.register(_c, "HoverBorderGradient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/ui/hover-border-gradient.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero1() {
    _s();
    const [currentWordIndex, setCurrentWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const serviceKeywords = [
        "Maintenance",
        "Renovation",
        "Repairs",
        "Interiors",
        "Landscaping",
        "Plumbing",
        "Electrical"
    ];
    // ✅ Word rotation effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero1.useEffect": ()=>{
            const interval = setInterval({
                "Hero1.useEffect.interval": ()=>{
                    setCurrentWordIndex({
                        "Hero1.useEffect.interval": (prevIndex)=>(prevIndex + 1) % serviceKeywords.length
                    }["Hero1.useEffect.interval"]);
                }
            }["Hero1.useEffect.interval"], 4000);
            return ({
                "Hero1.useEffect": ()=>clearInterval(interval)
            })["Hero1.useEffect"];
        }
    }["Hero1.useEffect"], []);
    // ✅ Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        try {
            const form = new FormData();
            form.append("name", formData.name);
            form.append("phone", formData.phone);
            form.append("email", formData.email);
            form.append("address", formData.address);
            const response = await fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
                method: "POST",
                body: form
            });
            if (response.ok) {
                setSuccessMessage("✅ Thank you! We will contact you shortly.");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    address: ""
                });
            } else {
                setSuccessMessage("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("❌ Failed to connect. Try again later.");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-screen w-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: "/herovideo.mp4",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    className: "absolute top-0 left-0 w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"
                }, void 0, false, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex h-screen w-full items-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full lg:w-2/3 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight text-white",
                                    children: [
                                        "Professional",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "textcolor2dark font-semibold",
                                            children: serviceKeywords[currentWordIndex]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "Services for Your Property"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl",
                                    children: "From routine maintenance to complete renovations, we help clients keep their residential and commercial properties in top condition. Trusted teams, transparent process, and guaranteed quality."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverBorderGradient"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Book a Service"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex gap-6 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold",
                                                    children: "483+"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-300",
                                                    children: "Clients Served"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold",
                                                    children: "1297+"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-300",
                                                    children: "Properties Renovated"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold",
                                                    children: "24/7"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-300",
                                                    children: "Support Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block w-[400px] bg-white rounded-lg shadow-lg p-6 ml-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-4 textcolor2dark",
                                    children: "Request a Callback"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mb-4",
                                    children: "Fill the form below and our team will contact you."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-3",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Your Name",
                                            value: formData.name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                }),
                                            className: "w-full p-3 border rounded-lg backgroundcolorfocus",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            placeholder: "Your Phone Number",
                                            value: formData.phone,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    phone: e.target.value
                                                }),
                                            className: "w-full p-3 border rounded-lg backgroundcolorfocus",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Your Email (optional)",
                                            value: formData.email,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                }),
                                            className: "w-full p-3 border rounded-lg backgroundcolorfocus"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Your address",
                                            value: formData.address,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    address: e.target.value
                                                }),
                                            className: "w-full p-3 border rounded-lg backgroundcolorfocus",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full backgroundcolor2 text-white font-semibold py-3 rounded-lg backgroundcolor2hover transition-all",
                                            children: loading ? "Submitting..." : "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm text-center",
                                    children: successMessage
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/Hero/hero1.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Hero1, "XgL8L1m8ItCIx0CcNppzgb1Mzss=");
_c = Hero1;
const __TURBOPACK__default__export__ = Hero1;
var _c;
__turbopack_context__.k.register(_c, "Hero1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteMovingTestimonials",
    ()=>InfiniteMovingTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Marketing Director at Sunrise Textiles",
        message: "KothiIndia’s team is professional and responsive. Their work improved our online presence and delivered measurable results.",
        avatar: "/avatar1.png"
    },
    {
        name: "Neha Kapoor",
        role: "Operations Manager at BrightEdge Solutions",
        message: "The team understands our business needs perfectly. Their attention to detail and reliability make them stand out every time.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Rahul S",
        role: "Small Business Owner",
        message: "Working with KothiIndia is seamless and efficient. They provide high-quality service with minimal hassle and great results.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
    },
    {
        name: "Priya Sharma",
        role: "Startup Founder",
        message: "KothiIndia is proactive, creative, and easy to work with. Their solutions are practical, impactful, and delivered on time.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    },
    {
        name: "Amit Verma",
        role: "Product Manager",
        message: "The team’s professionalism and responsiveness made a real difference. They consistently exceed expectations in every project.",
        avatar: "/avatar2.png"
    },
    {
        name: "Sneha Reddy",
        role: "Operations Lead",
        message: "Reliable, efficient, and detail-oriented. KothiIndia provides high-quality results and truly understands our requirements.",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
    }
];
const InfiniteMovingTestimonials = (param)=>{
    let { interval = 4000 } = param;
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [chunkSize, setChunkSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMovingTestimonials.useEffect": ()=>{
            const updateChunkSize = {
                "InfiniteMovingTestimonials.useEffect.updateChunkSize": ()=>{
                    const width = window.innerWidth;
                    if (width < 640) setChunkSize(1);
                    else if (width < 1024) setChunkSize(2);
                    else setChunkSize(3);
                }
            }["InfiniteMovingTestimonials.useEffect.updateChunkSize"];
            updateChunkSize();
            window.addEventListener("resize", updateChunkSize);
            return ({
                "InfiniteMovingTestimonials.useEffect": ()=>window.removeEventListener("resize", updateChunkSize)
            })["InfiniteMovingTestimonials.useEffect"];
        }
    }["InfiniteMovingTestimonials.useEffect"], []);
    const slides = [];
    for(let i = 0; i < testimonials.length; i += chunkSize){
        slides.push(testimonials.slice(i, i + chunkSize));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMovingTestimonials.useEffect": ()=>{
            const timer = setInterval({
                "InfiniteMovingTestimonials.useEffect.timer": ()=>{
                    setCurrentIndex({
                        "InfiniteMovingTestimonials.useEffect.timer": (prev)=>(prev + 1) % slides.length
                    }["InfiniteMovingTestimonials.useEffect.timer"]);
                }
            }["InfiniteMovingTestimonials.useEffect.timer"], interval);
            return ({
                "InfiniteMovingTestimonials.useEffect": ()=>clearInterval(timer)
            })["InfiniteMovingTestimonials.useEffect"];
        }
    }["InfiniteMovingTestimonials.useEffect"], [
        slides,
        interval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex transition-transform duration-700 ease-in-out",
            style: {
                transform: "translateX(-".concat(currentIndex * 100, "%)")
            },
            children: slides.map((slide, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-full flex gap-4",
                    children: slide.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-2xl  border-[2px] border-[#b04400] flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#331b0d] italic mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuoteLeft"], {
                                                className: "text-[#b04400]"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                                lineNumber: 96,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            t.message,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuoteRight"], {
                                                className: "text-[#b04400]"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                                lineNumber: 96,
                                                columnNumber: 114
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[#b04400]",
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#b04400]",
                                        children: t.role
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, idx, false, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, slideIndex, false, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/testomonial/Testomonial.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InfiniteMovingTestimonials, "SDekRGyYi2tEQnPRbOUIBnVxRHQ=");
_c = InfiniteMovingTestimonials;
var _c;
__turbopack_context__.k.register(_c, "InfiniteMovingTestimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Kothiwebsite_kothiindia2026_my-app_src_app_01917e5f._.js.map