import { wrapLanguageModel } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { devToolsMiddleware } from "@ai-sdk/devtools";

export const model = wrapLanguageModel({
    model: gateway("openai/o4-mini"),
    middleware: devToolsMiddleware(),
});