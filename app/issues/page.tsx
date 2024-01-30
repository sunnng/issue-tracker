"use client";

import React from "react";
import { Button, TextField, TextArea } from "@radix-ui/themes";

const IssuesPage = () => {
  return (
    <div className="flex justify-center flex-col space-y-3 max-w-xl m-auto">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default IssuesPage;
