import { tool, ToolSet } from "ai";
import { z } from "zod";

export const tools: ToolSet = {
    weather: tool({
        description: "Get the weather for a specific location in Celsius",
        inputSchema: z.object({
            location: z.string().describe("The location to get the weather for"),
        }),
        execute: async ({ location }) => {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`
            );
            const data = await response.json();
            return data.current_weather.temperature;
        },
    })
};