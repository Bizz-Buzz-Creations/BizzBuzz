import PostingForm from "@/components/sections/postingForm";
import { notFound } from "next/navigation";

export default async function JobPosting({ searchParams }) {
  const { token } = await searchParams;

  if (!token || token !== process.env.ADMIN_PAGE_TOKEN) {
    notFound();
  }

  return <PostingForm />;
}
