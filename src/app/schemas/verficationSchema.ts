import { z } from "zod";

export const verficationSchema = z.object({
  code: z.string().length(6, "Verfication code should contain 6 charcters"),
});
