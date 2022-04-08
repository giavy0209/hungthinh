import { Router } from 'express'
import { Banners, Categories, News } from 'models'
import path from 'path'
const router = Router()

const getCategories = async () => {
    const project = await Categories.find({ type: 1 })
    const news = await Categories.find({ type: 2 })
    return { project, news }
}

const getNews = async ({ skip = 0, limit = 5, categories = '', categoriesType = 1 }: { skip?: number, limit?: number, categories?: string, categoriesType?: number }) => {
    const query: { "categories.type": number, "categories.slug"?: string } = { "categories.type": categoriesType }
    if (categories) query["categories.slug"] = categories
    const news = await News.aggregate([
        { $match: {} },
        {
            $lookup: {
                from: 'categories',
                localField: "categories",
                foreignField: '_id',
                as: 'categories'
            }
        },
        { $unwind: { path: '$categories' } },
        { $match: query },
        { $skip: skip },
        { $limit: limit },
        { $sort: { _id: -1 } }
    ])
    return news

}

const getBanner = async () => {
    const banners = await Banners.find({})
        .sort({ _id: -1 })
    return banners
}

const getNew = async (slug: string) => {
    const news = await News.findOne({ slug })
    return news
}


router.route('/')
    .get(async (req, res) => {
        const { news, project } = await getCategories()
        const newProject = await getNews({ categoriesType: 1, limit: 6 })
        const newNews = await getNews({ categoriesType: 2, limit: 5 })
        console.log(newNews);
        
        const banners = await getBanner()
        res.render('client/pages/index', { news, project, newProject, newNews, banners })
    })

router.route('/gioi-thieu')
    .get(async (req, res) => {
        const { news, project } = await getCategories()
        res.render('client/pages/gioithieu', { news, project, })
    })

router.route('/doi-tac')
    .get(async (req, res) => {
        const { news, project } = await getCategories()
        res.render('client/pages/doi-tac', { news, project, })
    })

router.route('/du-an/:projectId?')
    .get(async (req, res) => {
        const projectId = req.params.projectId
        const { news, project } = await getCategories()
        const allNews = await getNews({ limit: 9999, categoriesType: 1, categories: projectId })
        res.render('client/pages/du-an', { news, project, allNews })
    })

router.route('/du-an/:projectId/:newsId')
    .get(async (req, res) => {
        const projectId = req.params.projectId
        const newsId = req.params.newsId
        const { news, project } = await getCategories()
        const allNews = await getNews({ limit: 6, categoriesType: 1, categories: projectId })
        const newsDetail = await getNew(newsId)
        res.render('client/pages/du-an-detail', { news, project, allNews, newsDetail })
    })

router.route('/tin-tuc/:categoriesId?')
    .get(async (req, res) => {
        const categoriesId = req.params.categoriesId
        const { news, project } = await getCategories()
        const allNews = await getNews({ limit: 6, categoriesType: 2, categories: categoriesId })
        res.render('client/pages/tin-tuc', { news, project, allNews })
    })

router.route('/tin-tuc/:categoriesId/:newsId')
    .get(async (req, res) => {
        const categoriesId = req.params.categoriesId
        const newsId = req.params.newsId
        const { news, project } = await getCategories()
        const allNews = await getNews({ limit: 6, categoriesType: 2, categories: categoriesId })
        const newsDetail = await getNew(newsId)
        res.render('client/pages/tin-tuc-detail', { news, project, allNews, newsDetail })
    })

export default router