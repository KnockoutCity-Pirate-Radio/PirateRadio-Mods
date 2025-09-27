import * as z from "zod";
import { ZodSemver } from "zod-semver";

export const modDefinitionSchema = z.object({
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
  tags: z.array(z.enum(["texture-swap", "model", "misc"])),
});