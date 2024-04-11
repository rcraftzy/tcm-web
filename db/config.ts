import { column, defineDb } from 'astro:db';

// https://astro.build/db/config
const Videos = {
  columns: {
    id: column.text({primaryKey: true}),
    title: column.text(),
    description: column.text(),
    link: column.text(),
    published: column.text(),
    viewTime: column.text(),
    tags: column.json()
  },
}

export default defineDb({
  tables: { Videos }
});
