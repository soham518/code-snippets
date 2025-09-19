import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
const page = () => {
  async function createSnippet(formData: FormData) {
    "use server"; //use server directive
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("Snippet created", snippet);

    redirect("/");
  }
  return (
    <>
      <form action={createSnippet} className="flex-col space-y-{3px}">
        <h1>New Snippet</h1>
        <Label className="my-4">Title</Label>
        <Input className="my-4" type="text" name="title" id="title"></Input>
        <Label>Code</Label>
        <Textarea className="my-4" name="code" id="code"></Textarea>
        <Button className="my-4" type="submit">
          Create
        </Button>
      </form>
    </>
  );
};

export default page;
