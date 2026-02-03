"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function FlowbiteInit() {
  const pathname = usePathname();

  useEffect(() => {
    initFlowbite();
  }, [pathname]);

  return null;
}
