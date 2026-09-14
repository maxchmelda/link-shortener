"use client";

import React from 'react'
import { Input } from './ui/input'
import { Field, FieldDescription, FieldLabel } from './ui/field'
import { Button } from './ui/button'
import LinkDisplayModal from './LinkDisplayModal';
import shortenUrl from '@/lib/shortenUrl';
import isUrlValid from '@/lib/isUrlValid';
import ErrorMessage from './ErrorMessage';
import { Spinner } from './ui/spinner';


const CreateLink = () => {
  const [url, setUrl] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [shortenedUrl, setShortenedUrl] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000)
    }
  }, [error])

  const handleShorten = async () => {
    try {
      setLoading(true);
      if (!isUrlValid(url)) {
        setError("Please enter a valid link!");
        return;
      }
      const shortened = await shortenUrl(url);
      setShortenedUrl(shortened);
    } catch (err) {
      setError("Couldn't shorten url, please try again.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Field className='w-full max-w-md gap-5 rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl shadow-black/40 backdrop-blur-xl animate-in fade-in-0 slide-in-from-bottom-4 duration-700 ease-out'>
      <div className='flex items-center gap-1'>
        <Input
          id="url"
          type="url"
          placeholder="https://youtube.com/isdfkshbfhs..."
          className="h-11 rounded-xl text-base"
          onChange={(e) => {
            setUrl(e.target.value);
            setError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleShorten();
            }
          }}
          value={url}
        />
        <Button
          disabled={loading}
          variant="default"
          className=" h-11 shrink-0 w-20 rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
          onClick={() => handleShorten()}
        >
          {
            loading ? (
              <Spinner />
            ) : (
              "Shorten"
            )
          }
        </Button>
      </div>
      
      <LinkDisplayModal
        url={shortenedUrl}
        open={shortenedUrl !== null}
        onClose={() => setShortenedUrl(null)}
      />
    </Field>

    <ErrorMessage error={error} />
    </>
  )
}

export default CreateLink