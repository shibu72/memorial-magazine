import Contact from "@/components/shared/contact";
import HeroSection from "@/components/shared/heroSection";
import React from "react";
export default function Page() {
  return (
    <>
      <HeroSection title="Privacy Policy" breadcrumb="Home > Privacy Policy" />

      <div className="m-auto mt-20 w-[1320px]">
        <div>
          <div>
            <h2 className="text-3xl font-semibold">Privacy Policy</h2>
            <p className="text-xl font-normal">
              At Memorial Moments Magazine, we prioritize the protection and
              privacy of our readers&#39; personal information. This Privacy
              Policy outlines the types of information collected, how it&#39;s
              used, and the measures taken to safeguard your data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Information We Collect</h2>
            <ul className="list-disc grid items-center  justify-center">
              <li className="text-xl font-normal">
                Personal Information: When you subscribe to our magazine or
                interact with our website, we may collect personal information
                such as your name, email address, mailing address, and payment
                details.
              </li>
              <li className="text-xl font-normal">
                Usage Data: We may gather information about how you interact
                with our content, including pages visited, links clicked, and
                duration of visit, using cookies and similar tracking
                technologies.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">
              How We Use Your Information
            </h2>
            <ul className="list-disc grid items-center  justify-center">
              <li className="text-xl font-normal">
                Personal Information: When you subscribe to our magazine or
                interact with our website, we may collect personal information
                such as your name, email address, mailing address, and payment
                details.
              </li>
              <li className="text-xl font-normal">
                Usage Data: We may gather information about how you interact
                with our content, including pages visited, links clicked, and
                duration of visit, using cookies and similar tracking
                technologies.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Your Choices and Rights</h2>
            <ul className="list-disc grid items-center  justify-center">
              <li className="text-xl font-normal">
                Personal Information: When you subscribe to our magazine or
                interact with our website, we may collect personal information
                such as your name, email address, mailing address, and payment
                details.
              </li>
              <li className="text-xl font-normal">
                Usage Data: We may gather information about how you interact
                with our content, including pages visited, links clicked, and
                duration of visit, using cookies and similar tracking
                technologies.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Children&#39;s Privacy</h2>
            <ul className="list-disc grid items-center  justify-center">
              <li className="text-xl font-normal">
                Personal Information: When you subscribe to our magazine or
                interact with our website, we may collect personal information
                such as your name, email address, mailing address, and payment
                details.
              </li>
              <li className="text-xl font-normal">
                Usage Data: We may gather information about how you interact
                with our content, including pages visited, links clicked, and
                duration of visit, using cookies and similar tracking
                technologies.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">
              Updates to the Privacy Policy
            </h2>
            <ul className="list-disc grid items-center  justify-center">
              <li className="text-xl font-normal">
                Personal Information: When you subscribe to our magazine or
                interact with our website, we may collect personal information
                such as your name, email address, mailing address, and payment
                details.
              </li>
              <li className="text-xl font-normal">
                Usage Data: We may gather information about how you interact
                with our content, including pages visited, links clicked, and
                duration of visit, using cookies and similar tracking
                technologies.
              </li>
            </ul>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
