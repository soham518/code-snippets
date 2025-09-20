import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";

const EditPageSnippit = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = parseInt((params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  return (
    <>
      <div>
        <h2>Edit page snippet</h2>
        <h2 className="font-bold m-5 text-2xl">{snippet?.title}</h2>
      </div>
      {snippet && <EditSnippetForm snippet={snippet} />}
    </>
  );
};

export default EditPageSnippit;
