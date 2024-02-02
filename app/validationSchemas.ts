import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "请输入标题").max(255, "标题过长"),
  description: z.string().min(1, "请输入问题描述"),
});
