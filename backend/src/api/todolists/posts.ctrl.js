import Post from '../../models/todo';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    console.log('Middleware Activated');
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    return next();
};

export const write = async (ctx) => {
    const { title } = ctx.request.body;

    const post = new Post({
        title,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;

    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            ctx.body = {
                message: 'ポストが存在しません',
            };
            return;
        }
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const remove = async (ctx) => {
    const { id } = ctx.params;

    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
        console.log('Successfully Deleted ');
    } catch (error) {
        ctx.throw(500, error);
    }
};
export const removeAll = async (ctx) => {
    try {
        await Post.deleteMany();
        ctx.status = 204;
        console.log('Successfully ALL Deleted ');
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const update = async (ctx) => {
    const { id } = ctx.params;

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, { new: true }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};
export const checkAll = async (ctx) => {
    try {
        const post = await Post.updateMany({ checked: false }, { $set: { checked: true } }, {});
        const post1 = await Post.updateMany({ checked: true }, { $set: { checked: false } }, {});
        ctx.body = post;
        ctx.body = post1;
        // console.log('Success');
    } catch (error) {
        ctx.throw(500, error);
    }
};
