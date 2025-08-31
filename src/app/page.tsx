import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Home Page</h2>
        <p className="text-gray-600 mt-3 text-lg">Recent Snippets</p>
      </div>

      {/* Snippets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {snippets.map((i) => (
          <div
            key={i.id}
            className="p-6 rounded-3xl shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300"
          >
            <h1 className="text-xl font-semibold text-gray-900 mb-4 truncate">
              {i.title}
            </h1>
            <Link href={`/snippets/${i.id}`}>
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all">
                View
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}