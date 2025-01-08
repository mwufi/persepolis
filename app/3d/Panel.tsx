'use client';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Download, Maximize2 } from 'lucide-react';
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

    if (tooltip) {
        return (
            <div>
                <Tippy
                    content={tooltip}
                    className="bg-white/10 backdrop-blur-md text-white px-2 py-1 text-sm rounded-md"
                    arrow={false}
                    duration={200}
                    placement="top"
                >
                    <div>{button}</div>
                </Tippy>
            </div>
        );
    }

    return button;
};

export const Panel = ({
    children,
    buttons = []
}: {
    children: React.ReactNode;
    buttons?: PanelButton[];
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const panel = (
        <div className="relative z-10 max-w-4xl mx-auto py-20 px-8 backdrop-blur-md bg-black/15 rounded-xl max-h-[90vh] overflow-y-scroll scrollbar-hide">
            {children}
        </div>
    );

    return (
        <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute right-4 top-4 flex gap-2 z-20"
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
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {panel}
        </div>
    );
}