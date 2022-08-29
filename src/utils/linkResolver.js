exports.linkResolver = (doc) => {
   // URL for a quiz type
   if (doc.type === 'quiz') {
     return `/quiz/${doc.uid}`
   }
 
   // Backup for all other types
   return '/'
 }