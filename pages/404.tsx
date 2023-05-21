"use client";
import Link from "next/link";
import "../src/app/globals.css";
import Footer from "@/app/components/footer";

export default function Error() {
  return (
    <div className="bg-gray-900 max-w-[1400px] mx-auto">
      <div
        className="w-full text-center"
        style={{
          padding: "8rem 0",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1
          className="text-white text-center m-auto"
          style={{ fontSize: "5rem", fontWeight: "bold" }}
        >
          404
        </h1>
        <h2
          className="text-white text-center m-auto"
          style={{ fontSize: "2rem" }}
        >
          Page not found
        </h2>
        <Link
          href="/"
          title="Page not found link"
          className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
          style={{ fontSize: "1rem", margin: "0, auto", width: "10rem" }}
        >
          Back to home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
