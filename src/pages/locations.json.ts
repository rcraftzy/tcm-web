import { db, Locations } from "astro:db";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const locations = await db.select().from(Locations);

  if (!locations) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    })
  }

  return new Response(
    JSON.stringify(locations), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      }
    }
  )
}
