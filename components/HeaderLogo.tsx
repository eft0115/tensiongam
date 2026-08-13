"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BRAND = "텐션감";
const TAGLINE = "건강한 몸은 항상 텐션감을 유지하고 있습니다.";

const BRAND_HOLD_MS = 1000;
const TYPE_INTERVAL_MS = 90;
const TAGLINE_HOLD_MS = 1000;
const LETTER_REVEAL_MS = 350;
const WAVE_SETTLE_MS = 600;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

type Phase = "brand" | "typing" | "rebuilding";

export default function HeaderLogo() {
  const [phase, setPhase] = useState<Phase>("brand");
  const [display, setDisplay] = useState(BRAND);
  const [revealedCount, setRevealedCount] = useState(BRAND.length);

  useEffect(() => {
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        // 1. 브랜드 이름을 그대로 보여줍니다
        setPhase("brand");
        setDisplay(BRAND);
        await sleep(BRAND_HOLD_MS);
        if (cancelled) return;

        // 2. 글자가 사라지고 그 자리에서 태그라인이 천천히 타이핑됩니다
        setPhase("typing");
        setDisplay("");
        for (let i = 1; i <= TAGLINE.length; i++) {
          if (cancelled) return;
          setDisplay(TAGLINE.slice(0, i));
          await sleep(TYPE_INTERVAL_MS);
        }
        if (cancelled) return;

        // 3. 다 타이핑된 문장을 잠시 보여줍니다
        await sleep(TAGLINE_HOLD_MS);
        if (cancelled) return;

        // 4. 지우고, 텐/션/감을 한 글자씩 물결처럼 다시 완성합니다
        setPhase("rebuilding");
        setDisplay("");
        setRevealedCount(0);
        for (let i = 1; i <= BRAND.length; i++) {
          if (cancelled) return;
          setRevealedCount(i);
          await sleep(LETTER_REVEAL_MS);
        }
        if (cancelled) return;
        await sleep(WAVE_SETTLE_MS);
      }
    }

    loop();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Link href="/" className="inline-flex items-center gap-3 text-lg font-bold text-gray-900">
      <Image
        src="/images/logo.png"
        alt="텐션감"
        width={44}
        height={44}
        className="rounded-full"
        priority
      />
      <span className="whitespace-nowrap">
        {phase === "rebuilding"
          ? BRAND.split("").map((char, i) =>
              i < revealedCount ? (
                <span key={`${char}-${i}`} className="wave-letter">
                  {char}
                </span>
              ) : null
            )
          : (
              <>
                {display}
                {phase === "typing" && (
                  <span className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-gray-400 align-middle" />
                )}
              </>
            )}
      </span>
    </Link>
  );
}
