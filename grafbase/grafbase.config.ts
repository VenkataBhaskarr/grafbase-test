import {g, config} from '@grafbase/sdk'

const post = g.model('Posts',{
    title: g.string()!,
    comments: g.relation(() => comment).optional().list().optional()
})

const comment = g.model('Comments',{
    text : g.string()!,
    post : g.relation(post)
})

export default config({
    schema : g
})