// PRISMA
// https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries
///////////

// PRISMA SCEHMA

// PRISMA CLIENT

// WORKFLOW
npx create-next-app --example hello-world prisma-introduction
cd prisma-introduction
npm install prisma --save-dev
npm install @prisma/client

// create prisma schema
// schema.prisma specifies the location of the DB, where to locate the db, and what DB
  // datasource db {
  //  provider = "postgresql"
  //  url      = env("DATABASE_URL") // .env configuration files, credentials
  //}

npx prisma init

// need to key into .env file yr database credentials

npx prisma generate // this will create the prisma client
// you need to add model into schema 1st

npx prisma db push // will sync DB w prism schema





////////////////////////////////////////
// SERVER ACTION
// ASYNC FUNCTION
// SERVER FUNCTION WILL RUN server side
////////////////////////////////////////

// can only use '@' if you include the following into tsconfig
//   "paths": {"@/*": ["./*"]}

import { db } from '../../../db'
import { redirect } from 'next/navigation'

export default function Page() {

  // CREATE server action
async function createExpenseItem(formData: FormData) {
  'use server';
  const item = formData.get('item') as string;
  const description = formData.get('description') as string;

  const expenseItem = await db.expenseItem.create({
    data: {
      item: 'item',
      description: 'description'
    }
  });

  redirect('/');
}

  // FORM ITSELF
  return ( <>
                <form action={createExpenseItem}>
                  <h1>Create an Expense Item</h1>;
                  <div>
                  <label htmlFor='item'>Item: </label>
                  <input type="text" name='item' />
                  </div>
                  <div>
                  <label htmlFor='description'>Description: </label>
                  <textarea name='description' />
                  </div>
                  <button type='submit' name='submit'>Create expense Item</button>
                </form>
            </>
  )}
  
// CREATE db folder, with index.ts

// index.ts
import { PrismaClient } from '@prisma/client';
export const db = new PrismaClient();


///////////////////////
// Server Component
///////////////////////

// most next components are server components
// react- hooks all need client component
// client side components render once on server side before pushing to client side

// Server Components: Rendered on the server
// Client Components: Initially rendered on the server, then hydrated and interactive on the client
// Server Actions: Executed on the server
