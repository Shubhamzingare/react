 function customRender(reactEle , container) {
    // const domElement =  document.createElement(reactEle.type)
    
    // domElement.innerHTML = reactEle.children
    // domElement.setAttribute('href', reactEle.props.href)
    // domElement.setAttribute('target', reactEle.props.target)

    // container.appendChild(domElement);  


    const domElement = document.createElement(reactEle.type);

    domElement.innerHTML = reactEle.children;
    
    for (const prop in reactEle.props) {
        if(prop === 'children') 
        continue
        domElement.setAttribute(prop, reactEle.props[prop])
    }

    container.appendChild(domElement);
}
 
 const reactEle = {
    type: 'a',
    props: {
        href: 'https://reactjs.org',
        children: 'React',
        target: '_blank',
    },
    children: 'Click me to vist Reactjs.org'
 }

  const mainContainer = document.getElementById('root');


customRender( reactEle, mainContainer)
