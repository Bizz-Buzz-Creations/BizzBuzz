import JobsFetch from "@/components/sections/jobsFetch";

export const metadata = {
  title: "Careers at BizzBuzz Creations | Digital Marketing Jobs & Internships",
  description:
    "Join BizzBuzz Creations and build your career in SEO, Meta Ads, content marketing & branding. Explore digital marketing jobs and internship opportunities today.",
};

export default function Career() {
  return <JobsFetch />;
}

export const dynamic = "force-dynamic";
