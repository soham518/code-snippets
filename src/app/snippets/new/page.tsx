"use client";
import * as actions from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
const page = () => {
  const [formStateData, action] = useActionState(actions.createSnippet, {
    message: "",
  });
  return (
    <>
      <form action={action} className="flex-col space-y-{3px}">
        <h1>New Snippet</h1>
        <Label className="my-4">Title</Label>
        <Input className="my-4" type="text" name="title" id="title"></Input>
        <Label>Code</Label>
        <Textarea className="my-4" name="code" id="code"></Textarea>
        <Button className="my-4" type="submit">
          Create
        </Button>
        {formStateData.message && (
          <div className="p-2 bg-red-300 border-2 border-red-600">
            {formStateData.message}
          </div>
        )}
      </form>
    </>
  );
};

export default page;
