import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

// Mock produkty
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Najnovší iPhone s výkonným čipom a ProMotion displejom.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "Vlajková loď Samsungu s vynikajúcim fotoaparátom.",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    description: "Čistý Android zážitok a špičkový fotoaparát.",
  },
  {
    id: 4,
    name: "Sony Xperia 1 V",
    description: "Smartfón s profesionálnymi funkciami pre fotografov.",
  },
  {
    id: 5,
    name: "OnePlus 11",
    description: "Výkonný telefón s rýchlym nabíjaním a skvelým dizajnom.",
  },
  {
    id: 6,
    name: "Xiaomi 13 Pro",
    description: "Vlajkový model Xiaomi s Leica fotoaparátom.",
  },
  {
    id: 7,
    name: "Huawei Mate 60 Pro",
    description: "Inovatívny dizajn a výkonné funkcie od Huawei.",
  },
  {
    id: 8,
    name: "Asus ROG Phone 7",
    description: "Herný smartfón s vysokým výkonom a RGB osvetlením.",
  },
  {
    id: 9,
    name: "Nothing Phone (2)",
    description: "Minimalistický dizajn s unikátnym LED rozhraním.",
  },
]

const ProductsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <header>
        <h1 className="text-3xl font-bold mb-8">Produkty</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/products/${product.id}`} className="w-full">
                <Button size="lg" variant="default">Zobraziť detail</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  )
}

export default ProductsPage
