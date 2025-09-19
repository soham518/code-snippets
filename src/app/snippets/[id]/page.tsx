import * as actions from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Loading from "./loading";
import Link from "next/link";
const SnippetData = async ({ params }: { params: { id: string } }) => {
  const id =  parseInt(await params.id);
  await new Promise((r)=> setTimeout(r,1000))
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });
  
  if (!snippet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold text-red-600">
          Snippet not found
        </h1>
      </div>
    );
  }
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white shadow-xl rounded-3xl p-8">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        {snippet.title}
      </h1>

      {/* Code textarea */}
      <textarea
        readOnly
        value={snippet.code}
        className="w-full h-64 p-4 font-mono text-sm text-gray-800 border rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner resize-none"
      />

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button
        >
          <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
        </Button>
        <form action={deleteSnippetAction}>
          <Button type="submit">Delete</Button>
        </form>
      </div>
    </div>
  );
};

export default SnippetData;
