"use client";

import React from 'react'
import { Input } from './ui/input'
import { Field, FieldDescription, FieldLabel } from './ui/field'
import { Button } from './ui/button'
import LinkDisplayModal from './LinkDisplayModal';
import shortenUrl from '@/lib/shortenUrl';


const CreateLink = () => {
  const [url, setUrl] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [shortenedUrl, setShortenedUrl] = React.useState<string | null>(null);


  const handleShorten = async () => {
    try {
      const shortened = await shortenUrl(url);
      setShortenedUrl(shortened);
    } catch (err) {
      setError("Couldn't shorten url, please try again.")
    }
  }

  return (
    <Field className='w-100'>
      <div className='flex items-center gap-2'>
        <Input
          type="url" 
          placeholder="enter your link here" 
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleShorten();
            }
          }}
          value={url}
        />
        <Button 
          variant="outline"
          className="text-black cursor-pointer"
          onClick={() => handleShorten()}
        >
          Shorten
        </Button>
      </div>

      <FieldDescription>
        Your original link will be stored on our database
      </FieldDescription>
      
      <LinkDisplayModal 
        url={shortenedUrl}
        open={shortenedUrl !== null}
        onClose={() => setShortenedUrl(null)}
      />
    </Field>
  )
}

export default CreateLink