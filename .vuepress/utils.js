export function isMenuItem(page) {
    return page.title != 'Home' && !page.frontmatter.post
}

export function isPost(page) {
    return page.frontmatter.post
}
