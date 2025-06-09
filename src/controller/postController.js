import postService from '../service/postService.js';


class PostController {
    async createPost(req, res, next) {
        try {
            console.log(`Author: ${req.params.author}`);
            console.log(`Request Body:`, req.body);

            const post = await postService.createPost(req.params.author, req.body);
            res.status(201).json(post);
        } catch (err) {
            console.error('Error creating post:', err);
            next(err);
        }
    }


    async getPostById(req, res, next) {
        try {
            const post = await postService.getPostById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            next(err);
        }
    }


    async addLike(req, res, next) {
        try {
            await postService.addLike(req.params.id);
            res.sendStatus(204);
        } catch (err) {
            next(err);
        }
    }


    async getPostsByAuthor(req, res, next) {
        try {
            const posts = await postService.getPostsByAuthor(req.params.author);
            res.json(posts);
        } catch (err) {
            next(err);
        }
    }


    async addComment(req, res, next) {
        try {
            const post = await postService.addComment(req.params.id, req.params.commenter, req.body.message);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }


    async deletePost(req, res, next) {
        try {
            const post = await postService.deletePost(req.params.id);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }


    async getPostsByTags(req, res, next) {
        // FIXME if values array
        try {
            const posts = await postService.getPostsByTags(req.query.values);
            res.json(posts);
        } catch (err) {
            next(err);
        }
    }


    async getPostsByPeriod(req, res, next) {
        try {
            const {dateFrom, dateTo} = req.query;
            const posts = await postService.getPostsByPeriod(dateFrom, dateTo);
            res.json(posts);
        } catch (err) {
            next(err);
        }
    }


    async updatePost(req, res, next) {
        try {
            const post = await postService.updatePost(req.params.id, req.body);
            res.json(post);
        } catch (err) {
            next(err);
        }
    }
}


export default new PostController();
