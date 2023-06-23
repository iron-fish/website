import { isArray, isObject } from "lodash-es";

const ENDPOINT =
  "https://api.github.com/repos/iron-fish/node-app/releases/latest";

export const PLATFORMS = {
  WINDOWS: "windows",
  MAC_ARM: "mac-arm",
  MAC_INTEL: "mac-intel",
  LINUX: "linux",
} as const;

export type Platform = "windows" | "mac-arm" | "mac-intel" | "linux";
export type DownloadUrlsByPlatform = Record<Platform, string>;

function getDownloadUrlsByPlatform(data: unknown) {
  if (
    !isObject(data) ||
    !("assets" in data) ||
    !isArray(data.assets) ||
    data.assets.length === 0
  ) {
    throw new Error("data.assets is not an array");
  }

  const downloadUrls = data.assets.map((item: unknown) => {
    if (
      !isObject(item) ||
      !("browser_download_url" in item) ||
      typeof item.browser_download_url !== "string"
    ) {
      throw new Error("item.browser_download_url is not a string");
    }

    return item.browser_download_url;
  });

  const downloadUrlsByPlatform: Record<Platform, string> = {
    windows: "",
    "mac-arm": "",
    "mac-intel": "",
    linux: "",
  };

  for (const url of downloadUrls) {
    if (url.endsWith(".exe")) {
      downloadUrlsByPlatform.windows = url;
    } else if (url.endsWith("arm64.dmg")) {
      downloadUrlsByPlatform["mac-arm"] = url;
    } else if (url.endsWith("x64.dmg")) {
      downloadUrlsByPlatform["mac-intel"] = url;
    } else if (url.endsWith("amd64.deb")) {
      downloadUrlsByPlatform.linux = url;
    }
  }

  if (Object.values(downloadUrlsByPlatform).some((val) => !val)) {
    throw new Error("Missing platform url");
  }

  return downloadUrlsByPlatform;
}

export async function getNodeAppUrlByPlatform(): Promise<DownloadUrlsByPlatform> {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return getDownloadUrlsByPlatform(data);
}
