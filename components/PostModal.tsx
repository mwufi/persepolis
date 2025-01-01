'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
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
      <DialogContent className="max-w-4xl h-[90vh] p-0">
        <div className="flex h-full">
          {/* Left side - Image */}
          <div className="relative flex-1 bg-black">
            <Image
              src={`/${postId}.png`}
              alt={`Post ${postId}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Header and Comments */}
          <div className="w-[350px] flex flex-col bg-white">
            <div className="p-4 border-b">
              <PostHeader username="almostzenbut_no" />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <Comments postId={postId} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
