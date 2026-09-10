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
                <span className='py-1 w-full text-start px-2 border rounded-lg cursor-text'>{url ?? ""}</span>
                <Button
                    className="flex items-center gap-2 justify-center px-2 py-1 cursor-pointer"
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