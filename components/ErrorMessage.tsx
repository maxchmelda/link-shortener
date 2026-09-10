import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

const ErrorMessage = ({ error } : { error: string | null}) => {
  if (error) return (
    <Alert
      variant="destructive"
      className="fixed top-4 right-4 left-4 w-auto border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-4 duration-300 ease-out sm:top-5 sm:right-5 sm:left-auto sm:w-80"
    >
        <InfoIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
            {error}
        </AlertDescription>
    </Alert>
  )
}

export default ErrorMessage