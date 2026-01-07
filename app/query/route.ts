
import { neon } from '@neondatabase/serverless';

export async function GET() {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    // Цей запит вибирає суму інвойсу та ім'я клієнта, 
    // де сума дорівнює 666 (це тестовий запис із вашого seed)
    const data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


// =================Old version=============================================

// // import postgres from 'postgres';

// // const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// // async function listInvoices() {
// // 	const data = await sql`
// //     SELECT invoices.amount, customers.name
// //     FROM invoices
// //     JOIN customers ON invoices.customer_id = customers.id
// //     WHERE invoices.amount = 666;
// //   `;

// // 	return data;
// // }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   // try {
//   // 	return Response.json(await listInvoices());
//   // } catch (error) {
//   // 	return Response.json({ error }, { status: 500 });
//   // }
// }
