import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Button } from './ui/button'
import { MdContentCopy } from 'react-icons/md'

type Props = {
    url: string | null;
    open: boolean;
    onClose: () => void;
}


const LinkDisplayModal = ({ url, open, onClose } : Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Your link is ready!</DialogTitle>
                <DialogDescription>Copy the link, so you don't lose it.</DialogDescription>
            </DialogHeader>

            <div className='flex items-center justify-between gap-2'>
                <span className='w-full truncate rounded-xl border border-white/10 bg-muted/50 px-3 py-2 text-start font-mono text-sm cursor-text'>{url ?? ""}</span>
                <Button
                    className="flex shrink-0 items-center gap-2 justify-center rounded-xl px-3 py-2 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                    onClick={() => navigator.clipboard.writeText(url ?? "")}
                >
                    <MdContentCopy />
                    <span>Copy</span>
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default LinkDisplayModal