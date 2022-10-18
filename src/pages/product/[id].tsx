import { useRouter } from "next/router"

export default function Product() {
  const router = useRouter()

  console.log(router.query.id)

  return (
    <h1>Products</h1>
  )
}