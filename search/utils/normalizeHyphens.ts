import lunr, { Builder, Token } from "lunr";

function normalizeHyphens(token: Token) {
  const tokenString = token.toString();

  if (!tokenString.includes("-")) return token;

  const tokens = tokenString.split("-").map((part) => {
    return token.clone(() => part);
  });

  tokens.push(token.clone((t) => t.replace(/-/g, "")));

  return tokens;
}

export function buildNormalizedHyphens(builder: Builder) {
  builder.pipeline.before(lunr.stemmer, normalizeHyphens);
}

export function registerNormalizeHyphens() {
  lunr.tokenizer.separator = /\s+/;
  lunr.Pipeline.registerFunction(normalizeHyphens, "normalizeHyphens");
}
