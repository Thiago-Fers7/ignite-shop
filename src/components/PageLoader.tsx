import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { PageLineLoader } from "../styles/components/pageLoader"

export function PageLoader() {
  const { events } = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    function routeChangeStart() {
      setIsLoading(true)
    }

    function routeChangeComplete() {
      setIsLoading(false)
    }

    events.on('routeChangeStart', routeChangeStart)
    events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      events.off('routeChangeStart', routeChangeStart)
      events.off('routeChangeComplete', routeChangeComplete)
    }
  })

  return (
    <PageLineLoader
      css={{
        $$height: isLoading ? '4px' : '0',
      }} />
  )
}