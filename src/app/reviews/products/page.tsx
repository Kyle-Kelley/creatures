import React from "react";
import { getXataClient } from "../../../xata";
import Link from "next/link";

const xata = getXataClient();

export default async function Page({ searchParams }: { searchParams: { q: string } }) {
  const views = await xata.db.products.getAll();
  return (
    <div className="fixed bottom-0 left-0  flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <div className="w-full max-w-5xl mt-16">
      <h1 className="text-center mb-4">I promise I did not write these!</h1>
        {views.length === 0 && <p>No reviews found</p>}
        {views.map((view) => (
          <div key={view.id} className="mb-16 shadow-xl p-10">
            <h2 className="text-2xl mb-2">
              <Link href={`/reviews/products/${view.id}`}>{view.subject}</Link>
            </h2>
            <p className="mb-5">
              {view.review}
            </p>
            <Link
              href={`/reviews/products/${view.id}`}
              className="px-4 py-2 font-semibold text-sm rounded-lg shadow-sm w-fit"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
