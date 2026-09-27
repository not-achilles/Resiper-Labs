/**
 * Plan-view geometry for the six capability areas.
 *
 * The areas are drawn as adjacent zones of one environment, not as stacked
 * layers, so no diagram implies a sequence. Positions are chosen so that the
 * common combinations (and the illustrative scenario) are adjacent, letting
 * connections be drawn as short "bridges" across shared edges.
 */
import type { PillarNo } from "../content/site";

export type Layout = "wide" | "narrow";

/** [column, row] per area */
export const GRID: Record<Layout, Record<PillarNo, [number, number]>> = {
  // 3 × 2
  wide: {
    "06": [0, 0],
    "01": [1, 0],
    "02": [2, 0],
    "03": [0, 1],
    "05": [1, 1],
    "04": [2, 1],
  },
  // 2 × 3
  narrow: {
    "06": [0, 0],
    "01": [1, 0],
    "04": [0, 1],
    "02": [1, 1],
    "05": [0, 2],
    "03": [1, 2],
  },
};

export const DIMS: Record<Layout, { cols: number; rows: number }> = {
  wide: { cols: 3, rows: 2 },
  narrow: { cols: 2, rows: 3 },
};

export interface Zone {
  no: PillarNo;
  x: number;
  y: number;
  w: number;
  h: number;
  cx: number;
  cy: number;
}

export function zones(layout: Layout, width: number, height: number, gap: number): Zone[] {
  const { cols, rows } = DIMS[layout];
  const w = (width - gap * (cols - 1)) / cols;
  const h = (height - gap * (rows - 1)) / rows;
  return (Object.entries(GRID[layout]) as [PillarNo, [number, number]][]).map(([no, [c, r]]) => {
    const x = c * (w + gap);
    const y = r * (h + gap);
    return { no, x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
  });
}

export const zoneOf = (list: Zone[], no: PillarNo): Zone => list.find((z) => z.no === no)!;

/** A short connector across the gap between two adjacent zones, or null. */
export function bridge(
  a: Zone,
  b: Zone,
  gap: number,
): { x1: number; y1: number; x2: number; y2: number } | null {
  const sameRow = Math.abs(a.y - b.y) < 1;
  const sameCol = Math.abs(a.x - b.x) < 1;
  if (sameRow && Math.abs(a.x - b.x) - a.w <= gap + 1) {
    const left = a.x < b.x ? a : b;
    const x = left.x + left.w;
    return { x1: x - 10, y1: a.cy, x2: x + gap + 10, y2: a.cy };
  }
  if (sameCol && Math.abs(a.y - b.y) - a.h <= gap + 1) {
    const top = a.y < b.y ? a : b;
    const y = top.y + top.h;
    return { x1: a.cx, y1: y - 10, x2: a.cx, y2: y + gap + 10 };
  }
  return null;
}

/** Bridges linking consecutive areas of a chain (skips non-adjacent pairs). */
export function chainBridges(list: Zone[], chain: PillarNo[], gap: number) {
  const out: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 1; i < chain.length; i++) {
    const br = bridge(zoneOf(list, chain[i - 1]!), zoneOf(list, chain[i]!), gap);
    if (br) out.push(br);
  }
  return out;
}
