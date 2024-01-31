"use client";

import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const CreateIssue = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<IssueForm>();
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl m-auto"
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE {...field} placeholder="Description…" />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default CreateIssue;
