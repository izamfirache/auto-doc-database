export function up(pgm) {
    pgm.createTable('templates', {
      id: {
        type: 'uuid',
        primaryKey: true,
        default: pgm.func('gen_random_uuid()')
      },
      user_id: {
        type: 'uuid',
        notNull: true,
        references: 'users(id)',
        onDelete: 'CASCADE'
      },
      name: { type: 'text', notNull: true },
      description: { type: 'text' },
      azure_blob_url: { type: 'text', notNull: true },
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
  
  export function   down(pgm) {
    pgm.dropTable('templates');
  }
  