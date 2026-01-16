"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import AIChatBox from "./AIChatBox";
import { Popover, PopoverTrigger } from "../ui/popover";

export default function AIChatButton() {
	const [chatBoxOpen, setChatBoxOpen] = useState(false);

	return (
		<Popover open={chatBoxOpen} onOpenChange={setChatBoxOpen}>
			<PopoverTrigger asChild>
				<Button
					size="icon-lg"
					variant="default"
					className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
				>
					<Bot className="animate-pulse" />
				</Button>
			</PopoverTrigger>

			<AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
		</Popover>
	);
}
