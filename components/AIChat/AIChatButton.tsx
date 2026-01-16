"use client";

import { Bot } from "lucide-react";
import { Fragment, useState } from "react";
import { Button } from "../ui/button";
import AIChatBox from "./AIChatBox";
import { Popover, PopoverTrigger } from "../ui/popover";

export default function AIChatButton() {
	const [chatBoxOpen, setChatBoxOpen] = useState(false);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					onClick={() => setChatBoxOpen(!chatBoxOpen)}
					size="icon-lg"
					variant="default"
					className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
				>
					<Bot className="animate-pulse" />
				</Button>
			</PopoverTrigger>

			<AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
		</Popover>
	);
}
