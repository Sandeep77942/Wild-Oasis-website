"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLebel }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-4 py-2 md:px-8 md:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLebel : children}
    </button>
  );
}
