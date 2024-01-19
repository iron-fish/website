import { Text, TextProps } from "@chakra-ui/react";
import React, { useMemo } from "react";

const SKIP_TO_HIGHLIGHT_THRESHOLD = 50;

type Props = {
  content: string;
  highlights: [number, number][];
  skipToHighlight?: boolean;
} & TextProps;

export function TextHighlighter({
  content,
  highlights,
  skipToHighlight,
  ...rest
}: Props) {
  const children = useMemo(() => {
    const parts: JSX.Element[] = [];

    let lastIndex = 0;

    highlights.forEach(([start, length]) => {
      const end = start + length;

      // Add text before the highlight
      if (start > lastIndex) {
        const substring = content.substring(lastIndex, start);
        const shouldSkip =
          skipToHighlight &&
          lastIndex === 0 &&
          substring.length > SKIP_TO_HIGHLIGHT_THRESHOLD;
        const renderedContent = shouldSkip
          ? "..."
          : content.substring(lastIndex, start);
        parts.push(
          <Text key={lastIndex} as="span">
            {renderedContent}
          </Text>
        );
      }

      // Add the highlighted text
      parts.push(
        <Text key={start} as="span" backgroundColor="#FFEC1F">
          {content.substring(start, end)}
        </Text>
      );

      lastIndex = end;
    });

    // Add any remaining text after the last highlight
    if (lastIndex < content.length) {
      parts.push(<span key={lastIndex}>{content.substring(lastIndex)}</span>);
    }

    return parts;
  }, [content, highlights, skipToHighlight]);

  return (
    <Text as="span" noOfLines={2} {...rest}>
      {children}
    </Text>
  );
}
