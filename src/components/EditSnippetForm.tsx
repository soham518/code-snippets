"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import type { Snippet } from "@/generated/prisma";
import { Button } from "./ui/button";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutral-900 rounded-2xl shadow-lg space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Your Code Editor</h2>
        <Button className="px-6 py-2 rounded-lg shadow-md hover:scale-105 transition">
          Save
        </Button>
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