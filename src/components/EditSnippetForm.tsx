"use client";

import { saveSnippet } from "@/actions";
import type { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { Button } from "./ui/button";
import toast, { Toaster } from 'react-hot-toast';
import { Copy } from 'lucide-react';
const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  const notifyToSave = ()=> toast.success('Snippet saved!');
  const notifyToCopy = ()=> toast.success('Snippet copied to clipboard!');
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      notifyToCopy();
    } catch (err) {
      toast.error("Failed to copy!");
    }
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-900 rounded-2xl shadow-lg space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <form action={saveSnippetAction}>
          <h2 className="text-xl font-semibold text-white">Your Code Editor</h2>
          <Button onClick={notifyToSave}
            type="submit"
            className="px-6 py-2 rounded-lg shadow-md hover:scale-105 transition border-1 border-white-500 p-4"
          >
            Save
          </Button>
          <Button onClick={handleCopy}><Copy color="white"></Copy></Button>
          <Toaster />
        </form>
      </div>

      {/* Monaco Editor */}
      <div className="rounded-xl overflow-hidden border border-neutral-700">
        <Editor
          height="50vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => {
            setCode(value || "");
            snippet.code = code;
          }}
        />
      </div>
    </div>
  );
};

export default EditSnippetForm;
