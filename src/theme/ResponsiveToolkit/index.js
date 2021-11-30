import React from "react"
const { useState, useEffect, useCallback } = React

const Breakpoint = ({ at, horizontal = true }) => {
  const value = horizontal ? at : at.slice(1)
  const isVertical = at.startsWith("v")
  return (
    <div
      className={clsx({
        [styles.breakpoint]: !isVertical,
        [styles.relativeBreakpoint]: at.indexOf("%") > -1,
        [styles.vbreakpoint]: isVertical,
      })}
      style={{ [horizontal ? "left" : "top"]: value }}
      data-value={value}
    />
  )
}

const points = [
  `450px`,
  `540px`,
  `630px`,
  `990px`,
  `1080px`,
  `1200px`,
  "10%",
  "25%",
  "50%",
  "75%",
  "90%",
  // "v64px",
  // "v128px",
  // "v192px",
  // "v256px",
  // "v320px",
  // "v384px",
  // "v448px",
  // "v512px",
  // "v576px",
  // "v640px",
  // "v704px",
  // "v768px",
  // "v832px",
  // "v896px",
  // "v960px",
  // "v1024px",
]

// With a URL like: coolwebsite.com?nice=dope
// const $nice = useQuery('nice') === 'dope'
export function useQuery(key) {
  // our state
  const [$query, $setQuery] = useState(null)

  useEffect(() => {
    // only for ze browser
    if (typeof window === "undefined") return

    const parsed = new URLSearchParams((window.location.search || "").slice(1))

    const value = parsed.get(key)

    if (typeof value === "string") {
      $setQuery(value)
    }
  }, [$query, $setQuery, key])
  return $query
}

const ResponsiveToolkit = () => {
  const [$active, $setActive] = useState(true)
  const [$width, $setWidth] = useState(-1)
  const [$point, $setPoint] = useState(0)
  const toggle = () => $setActive(!$active)
  const $toolkit = useQuery("debug")
  const $customPoint = useQuery("point")
  useEffect(() => {
    const activePoints = () =>
      points
        .filter(z => z.includes("px"))
        .map(z => parseInt(z.slice(0, -2)))
        .reduce((x, y) => (y <= $width ? y : x), 0)
    const update = () => {
      $setWidth(window.innerWidth)
      const points = activePoints()
      console.log({ points, $customPoint })
      $setPoint(points)
    }
    if ($toolkit) {
      update()
      window.addEventListener("resize", update)
    }
    return () => window.removeEventListener("resize", update)
  }, [$width, $setWidth, $point, $setPoint, $toolkit, $customPoint])

  const pointsPlus = $customPoint ? points.concat($customPoint) : points
  return (
    $toolkit && (
      <>
        <div className={styles.toolkit} onClick={toggle}>
          {$point}px <span className={styles.ruler}>📐</span> {$width}px
        </div>
        {$active &&
          pointsPlus
            .filter(z => !z.startsWith("v"))
            .map(x => <Breakpoint key={x} at={x} />)}
        {$active &&
          pointsPlus
            .filter(z => z.startsWith("v"))
            .map(x => <Breakpoint key={x} at={x} horizontal={false} />)}
      </>
    )
  )
}
export default ResponsiveToolkit
