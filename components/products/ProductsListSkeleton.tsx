import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Button } from "../ui/button"

const ProductsListSkeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 5 }) // Adjust the number of skeleton items as needed

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skeletonItems.map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </CardTitle>
            <CardDescription>
              <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full">
              <Button size="lg" variant="default" disabled>
                <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>
              </Button>
              <div className="mt-4 text-lg font-semibold">
                <h2>
                  <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
                </h2>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProductsListSkeleton
