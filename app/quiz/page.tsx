import { getLiveBrands, getWatches } from "@/lib/data";
import { QuizClient } from "./quiz-client";

export default function QuizPage() {
  const pool = getLiveBrands().flatMap((b) =>
    getWatches(b.id).map((w) => ({
      id: w.id,
      name: w.name,
      brand: b.name,
      brandId: b.id,
      thumbnailSrc: w.thumbnailTestSrc,
    })),
  );

  return <QuizClient pool={pool} />;
}
