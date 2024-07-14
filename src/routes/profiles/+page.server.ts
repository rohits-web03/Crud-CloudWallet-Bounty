// import { error } from '@sveltejs/kit';
import { createPool, sql } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'

export async function load() {
  const db = createPool({ connectionString: POSTGRES_URL })

  try {
    const { rows: applicants } = await db.query('SELECT * FROM applicants')
    return {
      applicants: applicants,
    }
  } catch (error) {
      console.log(
        'Table does not exist, creating'
      )
      await seed()
      const { rows: applicants } = await db.query('SELECT * FROM applicants')
      return {
        applicants: applicants
      }
    } 
}

async function seed() {
  const db = createPool({ connectionString: POSTGRES_URL })
  const client = await db.connect();
  const createTable = await client.sql`CREATE TABLE IF NOT EXISTS applicants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `

  console.log(`Created "applicants" table`)

  const users = await Promise.all([
    client.sql`
          INSERT INTO applicants (name, email)
          VALUES ('Rohan', 'rohan@tcl.com')
          ON CONFLICT (email) DO NOTHING;
      `,
    client.sql`
          INSERT INTO applicants (name, email, image)
          VALUES ('Rebecca', 'rebecca@tcl.com')
          ON CONFLICT (email) DO NOTHING;
      `,
    client.sql`
          INSERT INTO applicants (name, email, image)
          VALUES ('Vivek', 'vivek@gmail.com')
          ON CONFLICT (email) DO NOTHING;
      `,
  ])
  if(users){
    console.log(`Seeded ${users.length} users`, users)
  }

  return {
    createTable,
    users,
  }
}

/** @type {import('./$types').Actions} */
export const actions = {

  delete: async ({ request }) => {
    const data = await request.formData();
    const db = createPool({ connectionString: POSTGRES_URL })
    const client = await db.connect();

    const id = data.get('id');

    const deleteUser = await client.sql`
    DELETE FROM applicants
    WHERE id = ${id};`
	
		return { success: true };
	},

	create: async ({request}) => {
		const data = await request.formData();
    const db = createPool({ connectionString: POSTGRES_URL })
    const client = await db.connect();

    const email = data.get('email');
		const name = data.get('name');

    const createUser = await client.sql`
      INSERT INTO applicants (name, email)
      VALUES (${name}, ${email})
      ON CONFLICT (email) DO NOTHING;
    `
    return { success: true };
	},
  update: async ({ request }) => {
    const data = await request.formData();
    const db = createPool({ connectionString: POSTGRES_URL });
    const client = await db.connect();
  
    const id = data.get('id');
    const newName = data.get('name');
    const newEmail = data.get('email');
    console.log(id,newName,newEmail);
  
    try {
      const updateUser = await client.sql`
        UPDATE applicants
        SET name = ${newName}, email = ${newEmail}
        WHERE id = ${id};
      `;
  
      console.log('Update result:', updateUser); // Log the update result
  
      // Check rowCount or any specific indication of success in updateUser response
  
      return { success: true };
    } catch (error) {
      console.error('Error updating applicant:', error);
      return { success: false, error: error.message };
    }
  },  
};



