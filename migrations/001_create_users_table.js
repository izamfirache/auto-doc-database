export function up(pgm) {
    // Enable UUID support
    pgm.createExtension('pgcrypto', { ifNotExists: true });
  
    pgm.createTable('users', {
      id: {
        type: 'uuid',
        primaryKey: true,
        default: pgm.func('gen_random_uuid()')
      },
      name: { type: 'text', notNull: true },
      email: { type: 'text', notNull: true, unique: true },
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
    pgm.dropTable('users');
  }
  