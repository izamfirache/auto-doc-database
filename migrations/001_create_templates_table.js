export function up(pgm) {
    pgm.createTable('templates', {
      id: {
        type: 'uuid',
        primaryKey: true,
        default: pgm.func('gen_random_uuid()')
      },
      name: { type: 'text', notNull: true },
      description: { type: 'text' },
      azure_blob_url: { type: 'text', notNull: true },
      template_text: { type: 'text' },
      created_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp')
      },
      updated_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp')
      }
    });
  }
  
  export function down(pgm) {
    pgm.dropTable('templates');
  }
  