"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields){
        return {error: "Invalid fields"};
    }

    return{success: "Registered Account!"}
}