"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { LayoutWrapper } from "@/components/LayoutWrapper";

const BASE_COST = 22.5;
const MIN_PRICE = 25;
const TARGET_PRICE = 37.5;

type ProductType = "novel" | "childrens_full_color";

const products: Record<
  ProductType,
  { label: string; shortLabel: string; imageSrc: string; imageAlt: string }
> = {
  novel: {
    label: "Novel",
    shortLabel: "Novel",
    imageSrc: "/images/features/Novel.webp",
    imageAlt: "Novel product earnings tool preview",
  },
  childrens_full_color: {
    label: "Children’s Book (Full color)",
    shortLabel: "Children’s Book",
    imageSrc: "/images/features/ChildrensBook.webp",
    imageAlt: "Children’s book product earnings tool preview",
  },
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export function EarningsTool() {
  const [productType, setProductType] = useState<ProductType>("novel");
  const [salePrice, setSalePrice] = useState<number>(TARGET_PRICE);
  const [salesPerDay, setSalesPerDay] = useState<number>(5);

  const profitPerUnit = useMemo(() => Math.max(0, salePrice - BASE_COST), [salePrice]);
  const dailyProfit = useMemo(() => profitPerUnit * salesPerDay, [profitPerUnit, salesPerDay]);
  const monthlyProfit = useMemo(() => dailyProfit * 30, [dailyProfit]);
  const annualProfit = useMemo(() => dailyProfit * 365, [dailyProfit]);

  return (
    <section className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Build a book once. Earn from it forever.
            </h2>
            <p className="mt-2 text-lg font-semibold text-neutral-900">
              Estimate your author revenue.
            </p>
            <p className="mt-4 text-pretty text-neutral-700">
              Start with a minimum sale price of {usd.format(MIN_PRICE)}. Your base
              print cost is {usd.format(BASE_COST)}—everything above that is your
              profit per unit.
            </p>
          </div>

          <div className="mt-10 grid gap-8 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] lg:grid-cols-[420px_1fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 to-white p-6 ring-1 ring-neutral-200">
              <div className="text-sm font-semibold text-neutral-900">
                Earnings preview — {products[productType].shortLabel}
              </div>
              <div className="mt-4">
                <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-neutral-200">
                  <Image
                    src={products[productType].imageSrc}
                    alt={products[productType].imageAlt}
                    width={900}
                    height={700}
                    className="h-auto w-full"
                    priority={false}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setProductType((p) =>
                        p === "novel" ? "childrens_full_color" : "novel",
                      )
                    }
                    className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/90 text-neutral-900 shadow-sm ring-1 ring-neutral-200 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label="Previous product type"
                    title="Previous"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setProductType((p) =>
                        p === "novel" ? "childrens_full_color" : "novel",
                      )
                    }
                    className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/90 text-neutral-900 shadow-sm ring-1 ring-neutral-200 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label="Next product type"
                    title="Next"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                  <div className="text-xs text-neutral-600">Profit per unit</div>
                  <div className="mt-1 text-lg font-bold text-neutral-900">
                    {usd.format(profitPerUnit)}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                  <div className="text-xs text-neutral-600">Annual profit</div>
                  <div className="mt-1 text-lg font-bold text-neutral-900">
                    {usd.format(annualProfit)}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
                <div className="rounded-[2rem] bg-neutral-50 p-4 text-sm text-neutral-700 ring-1 ring-neutral-200">
                  <div className="font-semibold text-neutral-900">Product type</div>
                  <div className="mt-1">{products[productType].label}</div>
                </div>

              <div className="grid gap-2">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-semibold text-neutral-900" htmlFor="salePrice">
                    Sale price
                  </label>
                  <div className="text-xs font-semibold text-neutral-600">
                    Target: {usd.format(TARGET_PRICE)}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_140px] sm:items-center">
                  <input
                    id="salePrice"
                    type="range"
                    min={MIN_PRICE}
                    max={100}
                    step={0.5}
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full accent-amber-500"
                    aria-describedby="salePriceHelp"
                  />
                  <input
                    type="number"
                    min={MIN_PRICE}
                    step={0.5}
                    value={salePrice}
                    onChange={(e) => {
                      const n = Number(e.target.value);
                      setSalePrice(clamp(Number.isFinite(n) ? n : TARGET_PRICE, MIN_PRICE, 100));
                    }}
                    className="h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                    aria-label="Sale price in USD"
                  />
                </div>

                <div id="salePriceHelp" className="text-sm text-neutral-600">
                  Minimum {usd.format(MIN_PRICE)} (profit {usd.format(MIN_PRICE - BASE_COST)}).
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-semibold text-neutral-900" htmlFor="salesPerDay">
                    Sales per day
                  </label>
                  <div className="text-xs font-semibold text-neutral-600">
                    {salesPerDay} / day
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_140px] sm:items-center">
                  <input
                    id="salesPerDay"
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={salesPerDay}
                    onChange={(e) => setSalesPerDay(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <input
                    type="number"
                    min={0}
                    max={50}
                    step={1}
                    value={salesPerDay}
                    onChange={(e) => {
                      const n = Number(e.target.value);
                      setSalesPerDay(clamp(Number.isFinite(n) ? n : 0, 0, 50));
                    }}
                    className="h-12 w-full rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                    aria-label="Sales per day"
                  />
                </div>
              </div>

              <div className="grid gap-4 rounded-[2rem] bg-neutral-50 p-6 ring-1 ring-neutral-200">
                <div className="grid gap-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                    Your earnings
                  </div>
                  <div className="text-sm text-neutral-700">
                    Profit per unit:{" "}
                    <span className="font-semibold text-neutral-900">
                      {usd.format(profitPerUnit)}
                    </span>{" "}
                    (sale price {usd.format(salePrice)} − base cost {usd.format(BASE_COST)})
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                    <div className="text-xs text-neutral-600">Daily</div>
                    <div className="mt-1 text-xl font-bold text-neutral-900">
                      {usd.format(dailyProfit)}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                    <div className="text-xs text-neutral-600">Monthly</div>
                    <div className="mt-1 text-xl font-bold text-neutral-900">
                      {usd.format(monthlyProfit)}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                    <div className="text-xs text-neutral-600">Annual</div>
                    <div className="mt-1 text-xl font-bold text-neutral-900">
                      {usd.format(annualProfit)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-neutral-600">
                  Recommended starting price:{" "}
                  <span className="font-semibold text-neutral-900">
                    {usd.format(TARGET_PRICE)}
                  </span>
                </div>
                <Link
                  href="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-neutral-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Start Publishing Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}

