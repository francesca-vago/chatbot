import { streamText, UIMessage, convertToModelMessages, stepCountIs } from 'ai';
import { model } from './_model';
import { tools } from './_tools';

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model,
        tools,
        messages: await convertToModelMessages(messages),
        stopWhen: stepCountIs(5),
    });

    return result.toUIMessageStreamResponse();
}