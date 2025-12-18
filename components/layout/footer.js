import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class="bg-black text-white pt-16 pb-8 px-6 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
          <div class="md:col-span-4 lg:col-span-6 max-w-md">
            <Image
              src="/bbc logo white.png"
              width={150}
              height={150}
              className="mb-4"
            />
            <p class="text-lg font-normal mb-6 leading-tight">
              BizzBuzz Creations is a dynamic, innovative agency specializing in
              digital marketing, branding, and creative solutions for business
              growth.
            </p>
            <div class="mt-4 space-y-4"></div>
          </div>
          <div class="hidden md:block md:col-span-1 lg:hidden"></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
            <div>
              <h4 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                Services
              </h4>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Start a Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Join the Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Press & Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Drop Us a Note
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                Quick Links
              </h4>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Latest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="sm:col-span-2 md:col-span-1 lg:col-span-1">
              <h4 class="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">
                Get In Touch
              </h4>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm hover:text-gray-300 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-16 pt-6 border-t border-zinc-800">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="flex space-x-6 mb-4 md:mb-0">
              <a href="#" class="text-xs text-gray-500 hover:text-gray-300">
                Sitemap
              </a>
              <a href="#" class="text-xs text-gray-500 hover:text-gray-300">
                Privacy Policy
              </a>
            </div>
            <div class="text-xs text-gray-500">
              © 2025, Site. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
