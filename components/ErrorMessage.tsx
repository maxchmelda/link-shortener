import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

const ErrorMessage = ({ error } : { error: string | null}) => {
  
  
  if (error) return (
    <Alert className="fixed top-5 right-5 max-w-80">
        <InfoIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
            {error}
        </AlertDescription>
    </Alert>
  )
}

export default ErrorMessage