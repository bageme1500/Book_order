 const {
    createError,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    CONFLICT,
    NOT_FOUND,
    UNPROCESSABLE,
    GENERAL_ERROR
 } = require('../helpers/error_helper.js');

const unauthorized = (err,req,res,next)=>{
    if(err.status !== UNAUTHORIZED)return next(err);
    return res.status(UNAUTHORIZED).send({
        ok:false,
        message:err.message||'Unauthorized',
        errors:[err.message],
    });
};
const badrequest = (err,req,res,next)=>{
    if(err.status !== BAD_REQUEST)return next(err);
    return res.status(BAD_REQUEST).send({
        ok:false,
        message:err.message||'Badrequest',
        errors:[err.message],
    });
};
const forbidden = (err,req,res,next)=>{
    if(err.status !== FORBIDDEN)return next(err);
    return res.status(FORBIDDEN).send({
        ok:false,
        message:err.message||'Forbidden',
        errors:[err.message],
    });
};
const conflict = (err,req,res,next)=>{
    if(err.status !== CONFLICT)return next(err);
    return res.status(CONFLICT).send({
        ok:false,
        message:err.message||'Conflict',
        errors:[err.message],
    });
};
const notfound = (err,req,res,next)=>{
    if(err.status !== NOT_FOUND)return next(err);
    return res.status(NOT_FOUND).send({
        ok:false,
        message:err.message||'Not found',
        errors:[err.message],
    });
};
const unprocessable = (err,req,res,next)=>{
    if(err.status !== UNPROCESSABLE)return next(err);
    return res.status(UNPROCESSABLE).send({
        ok:false,
        message:err.message||'Unprocessable',
        errors:[err.message],
    });
};
const generalerror = (err,req,res,next)=>{
    if(err.status !== GENERAL_ERROR)return next(err);
    return res.status(GENERAL_ERROR).send({
        ok:false,
        message:err.message||'General error',
        errors:[err.message],
    });
};

const exportable ={
    unauthorized,
    badrequest,
    forbidden,
    conflict,
    notfound,
    unprocessable,
    generalerror,
}

const all = Object.keys(exportable).map((key)=>exportable[key]);

module.exports = {
    ...exportable,
    all,
};