Of course. Here is another real-world data deduplication problem.

Merging and Deduplicating User Contact Lists 👥
You're working on a feature for a new social media app that allows users to import contacts from multiple sources, like their phone and their email account. After importing, you have two separate lists of contacts. Your task is to merge these lists into a single master list, removing any duplicate entries.

A contact is considered a duplicate if they have the same email address. If you find a duplicate, you should prioritize the contact from the phoneContacts list, as it might contain more up-to-date information (like a phone number). The final list should not contain any contacts with the same email.

Sample Data
Here are the two arrays of contact objects you'll be working with:

JavaScript

const phoneContacts = [
  { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
  { name: 'Bob', email: 'bob@example.com', phone: '234-567-8901' },
  { name: 'Charlie', email: 'charlie@example.com', phone: '345-678-9012' }
];

const emailContacts = [
  { name: 'Alice Smith', email: 'alice@example.com', source: 'Gmail' },
  { name: 'David', email: 'david@example.com', source: 'Gmail' },
  { name: 'Bob Johnson', email: 'bob@example.com', source: 'Outlook' } // Duplicate email
];

function mergeAndDeduplicateWithMap(phoneContacts, emailContacts) {
  // Use email as the key and the contact object as the value
  let contactsMap = new Map();

  // First, add all contacts from the list that has lower priority
  for (const contact of emailContacts) {
    contactsMap.set(contact.email, contact);
  }

  // Then, add all contacts from the priority list.
  // This will overwrite any existing entries with the same email.
  for (const contact of phoneContacts) {
    contactsMap.set(contact.email, contact);
  }

  // The Map now contains all unique contacts, with the phone version replacing
  // the email version where duplicates existed.
  // Convert the Map's values back to an array.
  return Array.from(contactsMap.values());
}