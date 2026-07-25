const ALISITE_BASE_URL = "https://alisite-mobile.alibaba.com/minisite_ajax";

interface QueryByFieldsOptions {
  minisiteId: string | number;
  fieldNames: string | string[];
  extendParams?: Record<string, unknown>;
}

/**
 * Fetch minisite FaaS data by field names.
 * Automatically merges window.accioGlobalData into extendParams.
 */
export async function queryByFields<T = unknown>(
  options: QueryByFieldsOptions,
): Promise<T> {
  const { minisiteId, fieldNames, extendParams } = options;

  const fieldNamesStr = Array.isArray(fieldNames)
    ? fieldNames.join(",")
    : fieldNames;

  let globalData: Record<string, unknown> = {};
  try {
    const d = (window as unknown as Record<string, unknown>)?.accioGlobalData;
    if (d != null && typeof d === "object") {
      globalData = d as Record<string, unknown>;
    }
  } catch {
    // SSR or cross-origin — ignore
  }

  const mergedExtendParams = { ...globalData, ...extendParams };

  const body: Record<string, string> = { fieldNames: fieldNamesStr };
  if (Object.keys(mergedExtendParams).length > 0) {
    body.extendParams = JSON.stringify(mergedExtendParams);
  }

  const url = `${ALISITE_BASE_URL}/${minisiteId}/faasQuery/queryByFields`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body).toString(),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(
      `queryByFields failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}
