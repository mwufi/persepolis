'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Download, Maximize2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type PanelButton = {
    icon: React.ReactNode;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    tooltip?: string;
    onClick?: () => void;
}

export const PanelButton = ({ icon, tooltip, onClick }: Omit<PanelButton, 'position'>) => {
    const button = (
        <button
            onClick={onClick}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition-colors"
        >
            {icon}
        </button>
    );
    return button;
};

export const Panel = ({
    children,
    title,
    collapsed = false
}: {
    children: React.ReactNode;
    title: string;
    collapsed?: boolean;
    distance?: number;
}) => {
    const [isTopBarHovered, setIsTopBarHovered] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    const [isMaximized, setIsMaximized] = useState(false);

    const maxWidth = isCollapsed ? "400px" : (isMaximized ? "1200px" : "800px");
    const height = isCollapsed ? "4rem" : (isMaximized ? "100%" : "calc(100vh - 100px)");

    return (
        <motion.div
            className="relative z-10 w-full mx-auto backdrop-blur-md bg-black/15 rounded-xl text-white font-afacad text-lg"
            animate={{
                maxWidth: maxWidth,
                height: height,
                transition: { duration: 0.3 }
            }}
            initial={{ maxWidth: maxWidth, height: height }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-16 z-20 group"
                onMouseEnter={() => setIsTopBarHovered(true)}
                onMouseLeave={() => setIsTopBarHovered(false)}
            >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-4 z-20">
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <PanelButton
                            icon={<ChevronDown
                                className="w-5 h-5 transition-transform"
                                style={{
                                    transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'
                                }}
                            />}
                            onClick={() => {
                                if (isMaximized) setIsMaximized(false);
                                setIsCollapsed(x => !x);
                            }}
                        />
                    </motion.div>
                    <AnimatePresence>
                        {isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="text-xl font-semibold px-4 py-1.5"
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {isTopBarHovered && !isCollapsed && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 z-20">
                            <motion.div
                                className="flex gap-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <PanelButton
                                    icon={<Camera className="w-5 h-5" />}
                                    tooltip="Reset Camera"
                                />
                                <PanelButton
                                    icon={<Download className="w-5 h-5" />}
                                    tooltip="Download"
                                />
                                <PanelButton
                                    icon={<Maximize2 className="w-5 h-5" />}
                                    tooltip="Toggle Fullscreen"
                                    onClick={() => setIsMaximized(!isMaximized)}
                                />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <motion.div
                className="h-full overflow-y-auto scrollbar-hide py-20 px-[5%] lg:px-[10%]"
                animate={{
                    opacity: isCollapsed ? 0 : 1,
                    transition: { duration: 0.2 }
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}