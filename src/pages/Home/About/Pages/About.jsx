import React from "react";
import { NavLink, Outlet } from "react-router";

const About = () => {
  return (
    <div className="max-w-4xl p-6 bg-base-200 rounded-xl shadow-md my-20 mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-slate-500 mb-2">About Us</h1>
      <p className="text-slate-500 mb-6">
        <span className="font-bold">Skills Development Foundation (SDF)</span> is a
        government-registered non-profit organization in Bangladesh dedicated to
        empowering youth through skill development, training, and employment
        support. <br />
        We work with underprivileged and unemployed young people to help them
        become productive members of society by providing modern technical and
        vocational education.
      </p>

      {/* Tabs */}
      <div className="tabs tabs-bordered mb-6">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Vision
        </NavLink>
        <NavLink
          to="mission"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Mission
        </NavLink>
        <NavLink
          to="objectives"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Our Objectives
        </NavLink>
        <NavLink
          to="employment"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Employment & Entrepreneurship
        </NavLink>
        <NavLink
          to="socialInclusion"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Social Inclusion
        </NavLink>
        <NavLink
          to="researchInnovation"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Research & Innovation
        </NavLink>
      </div>

      {/* Render Child Route */}
      <div className="text-gray-600 leading-relaxed">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
