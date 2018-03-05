function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('articles');
const url = 'http://localhost:3000/articles/getAllArticles';

fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
        return data.map(function(article) {
            let div = createNode('div'),
                p = createNode('p'),
                h1 = createNode('h1');

            p.innerHTML = `${article.datePost} ${article.textPost} `;
            h1.innerHTML = article.title;
            append(div, p);
            append(div, h1);
        });
    })
    .catch(function(error) {
        console.log(error);
    });
