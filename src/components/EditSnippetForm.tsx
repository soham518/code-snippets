"use client";

import { saveSnippet } from "@/actions";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { Copy } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const saveSnippetAction = async () => {
    try {
      await saveSnippet(snippet.id, code);
      toast.success("Snippet saved!");
    } catch (err) {
      console.log(err)
      toast.error("Failed to save snippet!");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Snippet copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-900 rounded-2xl shadow-lg space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Your Code Editor</h2>
        <div className="flex gap-2">
          <Button
            onClick={saveSnippetAction}
            type="button"
            className="px-6 py-2 rounded-lg shadow-md hover:scale-105 transition border border-white p-4"
          >
            Save
          </Button>
          <Button onClick={handleCopy} type="button">
            <Copy color="white" />
          </Button>
        </div>
        <Toaster />
      </div>

      {/* Monaco Editor */}
      <div className="rounded-xl overflow-hidden border border-neutral-700">
        <Editor
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
};

export default EditSnippetForm;
