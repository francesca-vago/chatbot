import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { model } from './_model';

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model,
        messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}