
"use server"
import { resend } from "@/lib/resend";
import { revalidatePath } from "next/cache";

type State = {
  error?: string;
  success?: string;
};

export async function sendEmail(prevState: State, formData: FormData): Promise<State> {
   const email = formData.get("email") as string;
   const name = formData.get("name") as string;
   const projectType = formData.get("project") as string;
   const budget = formData.get("budget") as string;
   const projectDetails = formData.get("message") as string;

   const {data, error} = await resend.emails.send({
    from: "PortfolioDev <onboarding@resend.dev>",
    to: "delesallecorentin3@gmail.com",
    subject: "Nouvelle demande de contact",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Project Type: ${projectType}</p><p>Budget: ${budget}</p><p>Project Details: ${projectDetails}</p>`,
   });
   
   if(error) {
    return { error: "Failed to send email. Please try again." };
   }
   
   revalidatePath("/");
   return { success: "Email sent successfully!" };
}