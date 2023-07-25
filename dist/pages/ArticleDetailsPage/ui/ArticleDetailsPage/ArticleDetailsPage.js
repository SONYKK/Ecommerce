var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from "../../../../entities/Article";
import { useParams } from 'react-router-dom';
import { Text, TextSize } from "../../../../shared/ui/Text/Text";
import { CommentList } from "../../../../entities/Comment";
import { DynamicModuleLoader } from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "../../../../features/addCommentForm";
import { Page } from "../../../../widgets/Page/Page";
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendations, } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations, } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (props) {
    var className = props.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    var dispatch = useDispatch();
    var comments = useSelector(getArticleComments.selectAll);
    var recommendations = useSelector(getArticleRecommendations.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t('Статья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: [_jsx(ArticleDetailsPageHeader, {}, void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Рекомендуем') }, void 0), _jsx(ArticleList, { articles: recommendations, isLoading: recommendationsIsLoading, className: cls.recommendations, target: "_blank" }, void 0), _jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailsPage);
