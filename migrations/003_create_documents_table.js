export function up(pgm) {
    pgm.createTable('documents', {
      id: {
        type: 'uuid',
        primaryKey: true,
        default: pgm.func('gen_random_uuid()')
      },
      template_id: {
        type: 'uuid',
        notNull: true,
        references: 'templates(id)',
        onDelete: 'CASCADE'
      },
      user_id: {
        type: 'uuid',
        notNull: true,
        references: 'users(id)',
        onDelete: 'CASCADE'
      },
      azure_blob_url: { type: 'text', notNull: true },
      created_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp')
      }
    });
  }
  
  export function   down(pgm) {
    pgm.dropTable('documents');
  }
  