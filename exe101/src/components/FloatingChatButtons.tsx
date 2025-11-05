import {MessageCircle} from 'lucide-react';
import {useState} from 'react';

export default function FloatingChatButtons() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Chat Options */}
            {isExpanded && (
                <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-300">
                    {/* Zalo */}
                    <a
                        href="https://zalo.me/0123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all px-4 py-3"
                    >
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
              Chat Zalo
            </span>
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12c0 3.54 1.84 6.64 4.62 8.42L5.5 24l4.18-2.09C10.39 22.31 11.18 22.5 12 22.5c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.5 13.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5zm0-3h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5zm0-3h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Messenger */}
                    <a
                        href="https://m.me/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all px-4 py-3"
                    >
            <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
              Chat Messenger
            </span>
                        <div
                            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-7 h-7 text-white"/>
                        </div>
                    </a>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all ${
                    isExpanded ? 'rotate-45' : ''
                }`}
            >
                <MessageCircle className="w-7 h-7 text-white"/>
            </button>
        </div>
    );
}
