import {
  PLATFORMS,
  DownloadUrlsByPlatform,
  Platform,
} from "@/utils/nodeAppUrl/getNodeAppUrlByPlatform";
import { isObject } from "lodash-es";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export function useDownloadLinkForPlatform(
  downloadUrlsByPlatform?: DownloadUrlsByPlatform
) {
  const [platformData, setPlatformData] = useState<{
    url: string | null;
    label: string | null;
    platform: Platform | null;
  } | null>(null);

  useEffect(() => {
    const run = async () => {
      setPlatformData(await getDataForPlatform(downloadUrlsByPlatform));
    };

    run();
  }, [downloadUrlsByPlatform]);

  return platformData;
}

async function getDataForPlatform(
  downloadUrlsByPlatform?: DownloadUrlsByPlatform
) {
  const parser = new UAParser();
  const ua = parser.getResult();

  const notFoundOption = {
    platform: null,
    label: null,
    url: null,
  };

  if (!downloadUrlsByPlatform) {
    return notFoundOption;
  }

  if (ua.os.name === "Mac OS") {
    let architecture;

    try {
      if (
        "userAgentData" in navigator &&
        isObject(navigator.userAgentData) &&
        "getHighEntropyValues" in navigator.userAgentData &&
        typeof navigator.userAgentData.getHighEntropyValues === "function"
      ) {
        const entropyValues =
          await navigator.userAgentData.getHighEntropyValues(["architecture"]);

        architecture = entropyValues.architecture;
      }
    } catch (err) {}

    return architecture === "arm"
      ? {
          platform: PLATFORMS.MAC_ARM,
          label: "macOS (Apple Silicon)",
          url: downloadUrlsByPlatform[PLATFORMS.MAC_ARM],
        }
      : {
          platform: PLATFORMS.MAC_INTEL,
          label: "macOS (Intel)",
          url: downloadUrlsByPlatform[PLATFORMS.MAC_INTEL],
        };
  }

  if (ua.os.name === "Windows") {
    return {
      platform: PLATFORMS.WINDOWS,
      label: "Windows",
      url: downloadUrlsByPlatform[PLATFORMS.WINDOWS],
    };
  }

  return notFoundOption;
}
