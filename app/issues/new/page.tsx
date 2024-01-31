"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const CreateIssue = () => {
  return (
    <div className="space-y-3 max-w-xl m-auto">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default CreateIssue;
