exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Lambda App Store 1', github: 'https://github.com/LambdaSchool', short_description: 'Lambda App Store labs project 1'},
        {name: 'Lambda App Store 2', github: 'https://github.com/LambdaSchool2', short_description: 'Lambda App Store labs project 2'},
        {name: 'Lambda App Store 3', github: 'https://github.com/LambdaSchool3', short_description: 'Lambda App Store labs project 3'},
      ]);
    });
}