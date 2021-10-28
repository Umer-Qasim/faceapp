import { Meteor } from 'meteor/meteor';
import { PostsCollection } from '/imports/api/Posts';

function insertPost({ text }) {
  PostsCollection.insert({text, createdAt: new Date()});
}

const userImages = ['https://cdn-icons-png.flaticon.com/512/1177/1177568.png', 
                    'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
                    'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                    'https://cdn-icons-png.flaticon.com/512/64/64572.png'
                  ]

Meteor.startup(() => {
  
});
