import fetch from "node-fetch";

const ED_API = "https://us.edstem.org/api";

interface EdThreadsResponse {
  threads: any[];
}

export async function fetchThreadDetail(threadId: number) {
  const token = process.env.ED_API_TOKEN;

  const res = await fetch(`https://us.edstem.org/api/threads/${threadId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Ed thread fetch failed: ${res.status}`);
  }

  return res.json();
}


export async function fetchThreads() {
  const token = process.env.ED_API_TOKEN;
  const courseId = process.env.ED_COURSE_ID;

  if (!token || !courseId) {
    throw new Error("Missing ED_API_TOKEN or ED_COURSE_ID");
  }

  let allThreads: any[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const res = await fetch(
      `${ED_API}/courses/${courseId}/threads?limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Ed API error: ${res.status}`);
    }

    const json = (await res.json()) as EdThreadsResponse;

    if (!json.threads || json.threads.length === 0) {
      break;
    }

    allThreads.push(...json.threads);
    offset += json.threads.length;

    console.log(`Fetched ${allThreads.length} threads...`);
  }

  return allThreads;
}
