const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    email: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING},
    reg_date: {type: DataTypes.DATE},
    birth_date: {type: DataTypes.DATE},
    bio: {type: DataTypes.TEXT},
    band: {type: DataTypes.STRING},
    location: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
});

const UserRatings = sequelize.define('user_ratings', {
    user: {type: DataTypes.STRING},
    rating_for: {type: DataTypes.STRING},
    mark: {type: DataTypes.INTEGER}
});

const UserFollowers = sequelize.define('user_followers', {
    follower: {type: DataTypes.STRING},
    following: {type: DataTypes.STRING}
});

const UserBlogPost = sequelize.define('user_blog_post', {
    user: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    caption_pic_url: {type: DataTypes.STRING},
});

const Roles = sequelize.define('roles', {
    name: {type: DataTypes.STRING, primaryKey: true},
    icon_url: {type: DataTypes.STRING},
});

const Projects = sequelize.define('projects', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    details: {type: DataTypes.TEXT},
    picture: {type: DataTypes.STRING},
    owner: {type: DataTypes.STRING},
    state: {type: DataTypes.CHAR}
});

const ProjectMembers = sequelize.define('project_members', {
    project: {type: DataTypes.INTEGER},
    user: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING}
});

const ProjectFollowers = sequelize.define('project_followers', {
    follower: {type: DataTypes.STRING},
    following: {type: DataTypes.STRING}
});

const ProjectDiscussionPost = sequelize.define('project_discussion_pist', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    project: {type: DataTypes.INTEGER},
    user: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE}
});

const ProjectAttachments = sequelize.define('project_attachments', {
    project: {type: DataTypes.INTEGER},
    attachment_url: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    user: {type: DataTypes.STRING},
});

const EquipmentPhotos = sequelize.define('equipment_photos', {
    equipment: {type: DataTypes.INTEGER},
    photo_url: {type: DataTypes.STRING}
});

const Equipment = sequelize.define('equipment', {
    owner: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    details: {type: DataTypes.TEXT},
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const BlogPostComments = sequelize.define('blog_post_comments', {
    blog_post: {type: DataTypes.STRING},
    user: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT}
});