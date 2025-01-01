'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import PostHeader from './PostHeader'
import Comments from './Comments'

interface PostModalProps {
  isOpen: boolean
  postId: string
  onClose: () => void
}

export default function PostModal({ isOpen, postId, onClose }: PostModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] sm:h-[90vh] p-0 border-0 md:rounded-none">
        {/* Hidden title for screen readers */}
        <DialogTitle className="sr-only">Post {postId}</DialogTitle>

        {/* Custom close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-gray-100/80 p-2 hover:bg-gray-200/80 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4 text-gray-700" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Image */}
          <div className="relative h-[50vh] md:h-auto md:flex-1 bg-black">
            <Image
              src={`/${postId}.png`}
              alt={`Post ${postId}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Header and Comments */}
          <div className="w-full md:w-[350px] flex flex-col bg-white">
            <PostHeader username="almostzenbut_no" />
            <div className="flex-1 overflow-y-auto py-4 px-2">
              <Comments postId={postId} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
