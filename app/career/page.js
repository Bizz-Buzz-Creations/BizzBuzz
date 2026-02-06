"use client";

import React from "react";

const jobsData = [
  {
    title: "Product Designer",
    description: "We’re looking for a mid-level product designer to join our team.",
    tags: ["100% remote", "Full-time"],
  },
  {
    title: "Engineering Manager",
    description: "We’re looking for an experienced engineering manager to join our team.",
    tags: ["100% remote", "Full-time"],
  },
  {
    title: "Customer Success Manager",
    description: "We’re looking for a customer success manager to join our team.",
    tags: ["100% remote", "Full-time"],
  },
  {
    title: "Account Executive",
    description: "We’re looking for an account executive to join our team.",
    tags: ["100% remote", "Full-time"],
  },
  {
    title: "SEO Marketing Manager",
    description: "We’re looking for an experienced SEO marketing manager to join our team.",
    tags: ["100% remote", "Full-time"],
  },
];

export default function Career() {
  return (
    <div className="mx-auto mt-32 mb-8 max-w-[650px] rounded-xl bg-[#fcfbf8] px-4 py-6 shadow-md sm:px-8">
      {/* Hiring Badge */}
      <div className="mb-3 inline-block rounded-full border-2 border-black px-3 py-1 text-xs font-semibold">
        We’re hiring!
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        Be part of our mission
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-[520px] text-sm leading-relaxed text-gray-600">
        We’re looking for passionate people to join us on our mission. We value
        flat hierarchies, clear communication, and full ownership and
        responsibility.
      </p>

      {/* Job List */}
      <div>
        {jobsData.map((job, i) => (
          <div
            key={i}
            className="mb-5 border-b-2 border-gray-200 pb-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold">
                {job.title}
              </h3>
              <a
                href="#apply"
                className="w-fit text-sm font-semibold text-black"
              >
                Apply ↗
              </a>
            </div>

            <p className="my-2 text-sm text-gray-600">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full border-2 border-black bg-gray-50 px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
