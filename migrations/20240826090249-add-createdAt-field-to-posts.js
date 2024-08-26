module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

    await db.collection('posts').updateMany(
      { createdAt: { $exists: false } },
      { $set: { createdAt: null } } // Dodanie pola 'createdAt' z wartością domyślną null
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

    await db.collection('posts').updateMany(
      { createdAt: { $exists: true } },
      { $unset: { createdAt: "" } } // Usunięcie pola 'age'
    );
  }
};


// Wykonywana operacja:

//     await db.collection('posts').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: true } });
//     Ta linia kodu aktualizuje jeden dokument w kolekcji posts, który spełnia warunek { artist: 'The Beatles' }.
//     Operacja $set ustawia wartość pola blacklisted na true w wybranym dokumencie.
//Migracja ta ustawia flagę blacklisted na true dla wszystkich dokumentów w kolekcji posts, gdzie artist to 'The Beatles'.


// COMMON JS exports
// module.exports = {
//   async up(db, client) {
//     // TODO write your migration here.
//     // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
//     // Example:
//     // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

//     await db.collection('posts').updateMany(
//       { createdAt: { $exists: false } },
//       { $set: { createdAt: null } } // Dodanie pola 'createdAt' z wartością domyślną null
//     );
//   },

//   async down(db, client) {
//     // TODO write the statements to rollback your migration (if possible)
//     // Example:
//     // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

//     await db.collection('posts').updateMany(
//       { createdAt: { $exists: true } },
//       { $unset: { createdAt: "" } } // Usunięcie pola 'age'
//     );
//   }
// };