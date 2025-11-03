import * as z from "zod";
import { ZodSemver } from "zod-semver";

export const modFileDefinitionSchema = z.object({
  guid: z.string().min(35).max(35),
  source: z.string(),
  target: z.string(),
});

export const modDefinitionSchema = z.object({
  specification: z.number().min(1).max(1),

  id: z.uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  version: ZodSemver,
  authors: z.array(z.string().min(1)),
  download: z.object({
    url: z.url(),
    sha256: z.string().length(64),
  }),
  repository: z.url().optional(),
  issues: z.url().optional(),
  tags: z.array(z.enum(["texture-swap", "misc"])),

  files: z.array(modFileDefinitionSchema),
});