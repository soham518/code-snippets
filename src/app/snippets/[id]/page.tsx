import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const SnippetData = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const data = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-red-600">Snippet not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white shadow-xl rounded-3xl p-8">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">{data.title}</h1>

      {/* Code textarea */}
      <textarea
        readOnly
        value={data.code}
        className="w-full h-64 p-4 font-mono text-sm text-gray-800 border rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner resize-none"
      />

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button asChild className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-blue-500 transition-all rounded-xl">
          <Link href={`/snippets/${data.id}/edit`}>Edit</Link>
        </Button>
        <Button asChild className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-blue-500 transition-all rounded-xl">
          <Link href={`/snippets/${data.id}/delete`}>Delete</Link>
        </Button>
      </div>
    </div>
  );
};

export default SnippetData;