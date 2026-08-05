"use client";

import dynamic from "next/dynamic";

// ssr: false is only allowed inside a Client Component — this file exists
// solely to hold that rule, so app/layout.tsx (a Server Component) can stay
// a plain import.
const DiscountPopup = dynamic(() => import("./DiscountPopup"), {
  ssr: false,
});

export default DiscountPopup;