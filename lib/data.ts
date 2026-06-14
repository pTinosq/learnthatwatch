import { existsSync } from "node:fs";
import path from "node:path";
import brandsJson from "@/data/brands.json";
import type { Brand, BrandView } from "./types";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const brands: BrandView[] = (brandsJson as Brand[]).map((brand) => ({
  ...brand,
  hasLogo: existsSync(
    path.join(process.cwd(), "public", "brands", brand.id, "logo.svg"),
  ),
  countryName: regionNames.of(brand.country) ?? brand.country,
  countryCode: brand.country.toLowerCase(),
}));

export function getBrands(): BrandView[] {
  return brands;
}
