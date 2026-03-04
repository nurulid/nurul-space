import Papa from "papaparse";

// Base Google Sheets published URL (without the query parameters)
const BASE_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiECgeYmDCm6-yBxyWNOKd3HQNlxCMgrrq2P6avc1Ef_rJKeeJkzhQMzYEHQ7sCoWvbKDj-5h3PmP_/pub";

// Generic reusable fetcher for one sheet gid.
async function fetchSheetData(gid) {
  // Append the specific gid and force CSV output for that single sheet
  const url = `${BASE_CSV_URL}?gid=${gid}&single=true&output=csv`;

  const res = await fetch(url, {
    cache: "no-store", // Use "force-cache" or "next: { revalidate: 3600 }" if the data doesn't change often
  });

  if (!res.ok) throw new Error(`Failed to fetch sheet with gid: ${gid}`);

  const csv = await res.text();

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}

// Fetch all resume sheets concurrently.
export async function getResumeData() {
  const GIDS = {
    profile: "1872232498",
    portfolio: "0",
    social: "194784482",
    work: "539792719",
    education: "184981074",
  };

  // Promise.all fetches all sheets at the same time for better performance
  const [profileData, socialData, workData, educationData, portfolioData] =
    await Promise.all([
      fetchSheetData(GIDS.profile),
      fetchSheetData(GIDS.social),
      fetchSheetData(GIDS.work),
      fetchSheetData(GIDS.education),
      fetchSheetData(GIDS.portfolio),
    ]);

  const data = {
    profile: profileData,
    social: socialData,
    work: workData,
    education: educationData,
    portfolio: portfolioData,
  };

  return data;
}
