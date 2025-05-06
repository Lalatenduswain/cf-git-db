import { neon } from "@neondatabase/serverless";

const sql = neon("YOUR_NEON_DATABASE_URL");

export default {
  async fetch(request) {
    const result = await sql`SELECT 'Hello from Neon PostgreSQL!' as message`;
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
